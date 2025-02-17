import {
  AuthMiddlewareBaseOptions,
  AuthMiddlewareOptions,
  executeRequestOptions,
  MiddlewareRequest,
  Next,
  PasswordAuthMiddlewareOptions,
  Task,
  TokenInfo,
} from '../types/sdk.d'
import { buildRequestForRefreshTokenFlow } from './build-requests'

function mergeAuthHeader(
  token: string,
  req: MiddlewareRequest
): MiddlewareRequest {
  return {
    ...req,
    headers: {
      ...req.headers,
      Authorization: `Bearer ${token}`,
    },
  }
}

function calculateExpirationTime(expiresIn: number): number {
  return (
    Date.now() +
    // Add a gap of 2 hours before expiration time.
    expiresIn * 1000 -
    2 * 60 * 60 * 1000
  )
}

async function executeRequest({
  fetcher,
  url,
  basicAuth,
  body,
  tokenCache,
  requestState,
  pendingTasks,
  response,
  tokenCacheKey,
}: executeRequestOptions): Promise<void> {
  try {
    const _res: Response = await fetcher(url, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basicAuth}`,
        'Content-Length': Buffer.byteLength(body).toString(),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    })

    if (_res.ok) {
      const {
        access_token: token,
        expires_in: expiresIn,
        refresh_token: refreshToken,
      }: TokenInfo = await _res.json()

      const expirationTime = calculateExpirationTime(expiresIn)

      // cache new generated token
      tokenCache.set({ token, expirationTime, refreshToken }, tokenCacheKey)

      // Dispatch all pending requests
      requestState.set(false)

      /**
       * Freeze and copy pending queue, reset original one for accepting
       * new pending tasks
       */
      const executionQueue = pendingTasks.slice()
      pendingTasks = []

      executionQueue.forEach((task: Task) => {
        // Assign the new token in the request header
        const requestWithAuth = mergeAuthHeader(token, task.request)
        /**
         * console.log('test', cache, pendingTasks)
         * Continue by calling the task's own next function
         */
        task.next(requestWithAuth, task.response)
      })

      return
    }

    // Handle error response
    let parsed
    const text: any = await _res.text()
    try {
      parsed = JSON.parse(text)
    } catch (error) {
      /* noop */
    }

    const error: any = new Error(parsed ? parsed.message : text)
    if (parsed) error.body = parsed

    /**
     * to notify that token is either fetched or failed
     * in the below case token failed to be fetched
     * and reset requestState to false
     * so requestState could be shared between multi authMiddlewareBase functions
     */
    requestState.set(false)
    response.reject(error)
  } catch (error) {
    /**
     * to notify that token is either fetched or failed
     * in the below case token failed to be fetched
     * and reset requestState to false
     * so requestState could be shared between multi authMiddlewareBase functions
     */
    requestState.set(false)
    if (response && typeof response.reject === 'function')
      response.reject(error)
  }
}

export default function authMiddlewareBase(
  {
    request,
    response,
    url,
    basicAuth,
    body,
    pendingTasks,
    requestState,
    tokenCache,
    tokenCacheKey,
    fetch: fetcher,
  }: AuthMiddlewareBaseOptions,
  next: Next,
  userOptions?: AuthMiddlewareOptions | PasswordAuthMiddlewareOptions
) {
  if (!fetcher && typeof fetch === 'undefined')
    throw new Error(
      '`fetch` is not available. Please pass in `fetch` as an option or have it globally available.'
    )
  if (!fetcher) fetcher = fetch
  // Check if there is already a `Authorization` header in the request.
  // If so, then go directly to the next middleware.
  if (
    (request.headers && request.headers.authorization) ||
    (request.headers && request.headers.Authorization)
  ) {
    next(request, response)
    return
  }
  // If there was a token in the tokenCache, and it's not expired, append
  // the token in the `Authorization` header.
  const tokenObj = tokenCache.get(tokenCacheKey)
  if (tokenObj && tokenObj.token && Date.now() < tokenObj.expirationTime) {
    const requestWithAuth = mergeAuthHeader(tokenObj.token, request)
    next(requestWithAuth, response)
    return
  }

  /**
   * Keep pending tasks until a token is fetched
   * Save next function as well, to call it once the token has been fetched, which prevents
   * unexpected behaviour in a context in which the next function uses global vars
   * or Promises to capture the token to hand it to other libraries, e.g. Apollo
   */
  pendingTasks.push({ request, response, next })

  // If a token is currently being fetched, just wait ;)
  if (requestState.get()) return

  // Mark that a token is being fetched
  requestState.set(true)

  /**
   * If there was a refreshToken in the tokenCache, and there was an expired
   * token or no token in the tokenCache, use the refreshToken flow
   */
  if (
    tokenObj &&
    tokenObj.refreshToken &&
    (!tokenObj.token ||
      (tokenObj.token && Date.now() > tokenObj.expirationTime))
  ) {
    if (!userOptions) throw new Error('Missing required options')

    executeRequest({
      fetcher,
      ...buildRequestForRefreshTokenFlow({
        ...userOptions,
        refreshToken: tokenObj.refreshToken,
      }),
      tokenCacheKey,
      tokenCache,
      requestState,
      pendingTasks,
      response,
    })
    return
  }

  // Token and refreshToken are not present or invalid. Request a new token...
  executeRequest({
    fetcher,
    url,
    basicAuth,
    body,
    tokenCacheKey,
    tokenCache,
    requestState,
    pendingTasks,
    response,
  })
}

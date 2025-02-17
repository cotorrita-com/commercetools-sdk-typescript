import { createAuthMiddlewareForAnonymousSessionFlow } from '../../src/sdk-middleware-auth'

import authMiddlewareBase from '../../src/sdk-middleware-auth/base-auth-flow'

jest.mock('../../src/sdk-middleware-auth/base-auth-flow')

function createTestRequest(options) {
  return {
    url: '',
    method: 'GET',
    body: null,
    headers: {},
    ...options,
  }
}

function createTestMiddlewareOptions(options) {
  return {
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    projectKey: 'foo',
    credentials: {
      clientId: '123',
      clientSecret: 'secret',
      anonymousId: 'secretme',
    },
    ...options,
  }
}

describe('Anonymous Session Flow', () => {
  test('should call the base-auth-flow method with the right params', () =>
    new Promise((resolve, reject) => {
      const _authMiddleware = authMiddlewareBase as any
      _authMiddleware.mockImplementation((params, next) => {
        next(params) // makes it easy to test what was passed in
      })
      const request = createTestRequest(null)
      const response = {
        resolve,
        reject,
      } as any
      const next = (actualParams) => {
        expect(actualParams.request).toEqual(request)
        expect(actualParams.response).toEqual(response)
        expect(actualParams.pendingTasks).toEqual([])
        expect(actualParams.url).toBe(
          'https://auth.europe-west1.gcp.commercetools.com/oauth/foo/anonymous/token'
        )
        expect(actualParams.basicAuth).toBe('MTIzOnNlY3JldA==')
        expect(authMiddlewareBase).toHaveBeenCalledTimes(1)
        jest.unmock('../../src/sdk-middleware-auth/base-auth-flow')
        resolve(null)
      }
      const middlewareOptions = createTestMiddlewareOptions(null)
      const authMiddleware =
        createAuthMiddlewareForAnonymousSessionFlow(middlewareOptions)

      authMiddleware(next)(request, response)
    }))
})

# commercetools typescript sdks

<img src="http://dev.commercetools.com/assets/img/CT-logo.svg" width="550px" alt="CT-logo"></img>

## Introduction

This repository contains the commercetools platform, import-api and machine learning packages for typescript generated from our api reference.

<p align="center">
  
</p>

## Support

If you have any urgent issues regarding this repository please create a support request over our [official support channel](http://support.commercetools.com).

## Packages

### SDK

| Package                                    | Version                                                               |
| ------------------------------------------ | --------------------------------------------------------------------- |
| [`platform-sdk`](/packages/platform-sdk)   | [![platform-sdk Version][platform-sdk-icon]][platform-sdk-version]    |
| [`importapi-sdk`](/packages/importapi-sdk) | [![importapi-sdk Version][importapi-sdk-icon]][importapi-sdk-version] |
| [`ml-sdk`](/packages/ml-sdk)               | [![ml-sdk Version][ml-sdk-icon]][ml-sdk-version]                      |

[platform-sdk-version]: https://www.npmjs.com/package/@commercetools/platform-sdk
[platform-sdk-icon]: https://img.shields.io/npm/v/@commercetools/platform-sdk.svg?style=flat-square
[importapi-sdk-version]: https://www.npmjs.com/package/@commercetools/platform-sdk
[importapi-sdk-icon]: https://img.shields.io/npm/v/@commercetools/platform-sdk.svg?style=flat-square
[ml-sdk-version]: https://www.npmjs.com/package/@commercetools/platform-sdk
[ml-sdk-icon]: https://img.shields.io/npm/v/@commercetools/platform-sdk.svg?style=flat-square

# 
<!--Temporal loaction of the SDK Docs, this will be moved once the testing is over-->

# SDK-Client

The sdk-client for TypeScript the client which facilitates calls mainly HTTP [requests](https://commercetools.github.io/nodejs/sdk/Glossary.html#clientrequest) to the platform api by using some set of middlewares.

Unlike the nodejs client, the TypeScript client is a little different in it's usage, however, they are both very similar in every other way.

### Install

```js
npm install --save @commercetools/sdk-client
```

<!-- ### Browser
```js
<script src="https://unpkg.com/@commercetools/platform-sdk/dist/platform-sdk.umd.js"></script>
<script>
  // global: TypescriptSdk
</script>
``` -->

### Usasge example

Example on how to build a client using only the `defaultClient` class method.

```js
// ClientBuilder.js
import ClientBuilder from '@commercetools/sdk-client'

const projectKey = 'demo-key'
const oauthUri = 'https://auth.europe-west1.gcp.commercetools.com'
const baseUri = 'https://api.europe-west1.gcp.commercetools.com'
const credentials = {
  clientId: 'clientID12345',
  clientSecret: 'clientSecret12345',
}

export const apiRoot = new ClientBuilder()
  .defaultClient(baseUri, credentials, oauthUri, projectKey)
  .build()
```

Example on how to build a client using only the middlewares or the **withClientCredentialsFlow** and **withHttpMiddleware**

```typescript
// ClientBuilder.js

const fetch = require('node-fetch')
import ClientBuilder from '@commercetools/sdk-client'

// create the authMiddlewareOptions object
const authMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey: 'demo-key',
  credentials: {
    clientId: 'clientID12345',
    clientSecret: 'clientSecret12345',
  },
  oauthUri: 'adminAuthUrl',
  scopes: ['manage_project:demo-key'],
  fetch,
}

// create the httpMiddlewareOptions object also
const httpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  fetch,
}

export const client: Client = new ClientBuilder()
  .withProjectKey(projectKey) // not necessary if it was passed in the options
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build()
```

Now the Client object is ready to be used to make HTTP calls to the platform api.

```typescript
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'
import { client } from './ClientBuilder'

const apiRoot = createApiBuilderFromCtpClient(client)

// to get a project details
export const getProject = () => {
  return apiRoot
    .withProjectKey({ projectKey })
    .get()
    .execute()
}

getProject()
  .then(console.log)
  .catch(console.error)
```

`-`

### The authMiddleware methods

These are class methods that creates auth middlewares using different auth flows

#### withAnonymousSessionFlow(options: _AnonymousAuthMiddlewareOptions_)

Creates a [middleware](https://commercetools.github.io/nodejs/sdk/Glossary.html#middleware) to handle authentication for the [Anonymous Session](https://docs.commercetools.com/http-api-authorization.html#tokens-for-anonymous-sessions) Flow of the commercetools platform API.

#### Named arguments (options)

1. `host` (_String_): the host of the OAuth API service
2. `projectKey` (_String_): the key of the project to assign the default scope to
3. `credentials` (_Object_): the client credentials for authentication (`clientId`, `clientSecret`, `anonymousId`)
4. `scopes` (_Array_): a list of scopes (default manage_project:{projectKey}) to assign to the OAuth token
5. `fetch` (_Function_): A fetch implementation which can be e.g. node-fetch or unfetch but also the native browser fetch function. Only needs be be passed if not globally available (e.g. through isomorphic-fetch)

#### Usage Example

```typescript
const fetch = require("node-fetch")
import ClientBuilder from "@commercetools/sdk-client"

const options: AnonymousAuthMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey: 'demo-key',
  credentials: {
    clientId: 'clientID12345',
    clientSecret: 'clientSecret12345',
    anonymousId: 'client-anonymouseID',
  },
  scopes: ['manage_project:demo-key'],
  fetch: fetch,
}

const client: Client = new ClientBuilder()
  .withAnonymousSessionFlow(options)
  ...
```

`-`

#### withClientCredentialsFlow(options: _AuthMiddlewareOptions_)

Creates a [middleware](https://commercetools.github.io/nodejs/sdk/Glossary.html#middleware) to handle authentication for the Client [Credentials Flow]() of the commercetools platform API.

#### Named arguments (options)

1. `host` (_String_): the host of the OAuth API service
2. `projectKey` (_String_): the key of the project to assign the default scope to
3. `credentials` (_Object_): the client credentials for authentication (`clientId`, `clientSecret`)
4. `oauthUri` (_String_): optional oauthUri string
5. `scopes` (_Array_): a list of scopes (default manage_project:{projectKey}) to assign to the OAuth token
6. `fetch` (_Function_): A fetch implementation which can be e.g. node-fetch or unfetch but also the native browser fetch function. Only needs be be passed if not globally available (e.g. through isomorphic-fetch)

#### Usage Example

```typescript
const fetch = require("node-fetch")
import ClientBuilder from "@commercetools/sdk-client"

const options: AuthMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey: 'demo-key',
  credentials: {
    clientId: 'clientID12345',
    clientSecret: 'clientSecret12345',
  },
  oauthUri: 'admin-authUrl',
  scopes: ['manage_project:demo-key'],
  fetch: fetch
}

const client: Client = new ClientBuilder()
  .withClientCredentialsFlow(options)
  ...
```

`-`

#### withExistingTokenFlow(authorization: _string_, options: _ExistingTokenMiddlewareOptions_)

Creates a [middleware](https://commercetools.github.io/nodejs/sdk/Glossary.html#middleware) that attaches a provided access token `Authorization` header.

#### Named arguments (authorization, options)

1. `authorization` (_String_): the value for the Authorization header. For example, you may pass the scheme "Bearer" ("Bearer 1234") or "Basic" ("Basic 134") and so on, depending on your authentication mechanism.
2. `options` is an optional (_Object_), having the following properties:

- `force` (_Boolean_): if set to true, existing Authorization header (if any) in the request will be overridden with the supplied access token (Default: _true_)

#### Usage Example

```typescript
const fetch = require("node-fetch")
import ClientBuilder from "@commercetools/sdk-client"

const accessToken = 'my-access-token'
const options: ExistingTokenMiddlewareOptions = {
  force: true
}

const client: Client = new ClientBuilder()
  .withExistingTokenFlow(accessToken, options)
  ...
```

`-`

#### withPasswordFlow(options: _PasswordAuthMiddlewareOptions_)

Creates a [middleware](https://commercetools.github.io/nodejs/sdk/Glossary.html#middleware) to handle authentication for the [Password Flow](https://docs.commercetools.com/http-api-authorization.html#password-flow) of the commercetools platform API.

#### Named arguments (options)

1. `host` (_String_): the host of the OAuth API service
2. `projectKey` (_String_): the key of the project to assign the default scope to
3. `credentials` (_Object_): the client credentials for authentication (clientId, clientSecret, user)

- The `user` field is an object containing `username` and `password` see sample below

4. `scopes` (_Array_): a list of scopes to assign to the OAuth token. No default scope is sent
5. `fetch` (_Function_): A fetch implementation which can be e.g. `node-fetch` or `unfetch` but also the native browser fetch function. Only needs be be passed if not globally available (e.g. through isomorphic-fetch)

#### Usage Example

```typescript
const fetch = require("node-fetch")
import ClientBuilder from "@commercetools/sdk-client"


const options: PasswordAuthMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey: 'demo-key'
  credentials: {
  clientId: 'myClientID12345,'
  clientSecret: 'myClientSecret12345,'
    user: {
      username: 'my-username',
      password: 'my-password',
    },
  },
  fetch: fetch,
}

const client: Client = new ClientBuilder()
  .withPasswordFlow(options)
  ...
```

`-`

#### withRefreshTokenFlow(options: _RefreshAuthMiddlewareOptions_)

Creates a [middleware](https://commercetools.github.io/nodejs/sdk/Glossary.html#middleware) to handle authentication for the Refresh Token Flow of the commercetools platform API.

#### Named arguments (options)

1. `host` (_String_): the host of the OAuth API service
2. `projectKey` (_String_): the key of the project to assign the default scope to
3. `credentials` (_Object_): the client credentials for authentication (clientId, clientSecret)
4. `refreshToken` (_String_): refreshToken from the API to use to fetch new token.
5. `fetch` (_Function_): A fetch implementation which can be e.g. node-fetch or unfetch but also the native browser fetch function. Only needs be be passed if not globally available (e.g. through isomorphic-fetch)

#### Usage Example

```typescript
const fetch = require("node-fetch")
import ClientBuilder from "@commercetools/sdk-client"

const options: RefreshAuthMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey: 'demo-key',
  credentials: {
    clientId: 'clientID12345',
    clientSecret: 'clientSecret12345',
  },
  refreshToken: 'my-refreshToken',
  fetch: fetch,
}

const client: Client = new ClientBuilder()
  .withRefreshTokenFlow(options)
  ...
```

`-`

### Other middlewares

There are also other class methods that creates middlewares used to fully cusotmize and control the client, they are described in details below.

#### withHttpMiddleware(options: _HttpMiddlewareOptions_)

Creates a [middleware](https://commercetools.github.io/nodejs/sdk/Glossary.html#middleware) to handle HTTP requests for the commercetools platform API.

The HTTP middleware can run in either a browser or Node.js environment. For Node.js environments it is important to either have a fetch implementation either globally available via e.g. [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) or to pass it in as an argument (see below) via e.g. [node-fetch](https://github.com/bitinn/node-fetch). In browsers without a native fetch implementation any well known fetch polyfill should be compatible with the middleware such as [whatwg-fetch](https://github.com/whatwg/fetch) or [unfetch](https://github.com/developit/unfetch).

#### Named arguments (options)

1. `host` (_String_): the host of the HTTP API service
2. `credentialsMode` (_String_): one of the supported credentials modes (`omit`, `same-origin`, `include`), useful when working with HTTP Cookies. (_optional_)
3. `includeResponseHeaders` (_Boolean_): flag whether to include the response headers in the response, if omitted headers is omitted from response
4. `includeOriginalRequest` (_Boolean_): flag whether to include the original request sent in the response. Can be useful if you want to see the final request being sent.
5. `maskSensitiveHeaderData` (_Boolean_): flag to mask sensitie data in the header. e.g. Authorization token
6. `enableRetry` (_Boolean_): flag to enable retry on network errors and 500 response. (Default: false)
7. `retryConfig` (_Object_): Field required in the object listed below
8. `maxRetries` (_Number_): number of times to retry the request before failing the request. (Default: 50)
9. `retryDelay` (_Number_): amount of milliseconds to wait before retrying the next request. (Default: 200)
10. `backoff` (_Boolean_): activates exponential backoff. Recommended to prevent spamming of the server. (Default: true)
11. `maxDelay` (_Number_): The maximum duration (milliseconds) to wait before retrying, useful if the delay time grew exponentially more than reasonable
12. `fetch` (_Function_): A fetch implementation which can be e.g. `node-fetch` or `unfetch` but also the native browser `fetch` function
13. `timeout` (_Number_): Request/response timeout in ms. Must have globally available or passed in AbortController
14. `abortController` or `getAbortController` depending on you chose to handle the timeout (`abortController`): This property accepts the `AbortController` instance. Could be [abort-controller](https://www.npmjs.com/package/abort-controller) or globally available one.

#### Retrying requests

This modules have a retrying ability incase of network failures or 503 response errors. To enable this behavior, pass the `enableRetry` flag in the options and also set the maximum number of retries (`maxRetries`) and amount of milliseconds to wait before retrying a request (`retryDelay`).

The repeater implements an `exponential` delay, meaning the wait time is not constant and it grows on every retry.

##### Token caching

The token is retrieved and cached upon the first request made by the client. Then, it gets refreshed when it expires. To utilize this, please make sure you use the same client instance and do not create new ones.

#### Usage example

```typescript
const fetch = require("node-fetch")
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'

const options: HttpMiddlewareOptions = {
  host: 'https://api.commercetools.com',
  includeResponseHeaders: true,
  includeOriginalRequest: true,
  maskSensitiveHeaderData: true,
  enableRetry: true,
  retryConfig: {
    maxRetries: 2,
    retryDelay: 300, //milliseconds
    maxDelay: 5000, //milliseconds
  },

  // Optional if not globally available
  fetch,
}

const client: Client = new ClientBuilder()
  .withHttpMiddleware(options)
  ...
```

##### abortController | getAbortController

This is used to signal the retry module to retry the request in an event of a request timeout or service outage.

#### Usage example

```typescript
// Use default options
const options: HttpMiddlewareOptions = {
  host: testHost,
  timeout: 1000, // time out after 1s
  fetch,
  abortController: new AbortController(),
}
```

Note however the slight difference in usage of the `getAbortController` property of the http middleware.

```typescript
// Use default options
const options: HttpMiddlewareOptions = {
  host: testHost,
  timeout: 1000, // time out after 1s
  fetch,
  getAbortController: () => new AbortController(),
}
```

This is to ensure that a new instance of the AbortController is always created and is independent of each other. Unlike the former (abortController) which only creates a single abortController instance for the middleware, in this very case, if a single request times out, it will propagate to all other http requests that is using the AbortController instance. This is useful when a bunch of sent out requests needs to timeout if at least one within the bunch times out.

##### getErrorByCode(code)

Returns a [custom error](https://commercetools.github.io/nodejs/sdk/Glossary.html#httperrortype) type given its status code.

Arguments
`code` (_Number_): the HTTP status code
Returns
(`Error` or `undefined`): A [custom error](https://commercetools.github.io/nodejs/sdk/Glossary.html#httperrortype) type (e.g. `BadRequest`, `Unauthorized`) if the code matches, otherwise `undefined`.

#### Usage example

```typescript
import { getErrorByCode } from '@commercetools/sdk-middleware-http'

const ErrorType = getErrorByCode(400)
const error = new ErrorType('Oops')
```

`-`

#### withUserAgentMiddleware(options: _UserAgentMiddlewareOptions_)

Creates a [middleware](https://commercetools.github.io/nodejs/sdk/Glossary.html#middleware) to append the `User-Agent` HTTP header to the request.

#### Named arguments (options)

1. `libraryName` (_String_): the name of the library / package / application using the SDK (`optional`)
2. `libraryVersion` (_String_): the version of the library / package / application using the SDK (`optional`)
3. `contactUrl` (_String_): the contact URL of the library / package / application using the SDK (`optional`)
4. `contactEmail` (_String_): the contact email of the library / package / application using the SDK (`optional`)

#### Usage example

```typescript
import ClientBuilder from "@commercetools/sdk-client"

const options: UserAgentMiddlewareOptions = {
  libraryName: 'my-awesome-library',
  libraryVersion: '1.0.0',
  contactUrl: 'https://github.com/commercetools/my-awesome-library'
  contactEmail: 'helpdesk@commercetools.com'
}

const client: Client = new ClientBuilder()
  .withUserAgentMiddleware(options)
  ...

// The User-Agent will be something like:
// commercetools-js-sdk Node.js/6.9.0 (darwin; x64) my-awesome-library/1.0.0 (+https://github.com/commercetools/my-awesome-library; +helpdesk@commercetools.com)
```

`-`

#### withCorrelationIdMiddleware(options: _CorrelationIdMiddlewareOptions_)

Creates a middleware to add a correlation id to executed [requests](https://commercetools.github.io/nodejs/sdk/Glossary.html#clientrequest).

#### Usage example

```typescript
import ClientBuilder from "@commercetools/sdk-client"

const options: CorrelationIdMiddlewareOptions = {
  generate: `prefix/${uuid()}/postifx`
}

const client: Client = new ClientBuilder()
  .withCorrelationIdMiddleware(options)
  ...
```

`-`

#### withQueueMiddleware(options: _QueueMiddlewareOptions_)

Creates a [middleware](https://commercetools.github.io/nodejs/sdk/Glossary.html#middleware) to handle concurrent requests.

#### Named arguments (options)

1. `concurrency` (_Number_): the max number of concurrent requests (default 20)

#### Usage example

```typescript
import ClientBuilder from "@commercetools/sdk-client"

const options: QueueMiddlewareOptions = {
  concurrency: 5 // default is 20
}

const client: Client = new ClientBuilder()
  .withQueueMiddleware(options)
  ...
```

`-`

#### withLoggerMiddleware()

Creates a [middleware](https://commercetools.github.io/nodejs/sdk/Glossary.html#middleware) to log request and response objects being executed.

#### Usage Example

```typescript
import ClientBuilder from "@commercetools/sdk-client"

cont client: Client = new ClientBuilder()
  .withClientCredentialsFlow(...)
  .withLoggerMiddleware() // Log the request / response at this point in the middleware chain, before it gets to the http-middleware
  .withHttpMiddleware(...)
  .withLoggerMiddleware() // Log the request / response after it's being handled by the http-middleware
  ...
```

`-`

#### buid()

To build the client after calling the class methods of choice, we invoke the `build()` as the last method on the `new ClientBuilder()` class instance.

#### Usage Example

```typescript
...
const client: Client = new ClientBuilder()
  .withClientCredentialsFlow(...)
  .withHttpMiddleware(...)
  .withLoggerMiddleware()
  .build()
```

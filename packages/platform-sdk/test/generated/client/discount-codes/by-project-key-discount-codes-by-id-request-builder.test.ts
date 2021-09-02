/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { RequestWithMethod } from '../../../request-with-method'
import { ApiRoot } from '../../../../src'

const apiRoot: ApiRoot = new ApiRoot({ executeRequest: null })

export function getRequestsWithMethodParameters(): RequestWithMethod[] {
  return [
    {
      method: 'get',
      uri: '/test_projectKey/discount-codes/test_ID?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .discountCodes()
        .withId({ ID: 'test_ID' })
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/discount-codes/test_ID',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .discountCodes()
        .withId({ ID: 'test_ID' })
        .get(),
    },
    {
      method: 'post',
      uri: '/test_projectKey/discount-codes/test_ID?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .discountCodes()
        .withId({ ID: 'test_ID' })
        .post({ body: null, headers: null, queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/discount-codes/test_ID',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .discountCodes()
        .withId({ ID: 'test_ID' })
        .post({ body: null, headers: null }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/discount-codes/test_ID?dataErasure=true&version=5',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .discountCodes()
        .withId({ ID: 'test_ID' })
        .delete({ queryArgs: { dataErasure: true, version: 5 } }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/discount-codes/test_ID?version=2',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .discountCodes()
        .withId({ ID: 'test_ID' })
        .delete({ queryArgs: { version: 2 } }),
    },
    {
      method: 'delete',
      uri: '/test_projectKey/discount-codes/test_ID?expand=expand&version=5',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .discountCodes()
        .withId({ ID: 'test_ID' })
        .delete({ queryArgs: { expand: 'expand', version: 5 } }),
    },
  ]
}

describe('Testing ByProjectKeyDiscountCodesByIDRequestBuilder Requests', () => {
  const requestsToTest = getRequestsWithMethodParameters()
  requestsToTest.forEach((rm) => {
    test(`Testing => request method: ${rm.method} and url: ${rm.uri}`, async () => {
      expect(rm.method.toLowerCase()).toBe(
        rm.request.clientRequest().method.toLowerCase()
      )
      expect(rm.uri.toLowerCase()).toBe(
        rm.request.clientRequest().uri.toLowerCase()
      )
    })
  })
})

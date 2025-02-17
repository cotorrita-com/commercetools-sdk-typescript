/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import {
  ChangeHistoryResourceType,
  PlatformInitiatedChange,
  RecordPagedQueryResponse,
} from '../models/common'
import { executeRequest, QueryParam } from '../shared/utils/common-types'
import { ApiRequest } from '../shared/utils/requests-utils'
import { ByProjectKeyByResourceTypeRequestBuilder } from './by-project-key-by-resource-type-request-builder'

export class ByProjectKeyRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public withResourceTypeValue(childPathArgs: {
    resourceType: string
  }): ByProjectKeyByResourceTypeRequestBuilder {
    return new ByProjectKeyByResourceTypeRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }

  public get(methodArgs?: {
    queryArgs?: {
      resourceType?: ChangeHistoryResourceType | ChangeHistoryResourceType[]
      'date.from'?: any
      'date.to'?: any
      limit?: number
      offset?: number
      userId?: string
      type?: string
      clientId?: string
      resourceId?: string
      source?: string
      changes?: string | string[]
      customerId?: string
      excludePlatformInitiatedChanges?:
        | PlatformInitiatedChange
        | PlatformInitiatedChange[]
      expand?: boolean
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<RecordPagedQueryResponse> {
    return new ApiRequest<RecordPagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
      },
      this.args.executeRequest
    )
  }
}

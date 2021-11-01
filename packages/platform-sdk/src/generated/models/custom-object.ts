/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { BaseResource, CreatedBy, LastModifiedBy } from './common'

export interface CustomObject extends BaseResource {
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly createdAt: string
  /**
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources created after 2019-02-01 except for [events not tracked](/client-logging#events-tracked).
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	Present on resources created after 2019-02-01 except for [events not tracked](/client-logging#events-tracked).
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	A namespace to group custom objects.
   *
   */
  readonly container: string
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly value: any
}
export interface CustomObjectDraft {
  /**
   *	A namespace to group custom objects.
   *
   */
  readonly container: string
  /**
   *	A user-defined key that is unique within the given container.
   *
   */
  readonly key: string
  /**
   *
   */
  readonly value: any
  /**
   *
   */
  readonly version?: number
}
export interface CustomObjectPagedQueryResponse {
  /**
   *
   */
  readonly limit: number
  /**
   *
   */
  readonly count: number
  /**
   *
   */
  readonly total?: number
  /**
   *
   */
  readonly offset: number
  /**
   *
   */
  readonly results: CustomObject[]
}
export interface CustomObjectReference {
  readonly typeId: 'key-value-document'
  /**
   *	Unique ID of the referenced resource.
   *
   */
  readonly id: string
  /**
   *
   */
  readonly obj?: CustomObject
}

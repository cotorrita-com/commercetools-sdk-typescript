/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.vrap.io/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */
import {
  Order,
  OrderFromCartDraft,
  OrderPagedQueryResponse,
} from '../../models/order'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyInStoreKeyByStoreKeyOrdersByIDRequestBuilder } from './by-project-key-in-store-key-by-store-key-orders-by-id-request-builder'
import { ByProjectKeyInStoreKeyByStoreKeyOrdersOrderNumberByOrderNumberRequestBuilder } from './by-project-key-in-store-key-by-store-key-orders-order-number-by-order-number-request-builder'

export class ByProjectKeyInStoreKeyByStoreKeyOrdersRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        storeKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public withOrderNumber(childPathArgs: {
    orderNumber: string
  }): ByProjectKeyInStoreKeyByStoreKeyOrdersOrderNumberByOrderNumberRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyOrdersOrderNumberByOrderNumberRequestBuilder(
      {
        pathArgs: {
          ...this.args.pathArgs,
          ...childPathArgs,
        },
        executeRequest: this.args.executeRequest,
        baseUri: this.args.baseUri,
      }
    )
  }
  public withId(childPathArgs: {
    ID: string
  }): ByProjectKeyInStoreKeyByStoreKeyOrdersByIDRequestBuilder {
    return new ByProjectKeyInStoreKeyByStoreKeyOrdersByIDRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }

  /**
   *	Queries orders in a specific Store. The {storeKey} path parameter maps to a Store's key.
   */
  public get(methodArgs?: {
    queryArgs?: {
      expand?: string
      sort?: string
      limit?: number
      offset?: number
      withTotal?: boolean
      where?: string
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string
    }
  }): ApiRequest<OrderPagedQueryResponse> {
    return new ApiRequest<OrderPagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/orders',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
      },
      this.args.executeRequest
    )
  }
  /**
   *	Creates an order from a Cart from a specific Store. The {storeKey} path parameter maps to a Store's key.
   *	When using this endpoint the orders's store field is always set to the store specified in the path parameter.
   *	The cart must have a shipping address set before creating an order. When using the Platform TaxMode,
   *	the shipping address is used for tax calculation.
   *
   */
  public post(methodArgs: {
    queryArgs?: {
      expand?: string
      [key: string]: QueryParam
    }
    body: OrderFromCartDraft
    headers?: {
      [key: string]: string
    }
  }): ApiRequest<Order> {
    return new ApiRequest<Order>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/in-store/key={storeKey}/orders',
        pathVariables: this.args.pathArgs,
        headers: {
          'Content-Type': 'application/json',
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
        body: methodArgs?.body,
      },
      this.args.executeRequest
    )
  }
}

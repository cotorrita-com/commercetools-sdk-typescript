/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.commercetools.com/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */

import {
  Address,
  DeliveryItem,
  LocalizedString,
  Money,
  Parcel,
  Reference,
  SelectionMode,
} from './common'

export type ChangeTargetChangeValue =
  | ChangeTargetCustomLineItemsChangeValue
  | ChangeTargetLineItemsChangeValue
  | ChangeTargetMultiBuyCustomLineItemsChangeValue
  | ChangeTargetMultiBuyLineItemsChangeValue
  | ChangeTargetShippingChangeValue
export type ChangeValueChangeValue =
  | ChangeValueAbsoluteChangeValue
  | ChangeValueExternalChangeValue
  | ChangeValueGiftLineItemChangeValue
  | ChangeValueRelativeChangeValue
export interface AssetChangeValue {
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly name: LocalizedString
}
/**
 *	Shape of the value for cart discounts line item and custom line items target.
 */
export interface ChangeTargetCustomLineItemsChangeValue {
  readonly type: 'customLineItems'
  /**
   *
   */
  readonly predicate: string
}
/**
 *	Shape of the value for cart discounts line item target.
 */
export interface ChangeTargetLineItemsChangeValue {
  readonly type: 'lineItems'
  /**
   *
   */
  readonly predicate: string
}
/**
 *	Shape of the value for cart discounts multiBuyCustomLineItems target.
 */
export interface ChangeTargetMultiBuyCustomLineItemsChangeValue {
  readonly type: 'multiBuyCustomLineItems'
  /**
   *
   */
  readonly predicate: string
  /**
   *	Quantity of line items that need to be present in order to trigger an application of this discount.
   *
   */
  readonly triggerQuantity: number
  /**
   *	Quantity of line items that are discounted per application of this discount.
   *
   */
  readonly discountedQuantity: number
  /**
   *	Maximum number of applications of this discount.
   *
   */
  readonly maxOccurrence: number
  /**
   *
   */
  readonly selectionMode: SelectionMode
}
/**
 *	Shape of the value for cart discounts multiBuyLineItems target.
 */
export interface ChangeTargetMultiBuyLineItemsChangeValue {
  readonly type: 'multiBuyLineItems'
  /**
   *
   */
  readonly predicate: string
  /**
   *	Quantity of line items that need to be present in order to trigger an application of this discount.
   *
   */
  readonly triggerQuantity: number
  /**
   *	Quantity of line items that are discounted per application of this discount.
   *
   */
  readonly discountedQuantity: number
  /**
   *	Maximum number of applications of this discount.
   *
   */
  readonly maxOccurrence: number
  /**
   *
   */
  readonly selectionMode: SelectionMode
}
/**
 *	Shape of the value for cart discounts shipping target.
 */
export interface ChangeTargetShippingChangeValue {
  readonly type: 'shipping'
}
/**
 *	Shape of the value for cart discounts absolute value.
 */
export interface ChangeValueAbsoluteChangeValue {
  readonly type: 'absolute'
  /**
   *
   */
  readonly money: Money[]
}
/**
 *	Shape of the value for product discounts external value.
 */
export interface ChangeValueExternalChangeValue {
  readonly type: 'external'
}
/**
 *	Shape of the value for cart discounts gift line item value.
 */
export interface ChangeValueGiftLineItemChangeValue {
  readonly type: 'giftLineItem'
  /**
   *
   */
  readonly product: Reference
  /**
   *
   */
  readonly variantId: number
  /**
   *
   */
  readonly supplyChannel: Reference
  /**
   *
   */
  readonly distributionChannel: Reference
}
/**
 *	Shape of the value for cart discounts relative value.
 */
export interface ChangeValueRelativeChangeValue {
  readonly type: 'relative'
  /**
   *
   */
  readonly permyriad: number
}
/**
 *	Only available if `expand` is set to true
 */
export interface CustomFieldExpandedValue {
  /**
   *	Name of a custom field.
   *
   */
  readonly name: string
  /**
   *
   */
  readonly value: any
  /**
   *
   */
  readonly label: LocalizedString
}
export interface DeliveryChangeValue {
  /**
   *
   */
  readonly items: DeliveryItem[]
  /**
   *
   */
  readonly address: Address
  /**
   *
   */
  readonly parcels: Parcel[]
}
export interface EnumValue {
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly label: string
}
/**
 *	Shape of the value for action `changeFieldDefinitionOrder`
 */
export interface FieldDefinitionOrderValue {
  /**
   *
   */
  readonly name: string
  /**
   *
   */
  readonly label: LocalizedString
}
export interface InventoryQuantityValue {
  /**
   *
   */
  readonly quantityOnStock: number
  /**
   *
   */
  readonly availableQuantity: number
}
export interface LocalizedEnumValue {
  /**
   *
   */
  readonly key: string
  /**
   *
   */
  readonly label: LocalizedString
}
export interface ParcelChangeValue {
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly createdAt: string
}
export interface ShoppingListLineItemValue {
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly name: LocalizedString
  /**
   *
   */
  readonly variantId: number
}
export interface TextLineItemValue {
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly name: LocalizedString
}
export interface TransactionChangeValue {
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly interactionId: string
  /**
   *
   */
  readonly timestamp: string
}
/**
 *	Shape of the value for `setValidFromAndUntil` action
 */
export interface ValidFromAndUntilValue {
  /**
   *
   */
  readonly validFrom: string
  /**
   *
   */
  readonly validUntil: string
}

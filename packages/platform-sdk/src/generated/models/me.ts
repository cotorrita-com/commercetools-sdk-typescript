/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  DiscountCodeInfo,
  ExternalLineItemTotalPrice,
  ExternalTaxRateDraft,
  InventoryMode,
  ItemShippingDetailsDraft,
  ItemShippingTarget,
  TaxMode,
} from './cart'
import { ChannelResourceIdentifier } from './channel'
import { BaseAddress, LocalizedString, Money, TypedMoney } from './common'
import { CustomerReference } from './customer'
import { DiscountCodeReference } from './discount-code'
import {
  PaymentMethodInfo,
  PaymentResourceIdentifier,
  Transaction,
  TransactionDraft,
  TransactionType,
} from './payment'
import { ShippingMethodResourceIdentifier } from './shipping-method'
import { ShoppingListLineItemDraft, TextLineItemDraft } from './shopping-list'
import { StoreKeyReference, StoreResourceIdentifier } from './store'
import {
  CustomFields,
  CustomFieldsDraft,
  FieldContainer,
  TypeResourceIdentifier,
} from './type'

export interface MyCartDraft {
  /**
   *	A three-digit currency code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
   */
  readonly currency: string
  /**
   *
   */
  readonly customerEmail?: string
  /**
   *	A two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
   */
  readonly country?: string
  /**
   *	Default inventory mode is `None`.
   *
   */
  readonly inventoryMode?: InventoryMode
  /**
   *
   */
  readonly lineItems?: MyLineItemDraft[]
  /**
   *
   */
  readonly shippingAddress?: BaseAddress
  /**
   *
   */
  readonly billingAddress?: BaseAddress
  /**
   *
   */
  readonly shippingMethod?: ShippingMethodResourceIdentifier
  /**
   *	The custom fields.
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *
   */
  readonly locale?: string
  /**
   *	The `TaxMode` `Disabled` can not be set on the My Carts endpoint.
   *
   */
  readonly taxMode?: TaxMode
  /**
   *	The cart will be deleted automatically if it hasn't been modified for the specified amount of days and it is in the `Active` CartState.
   *	If a ChangeSubscription for carts exists, a `ResourceDeleted` notification will be sent.
   *
   */
  readonly deleteDaysAfterLastModification?: number
  /**
   *	Contains addresses for orders with multiple shipping addresses.
   *	Each address must contain a key which is unique in this cart.
   *
   */
  readonly itemShippingAddresses?: BaseAddress[]
  /**
   *
   */
  readonly store?: StoreKeyReference
  /**
   *
   */
  readonly discountCodes?: DiscountCodeInfo[]
}
export interface MyCartUpdate {
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly actions: MyCartUpdateAction[]
}
export type MyCartUpdateAction =
  | MyCartAddDiscountCodeAction
  | MyCartAddItemShippingAddressAction
  | MyCartAddLineItemAction
  | MyCartAddPaymentAction
  | MyCartApplyDeltaToLineItemShippingDetailsTargetsAction
  | MyCartChangeLineItemQuantityAction
  | MyCartChangeTaxModeAction
  | MyCartRecalculateAction
  | MyCartRemoveDiscountCodeAction
  | MyCartRemoveItemShippingAddressAction
  | MyCartRemoveLineItemAction
  | MyCartRemovePaymentAction
  | MyCartSetBillingAddressAction
  | MyCartSetCountryAction
  | MyCartSetCustomFieldAction
  | MyCartSetCustomTypeAction
  | MyCartSetCustomerEmailAction
  | MyCartSetDeleteDaysAfterLastModificationAction
  | MyCartSetLineItemCustomFieldAction
  | MyCartSetLineItemCustomTypeAction
  | MyCartSetLineItemDistributionChannelAction
  | MyCartSetLineItemShippingDetailsAction
  | MyCartSetLocaleAction
  | MyCartSetShippingAddressAction
  | MyCartSetShippingMethodAction
  | MyCartUpdateItemShippingAddressAction
export interface MyCustomerDraft {
  /**
   *
   */
  readonly email: string
  /**
   *
   */
  readonly password: string
  /**
   *
   */
  readonly firstName?: string
  /**
   *
   */
  readonly lastName?: string
  /**
   *
   */
  readonly middleName?: string
  /**
   *
   */
  readonly title?: string
  /**
   *
   */
  readonly dateOfBirth?: string
  /**
   *
   */
  readonly companyName?: string
  /**
   *
   */
  readonly vatId?: string
  /**
   *	Sets the ID of each address to be unique in the addresses list.
   *
   */
  readonly addresses?: BaseAddress[]
  /**
   *	The index of the address in the addresses array.
   *	The `defaultShippingAddressId` of the customer will be set to the ID of that address.
   *
   */
  readonly defaultShippingAddress?: number
  /**
   *	The index of the address in the addresses array.
   *	The `defaultBillingAddressId` of the customer will be set to the ID of that address.
   *
   */
  readonly defaultBillingAddress?: number
  /**
   *	The custom fields.
   *
   */
  readonly custom?: CustomFields
  /**
   *
   */
  readonly locale?: string
  /**
   *
   */
  readonly stores?: StoreResourceIdentifier[]
}
export interface MyCustomerUpdate {
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly actions: MyCustomerUpdateAction[]
}
export type MyCustomerUpdateAction =
  | MyCustomerAddAddressAction
  | MyCustomerAddBillingAddressIdAction
  | MyCustomerAddShippingAddressIdAction
  | MyCustomerChangeAddressAction
  | MyCustomerChangeEmailAction
  | MyCustomerRemoveAddressAction
  | MyCustomerRemoveBillingAddressIdAction
  | MyCustomerRemoveShippingAddressIdAction
  | MyCustomerSetCompanyNameAction
  | MyCustomerSetCustomFieldAction
  | MyCustomerSetCustomTypeAction
  | MyCustomerSetDateOfBirthAction
  | MyCustomerSetDefaultBillingAddressAction
  | MyCustomerSetDefaultShippingAddressAction
  | MyCustomerSetFirstNameAction
  | MyCustomerSetLastNameAction
  | MyCustomerSetLocaleAction
  | MyCustomerSetMiddleNameAction
  | MyCustomerSetSalutationAction
  | MyCustomerSetTitleAction
  | MyCustomerSetVatIdAction
export interface MyLineItemDraft {
  /**
   *
   */
  readonly productId?: string
  /**
   *
   */
  readonly variantId?: number
  /**
   *
   */
  readonly quantity: number
  /**
   *	When the line item was added to the cart. Optional for backwards
   *	compatibility reasons only.
   *
   */
  readonly addedAt?: string
  /**
   *	By providing supply channel information, you can unique identify
   *	inventory entries that should be reserved.
   *	The provided channel should have the InventorySupply role.
   *
   */
  readonly supplyChannel?: ChannelResourceIdentifier
  /**
   *	The channel is used to select a ProductPrice.
   *	The provided channel should have the ProductDistribution role.
   *
   */
  readonly distributionChannel?: ChannelResourceIdentifier
  /**
   *	The custom fields.
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *	Container for line item specific address(es).
   *
   */
  readonly shippingDetails?: ItemShippingDetailsDraft
  /**
   *
   */
  readonly sku?: string
}
export interface MyOrderFromCartDraft {
  /**
   *	The unique ID of the cart from which an order is created.
   *
   */
  readonly id: string
  /**
   *
   */
  readonly version: number
}
export interface MyPayment {
  /**
   *
   */
  readonly id: string
  /**
   *
   */
  readonly version: number
  /**
   *	A reference to the customer this payment belongs to.
   *
   */
  readonly customer?: CustomerReference
  /**
   *	Identifies payments belonging to an anonymous session (the customer has not signed up/in yet).
   *
   */
  readonly anonymousId?: string
  /**
   *	How much money this payment intends to receive from the customer.
   *	The value usually matches the cart or order gross total.
   *
   */
  readonly amountPlanned: TypedMoney
  /**
   *
   */
  readonly paymentMethodInfo: PaymentMethodInfo
  /**
   *	A list of financial transactions of different TransactionTypes
   *	with different TransactionStates.
   *
   */
  readonly transactions: Transaction[]
  /**
   *
   */
  readonly custom?: CustomFields
}
export interface MyPaymentDraft {
  /**
   *	How much money this payment intends to receive from the customer.
   *	The value usually matches the cart or order gross total.
   *
   */
  readonly amountPlanned: Money
  /**
   *
   */
  readonly paymentMethodInfo?: PaymentMethodInfo
  /**
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *	A list of financial transactions of the `Authorization` or `Charge`
   *	TransactionTypes.
   *
   */
  readonly transaction?: MyTransactionDraft
}
export interface MyPaymentPagedQueryResponse {
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
  readonly results: MyPayment[]
}
export interface MyPaymentUpdate {
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly actions: MyPaymentUpdateAction[]
}
export type MyPaymentUpdateAction =
  | MyPaymentAddTransactionAction
  | MyPaymentChangeAmountPlannedAction
  | MyPaymentSetCustomFieldAction
  | MyPaymentSetMethodInfoInterfaceAction
  | MyPaymentSetMethodInfoMethodAction
  | MyPaymentSetMethodInfoNameAction
export interface MyShoppingListDraft {
  /**
   *
   */
  readonly name: LocalizedString
  /**
   *
   */
  readonly description?: LocalizedString
  /**
   *
   */
  readonly lineItems?: ShoppingListLineItemDraft[]
  /**
   *
   */
  readonly textLineItems?: TextLineItemDraft[]
  /**
   *	The custom fields.
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *	The shopping list will be deleted automatically if it hasn't been modified for the specified amount of days.
   *
   */
  readonly deleteDaysAfterLastModification?: number
  /**
   *
   */
  readonly store?: StoreResourceIdentifier
}
export interface MyShoppingListUpdate {
  /**
   *
   */
  readonly version: number
  /**
   *
   */
  readonly actions: MyShoppingListUpdateAction[]
}
export type MyShoppingListUpdateAction =
  | MyShoppingListAddLineItemAction
  | MyShoppingListAddTextLineItemAction
  | MyShoppingListChangeLineItemQuantityAction
  | MyShoppingListChangeLineItemsOrderAction
  | MyShoppingListChangeNameAction
  | MyShoppingListChangeTextLineItemNameAction
  | MyShoppingListChangeTextLineItemQuantityAction
  | MyShoppingListChangeTextLineItemsOrderAction
  | MyShoppingListRemoveLineItemAction
  | MyShoppingListRemoveTextLineItemAction
  | MyShoppingListSetCustomFieldAction
  | MyShoppingListSetCustomTypeAction
  | MyShoppingListSetDeleteDaysAfterLastModificationAction
  | MyShoppingListSetDescriptionAction
  | MyShoppingListSetLineItemCustomFieldAction
  | MyShoppingListSetLineItemCustomTypeAction
  | MyShoppingListSetTextLineItemCustomFieldAction
  | MyShoppingListSetTextLineItemCustomTypeAction
  | MyShoppingListSetTextLineItemDescriptionAction
export interface MyTransactionDraft {
  /**
   *	The time at which the transaction took place.
   *
   */
  readonly timestamp?: string
  /**
   *	The type of this transaction.
   *	Only the `Authorization` or `Charge`
   *	TransactionTypes are allowed here.
   *
   */
  readonly type: TransactionType
  /**
   *
   */
  readonly amount: Money
  /**
   *	The identifier that is used by the interface that managed the transaction (usually the PSP).
   *	If a matching interaction was logged in the interfaceInteractions array,
   *	the corresponding interaction should be findable with this ID.
   *	The `state` is set to the `Initial` TransactionState.
   *
   */
  readonly interactionId?: string
}
export interface MyCartAddDiscountCodeAction {
  readonly action: 'addDiscountCode'
  /**
   *
   */
  readonly code: string
}
export interface MyCartAddItemShippingAddressAction {
  readonly action: 'addItemShippingAddress'
  /**
   *
   */
  readonly address: BaseAddress
}
export interface MyCartAddLineItemAction {
  readonly action: 'addLineItem'
  /**
   *
   */
  readonly custom?: CustomFieldsDraft
  /**
   *
   */
  readonly distributionChannel?: ChannelResourceIdentifier
  /**
   *
   */
  readonly externalTaxRate?: ExternalTaxRateDraft
  /**
   *
   */
  readonly productId?: string
  /**
   *
   */
  readonly variantId?: number
  /**
   *
   */
  readonly sku?: string
  /**
   *
   */
  readonly quantity?: number
  /**
   *
   */
  readonly supplyChannel?: ChannelResourceIdentifier
  /**
   *
   */
  readonly externalPrice?: Money
  /**
   *
   */
  readonly externalTotalPrice?: ExternalLineItemTotalPrice
  /**
   *
   */
  readonly shippingDetails?: ItemShippingDetailsDraft
  /**
   *
   */
  readonly addedAt?: string
}
export interface MyCartAddPaymentAction {
  readonly action: 'addPayment'
  /**
   *
   */
  readonly payment: PaymentResourceIdentifier
}
export interface MyCartApplyDeltaToLineItemShippingDetailsTargetsAction {
  readonly action: 'applyDeltaToLineItemShippingDetailsTargets'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly targetsDelta: ItemShippingTarget[]
}
export interface MyCartChangeLineItemQuantityAction {
  readonly action: 'changeLineItemQuantity'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly quantity: number
  /**
   *
   */
  readonly externalPrice?: Money
  /**
   *
   */
  readonly externalTotalPrice?: ExternalLineItemTotalPrice
}
export interface MyCartChangeTaxModeAction {
  readonly action: 'changeTaxMode'
  /**
   *
   */
  readonly taxMode: TaxMode
}
export interface MyCartRecalculateAction {
  readonly action: 'recalculate'
  /**
   *
   */
  readonly updateProductData?: boolean
}
export interface MyCartRemoveDiscountCodeAction {
  readonly action: 'removeDiscountCode'
  /**
   *
   */
  readonly discountCode: DiscountCodeReference
}
export interface MyCartRemoveItemShippingAddressAction {
  readonly action: 'removeItemShippingAddress'
  /**
   *
   */
  readonly addressKey: string
}
export interface MyCartRemoveLineItemAction {
  readonly action: 'removeLineItem'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly quantity?: number
  /**
   *
   */
  readonly externalPrice?: Money
  /**
   *
   */
  readonly externalTotalPrice?: ExternalLineItemTotalPrice
  /**
   *
   */
  readonly shippingDetailsToRemove?: ItemShippingDetailsDraft
}
export interface MyCartRemovePaymentAction {
  readonly action: 'removePayment'
  /**
   *
   */
  readonly payment: PaymentResourceIdentifier
}
export interface MyCartSetBillingAddressAction {
  readonly action: 'setBillingAddress'
  /**
   *
   */
  readonly address?: BaseAddress
}
export interface MyCartSetCountryAction {
  readonly action: 'setCountry'
  /**
   *	A two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   *
   *
   */
  readonly country?: string
}
export interface MyCartSetCustomFieldAction {
  readonly action: 'setCustomField'
  /**
   *
   */
  readonly name: string
  /**
   *
   */
  readonly value?: any
}
export interface MyCartSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *
   */
  readonly fields?: FieldContainer
}
export interface MyCartSetCustomerEmailAction {
  readonly action: 'setCustomerEmail'
  /**
   *
   */
  readonly email?: string
}
export interface MyCartSetDeleteDaysAfterLastModificationAction {
  readonly action: 'setDeleteDaysAfterLastModification'
  /**
   *
   */
  readonly deleteDaysAfterLastModification?: number
}
export interface MyCartSetLineItemCustomFieldAction {
  readonly action: 'setLineItemCustomField'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly name: string
  /**
   *
   */
  readonly value?: any
}
export interface MyCartSetLineItemCustomTypeAction {
  readonly action: 'setLineItemCustomType'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *
   */
  readonly fields?: FieldContainer
}
export interface MyCartSetLineItemDistributionChannelAction {
  readonly action: 'setLineItemDistributionChannel'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly distributionChannel?: ChannelResourceIdentifier
}
export interface MyCartSetLineItemShippingDetailsAction {
  readonly action: 'setLineItemShippingDetails'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly shippingDetails?: ItemShippingDetailsDraft
}
export interface MyCartSetLocaleAction {
  readonly action: 'setLocale'
  /**
   *
   */
  readonly locale?: string
}
export interface MyCartSetShippingAddressAction {
  readonly action: 'setShippingAddress'
  /**
   *
   */
  readonly address?: BaseAddress
}
export interface MyCartSetShippingMethodAction {
  readonly action: 'setShippingMethod'
  /**
   *
   */
  readonly shippingMethod?: ShippingMethodResourceIdentifier
  /**
   *
   */
  readonly externalTaxRate?: ExternalTaxRateDraft
}
export interface MyCartUpdateItemShippingAddressAction {
  readonly action: 'updateItemShippingAddress'
  /**
   *
   */
  readonly address: BaseAddress
}
export interface MyCustomerAddAddressAction {
  readonly action: 'addAddress'
  /**
   *
   */
  readonly address: BaseAddress
}
export interface MyCustomerAddBillingAddressIdAction {
  readonly action: 'addBillingAddressId'
  /**
   *
   */
  readonly addressId?: string
  /**
   *
   */
  readonly addressKey?: string
}
export interface MyCustomerAddShippingAddressIdAction {
  readonly action: 'addShippingAddressId'
  /**
   *
   */
  readonly addressId?: string
  /**
   *
   */
  readonly addressKey?: string
}
export interface MyCustomerChangeAddressAction {
  readonly action: 'changeAddress'
  /**
   *
   */
  readonly addressId?: string
  /**
   *
   */
  readonly addressKey?: string
  /**
   *
   */
  readonly address: BaseAddress
}
export interface MyCustomerChangeEmailAction {
  readonly action: 'changeEmail'
  /**
   *
   */
  readonly email: string
}
export interface MyCustomerRemoveAddressAction {
  readonly action: 'removeAddress'
  /**
   *
   */
  readonly addressId?: string
  /**
   *
   */
  readonly addressKey?: string
}
export interface MyCustomerRemoveBillingAddressIdAction {
  readonly action: 'removeBillingAddressId'
  /**
   *
   */
  readonly addressId?: string
  /**
   *
   */
  readonly addressKey?: string
}
export interface MyCustomerRemoveShippingAddressIdAction {
  readonly action: 'removeShippingAddressId'
  /**
   *
   */
  readonly addressId?: string
  /**
   *
   */
  readonly addressKey?: string
}
export interface MyCustomerSetCompanyNameAction {
  readonly action: 'setCompanyName'
  /**
   *
   */
  readonly companyName?: string
}
export interface MyCustomerSetCustomFieldAction {
  readonly action: 'setCustomField'
  /**
   *
   */
  readonly name: string
  /**
   *
   */
  readonly value?: any
}
export interface MyCustomerSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *
   */
  readonly fields?: FieldContainer
}
export interface MyCustomerSetDateOfBirthAction {
  readonly action: 'setDateOfBirth'
  /**
   *
   */
  readonly dateOfBirth?: string
}
export interface MyCustomerSetDefaultBillingAddressAction {
  readonly action: 'setDefaultBillingAddress'
  /**
   *
   */
  readonly addressId?: string
  /**
   *
   */
  readonly addressKey?: string
}
export interface MyCustomerSetDefaultShippingAddressAction {
  readonly action: 'setDefaultShippingAddress'
  /**
   *
   */
  readonly addressId?: string
  /**
   *
   */
  readonly addressKey?: string
}
export interface MyCustomerSetFirstNameAction {
  readonly action: 'setFirstName'
  /**
   *
   */
  readonly firstName?: string
}
export interface MyCustomerSetLastNameAction {
  readonly action: 'setLastName'
  /**
   *
   */
  readonly lastName?: string
}
export interface MyCustomerSetLocaleAction {
  readonly action: 'setLocale'
  /**
   *
   */
  readonly locale?: string
}
export interface MyCustomerSetMiddleNameAction {
  readonly action: 'setMiddleName'
  /**
   *
   */
  readonly middleName?: string
}
export interface MyCustomerSetSalutationAction {
  readonly action: 'setSalutation'
  /**
   *
   */
  readonly salutation?: string
}
export interface MyCustomerSetTitleAction {
  readonly action: 'setTitle'
  /**
   *
   */
  readonly title?: string
}
export interface MyCustomerSetVatIdAction {
  readonly action: 'setVatId'
  /**
   *
   */
  readonly vatId?: string
}
export interface MyPaymentAddTransactionAction {
  readonly action: 'addTransaction'
  /**
   *
   */
  readonly transaction: TransactionDraft
}
export interface MyPaymentChangeAmountPlannedAction {
  readonly action: 'changeAmountPlanned'
  /**
   *
   */
  readonly amount: Money
}
export interface MyPaymentSetCustomFieldAction {
  readonly action: 'setCustomField'
  /**
   *
   */
  readonly name: string
  /**
   *
   */
  readonly value?: any
}
export interface MyPaymentSetMethodInfoInterfaceAction {
  readonly action: 'setMethodInfoInterface'
  /**
   *
   */
  readonly interface: string
}
export interface MyPaymentSetMethodInfoMethodAction {
  readonly action: 'setMethodInfoMethod'
  /**
   *
   */
  readonly method?: string
}
export interface MyPaymentSetMethodInfoNameAction {
  readonly action: 'setMethodInfoName'
  /**
   *
   */
  readonly name?: LocalizedString
}
export interface MyShoppingListAddLineItemAction {
  readonly action: 'addLineItem'
  /**
   *
   */
  readonly sku?: string
  /**
   *
   */
  readonly productId?: string
  /**
   *
   */
  readonly variantId?: number
  /**
   *
   */
  readonly quantity?: number
  /**
   *
   */
  readonly addedAt?: string
  /**
   *
   */
  readonly custom?: CustomFieldsDraft
}
export interface MyShoppingListAddTextLineItemAction {
  readonly action: 'addTextLineItem'
  /**
   *
   */
  readonly name: LocalizedString
  /**
   *
   */
  readonly description?: LocalizedString
  /**
   *
   */
  readonly quantity?: number
  /**
   *
   */
  readonly addedAt?: string
  /**
   *
   */
  readonly custom?: CustomFieldsDraft
}
export interface MyShoppingListChangeLineItemQuantityAction {
  readonly action: 'changeLineItemQuantity'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly quantity: number
}
export interface MyShoppingListChangeLineItemsOrderAction {
  readonly action: 'changeLineItemsOrder'
  /**
   *
   */
  readonly lineItemOrder: string[]
}
export interface MyShoppingListChangeNameAction {
  readonly action: 'changeName'
  /**
   *
   */
  readonly name: LocalizedString
}
export interface MyShoppingListChangeTextLineItemNameAction {
  readonly action: 'changeTextLineItemName'
  /**
   *
   */
  readonly textLineItemId: string
  /**
   *
   */
  readonly name: LocalizedString
}
export interface MyShoppingListChangeTextLineItemQuantityAction {
  readonly action: 'changeTextLineItemQuantity'
  /**
   *
   */
  readonly textLineItemId: string
  /**
   *
   */
  readonly quantity: number
}
export interface MyShoppingListChangeTextLineItemsOrderAction {
  readonly action: 'changeTextLineItemsOrder'
  /**
   *
   */
  readonly textLineItemOrder: string[]
}
export interface MyShoppingListRemoveLineItemAction {
  readonly action: 'removeLineItem'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly quantity?: number
}
export interface MyShoppingListRemoveTextLineItemAction {
  readonly action: 'removeTextLineItem'
  /**
   *
   */
  readonly textLineItemId: string
  /**
   *
   */
  readonly quantity?: number
}
export interface MyShoppingListSetCustomFieldAction {
  readonly action: 'setCustomField'
  /**
   *
   */
  readonly name: string
  /**
   *
   */
  readonly value?: any
}
export interface MyShoppingListSetCustomTypeAction {
  readonly action: 'setCustomType'
  /**
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *
   */
  readonly fields?: FieldContainer
}
export interface MyShoppingListSetDeleteDaysAfterLastModificationAction {
  readonly action: 'setDeleteDaysAfterLastModification'
  /**
   *
   */
  readonly deleteDaysAfterLastModification?: number
}
export interface MyShoppingListSetDescriptionAction {
  readonly action: 'setDescription'
  /**
   *
   */
  readonly description?: LocalizedString
}
export interface MyShoppingListSetLineItemCustomFieldAction {
  readonly action: 'setLineItemCustomField'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly name: string
  /**
   *
   */
  readonly value?: any
}
export interface MyShoppingListSetLineItemCustomTypeAction {
  readonly action: 'setLineItemCustomType'
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *
   */
  readonly fields?: FieldContainer
}
export interface MyShoppingListSetTextLineItemCustomFieldAction {
  readonly action: 'setTextLineItemCustomField'
  /**
   *
   */
  readonly textLineItemId: string
  /**
   *
   */
  readonly name: string
  /**
   *
   */
  readonly value?: any
}
export interface MyShoppingListSetTextLineItemCustomTypeAction {
  readonly action: 'setTextLineItemCustomType'
  /**
   *
   */
  readonly textLineItemId: string
  /**
   *
   */
  readonly type?: TypeResourceIdentifier
  /**
   *
   */
  readonly fields?: FieldContainer
}
export interface MyShoppingListSetTextLineItemDescriptionAction {
  readonly action: 'setTextLineItemDescription'
  /**
   *
   */
  readonly textLineItemId: string
  /**
   *
   */
  readonly description?: LocalizedString
}

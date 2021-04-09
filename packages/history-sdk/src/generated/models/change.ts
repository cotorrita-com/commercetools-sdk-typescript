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
  AssetChangeValue,
  ChangeTargetChangeValue,
  ChangeValueChangeValue,
  CustomFieldExpandedValue,
  DeliveryChangeValue,
  EnumValue,
  FieldDefinitionOrderValue,
  InventoryQuantityValue,
  LocalizedEnumValue,
  ParcelChangeValue,
  ShoppingListLineItemValue,
  TextLineItemValue,
  TransactionChangeValue,
  ValidFromAndUntilValue,
} from './change-value'
import {
  Address,
  Asset,
  AssetSource,
  AttributeConstraintEnum,
  AttributeDefinition,
  CategoryOrderHints,
  ChannelRole,
  CustomFields,
  CustomLineItem,
  Delivery,
  DeliveryItem,
  DiscountedLineItemPrice,
  DiscountedLineItemPriceForQuantity,
  FieldDefinition,
  GeoLocation,
  Image,
  ItemShippingDetails,
  ItemState,
  LineItem,
  LocalizedString,
  Location,
  Money,
  OrderState,
  Parcel,
  ParcelMeasurements,
  PaymentInfo,
  PaymentState,
  Price,
  ProductVariantAvailability,
  Reference,
  Reservation,
  ReturnInfo,
  ReturnPaymentState,
  ReturnShipmentState,
  ReviewRatingStatistics,
  SearchKeywords,
  ShipmentState,
  StackingMode,
  StateRole,
  StateType,
  SyncInfo,
  TaxedItemPrice,
  TaxRate,
  TextInputHint,
  TextLineItem,
  TrackingData,
  Transaction,
  TransactionState,
  Variant,
} from './common'

export type Change =
  | AddAddressChange
  | AddAssetChange
  | AddAttributeDefinitionChange
  | AddBillingAddressIdChange
  | AddChannelRolesChange
  | AddCustomLineItemChange
  | AddDeliveryChange
  | AddEnumValueChange
  | AddExternalImageChange
  | AddFieldDefinitionChange
  | AddInterfaceInteractionChange
  | AddItemShippingAddressesChange
  | AddLocalizedEnumValueChange
  | AddLocationChange
  | AddOrderLineItemChange
  | AddParcelToDeliveryChange
  | AddPaymentChange
  | AddPlainEnumValueChange
  | AddPriceChange
  | AddReturnInfoChange
  | AddShippingAddressIdChange
  | AddShoppingListLineItemChange
  | AddStateRolesChange
  | AddTaxRateChange
  | AddTextLineItemChange
  | AddToCategoryChange
  | AddTransactionChange
  | AddVariantChange
  | ChangeAddressChange
  | ChangeAmountAuthorizedChange
  | ChangeAmountPlannedChange
  | ChangeAssetNameChange
  | ChangeAssetOrderChange
  | ChangeAttributeConstraintChange
  | ChangeAttributeOrderByNameChange
  | ChangeCartDiscountsChange
  | ChangeCartPredicateChange
  | ChangeCustomLineItemQuantityChange
  | ChangeDescriptionChange
  | ChangeEmailChange
  | ChangeEnumValueLabelChange
  | ChangeEnumValueOrderChange
  | ChangeFieldDefinitionOrderChange
  | ChangeGroupsChange
  | ChangeInitialChange
  | ChangeInputHintChange
  | ChangeIsActiveChange
  | ChangeIsSearchableChange
  | ChangeKeyChange
  | ChangeLabelChange
  | ChangeLineItemQuantityChange
  | ChangeLocalizedDescriptionChange
  | ChangeLocalizedEnumValueLabelChange
  | ChangeLocalizedEnumValueOrderChange
  | ChangeLocalizedNameChange
  | ChangeMasterVariantChange
  | ChangeNameChange
  | ChangeOrderHintChange
  | ChangeOrderStateChange
  | ChangeParentChange
  | ChangePaymentStateChange
  | ChangePlainEnumValueLabelChange
  | ChangePlainEnumValueOrderChange
  | ChangePredicateChange
  | ChangePriceChange
  | ChangeQuantityChange
  | ChangeRequiresDiscountCodeChange
  | ChangeReviewRatingStatisticsChange
  | ChangeShipmentStateChange
  | ChangeShoppingListLineItemQuantityChange
  | ChangeShoppingListLineItemsOrderChange
  | ChangeSlugChange
  | ChangeSortOrderChange
  | ChangeStackingModeChange
  | ChangeStateTypeChange
  | ChangeTargetChange
  | ChangeTextLineItemNameChange
  | ChangeTextLineItemQuantityChange
  | ChangeTextLineItemsOrderChange
  | ChangeTransactionInteractionIdChange
  | ChangeTransactionStateChange
  | ChangeTransactionTimestampChange
  | ChangeValueChange
  | MoveImageToPositionChange
  | PublishChange
  | RemoveAddressChange
  | RemoveAssetChange
  | RemoveAttributeDefinitionChange
  | RemoveBillingAddressIdChange
  | RemoveChannelRolesChange
  | RemoveCustomLineItemChange
  | RemoveDeliveryItemsChange
  | RemoveEnumValuesChange
  | RemoveFieldDefinitionChange
  | RemoveFromCategoryChange
  | RemoveImageChange
  | RemoveItemShippingAddressesChange
  | RemoveLocalizedEnumValuesChange
  | RemoveLocationChange
  | RemoveOrderLineItemChange
  | RemoveParcelFromDeliveryChange
  | RemovePaymentChange
  | RemovePriceChange
  | RemoveShippingAddressIdChange
  | RemoveShoppingListLineItemChange
  | RemoveStateRolesChange
  | RemoveTaxRateChange
  | RemoveTextLineItemChange
  | RemoveVariantChange
  | SetAddressChange
  | SetAnonymousIdChange
  | SetApplicationVersionChange
  | SetAssetCustomFieldChange
  | SetAssetCustomTypeChange
  | SetAssetDescriptionChange
  | SetAssetKeyChange
  | SetAssetSourcesChange
  | SetAssetTagsChange
  | SetAttributeChange
  | SetAuthorNameChange
  | SetBillingAddressChange
  | SetCartPredicateChange
  | SetCategoryOrderHintChange
  | SetChannelRolesChange
  | SetCompanyNameChange
  | SetCustomFieldChange
  | SetCustomLineItemCustomFieldChange
  | SetCustomLineItemCustomTypeChange
  | SetCustomLineItemMoneyChange
  | SetCustomLineItemShippingDetailsChange
  | SetCustomLineItemTaxRateChange
  | SetCustomLineItemTaxedPriceChange
  | SetCustomLineItemTotalPriceChange
  | SetCustomTypeChange
  | SetCustomerChange
  | SetCustomerEmailChange
  | SetCustomerGroupChange
  | SetCustomerIdChange
  | SetCustomerNumberChange
  | SetDateOfBirthChange
  | SetDefaultBillingAddressChange
  | SetDefaultShippingAddressChange
  | SetDeleteDaysAfterLastModificationChange
  | SetDeliveryAddressChange
  | SetDeliveryItemsChange
  | SetDescriptionChange
  | SetDiscountedPriceChange
  | SetDistributionChannelsChange
  | SetExpectedDeliveryChange
  | SetExternalIdChange
  | SetFirstNameChange
  | SetGeoLocationChange
  | SetImageLabelChange
  | SetInputTipChange
  | SetInterfaceIdChange
  | SetIsValidChange
  | SetKeyChange
  | SetLanguagesChange
  | SetLastNameChange
  | SetLineItemDiscountedPriceChange
  | SetLineItemDiscountedPricePerQuantityChange
  | SetLineItemPriceChange
  | SetLineItemProductSlugChange
  | SetLineItemShippingDetailsChange
  | SetLineItemTaxRateChange
  | SetLineItemTaxedPriceChange
  | SetLineItemTotalPriceChange
  | SetLocaleChange
  | SetLocalizedDescriptionChange
  | SetMaxApplicationsChange
  | SetMaxApplicationsPerCustomerChange
  | SetMetaDescriptionChange
  | SetMetaKeywordsChange
  | SetMetaTitleChange
  | SetMethodInfoInterfaceChange
  | SetMethodInfoMethodChange
  | SetMethodInfoNameChange
  | SetMiddleNameChange
  | SetNameChange
  | SetOrderLineItemCustomFieldChange
  | SetOrderLineItemCustomTypeChange
  | SetOrderNumberChange
  | SetOrderTaxedPriceChange
  | SetOrderTotalPriceChange
  | SetParcelItemsChange
  | SetParcelMeasurementsChange
  | SetParcelTrackingDataChange
  | SetPricesChange
  | SetProductPriceCustomFieldChange
  | SetProductPriceCustomTypeChange
  | SetProductVariantKeyChange
  | SetRatingChange
  | SetReservationsChange
  | SetRestockableInDaysChange
  | SetReturnPaymentStateChange
  | SetReturnShipmentStateChange
  | SetSalutationChange
  | SetSearchKeywordsChange
  | SetShippingAddressChange
  | SetShoppingListLineItemCustomFieldChange
  | SetShoppingListLineItemCustomTypeChange
  | SetSkuChange
  | SetSlugChange
  | SetStateRolesChange
  | SetStatusInterfaceCodeChange
  | SetStatusInterfaceTextChange
  | SetStoreChange
  | SetStoresChange
  | SetSupplyChannelChange
  | SetSupplyChannelsChange
  | SetTargetChange
  | SetTaxCategoryChange
  | SetTextChange
  | SetTextLineItemCustomFieldChange
  | SetTextLineItemCustomTypeChange
  | SetTextLineItemDescriptionChange
  | SetTitleChange
  | SetTransitionsChange
  | SetValidFromAndUntilChange
  | SetValidFromChange
  | SetValidUntilChange
  | SetVariantAvailabilityChange
  | SetVatIdChange
  | TransitionCustomLineItemStateChange
  | TransitionLineItemStateChange
  | TransitionStateChange
  | UnknownChange
  | UnpublishChange
  | UpdateSyncInfoChange
  | VerifyEmailChange
export interface AddAddressChange {
  readonly type: 'AddAddressChange'
  /**
   *	Update action for `setAddress` action.
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: Address
  /**
   *
   */
  readonly previousValue: Address
}
export interface AddAssetChange {
  readonly type: 'AddAssetChange'
  /**
   *	Update action for `addAsset`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: Asset
  /**
   *
   */
  readonly previousValue: Asset
}
export interface AddAttributeDefinitionChange {
  readonly type: 'AddAttributeDefinitionChange'
  /**
   *	Update action for `addAttributeDefinition` on product types
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: AttributeDefinition
}
export interface AddBillingAddressIdChange {
  readonly type: 'AddBillingAddressIdChange'
  /**
   *	Update action for `addBillingAddressId` action on customers.
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: string[]
  /**
   *
   */
  readonly previousValue: string[]
  /**
   *
   */
  readonly address: Address
}
export interface AddChannelRolesChange {
  readonly type: 'AddChannelRolesChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: ChannelRole[]
  /**
   *
   */
  readonly nextValue: ChannelRole[]
}
export interface AddCustomLineItemChange {
  readonly type: 'AddCustomLineItemChange'
  /**
   *	Update action for adding and removing custom line items
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: CustomLineItem
  /**
   *
   */
  readonly previousValue: CustomLineItem
}
export interface AddDeliveryChange {
  readonly type: 'AddDeliveryChange'
  /**
   *	Update action for `addDelivery`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: DeliveryChangeValue
  /**
   *
   */
  readonly previousValue: DeliveryChangeValue
}
export interface AddEnumValueChange {
  readonly type: 'AddEnumValueChange'
  /**
   *	Update action for `addEnumValue` on types
   *
   */
  readonly change: string
  /**
   *	The name of the field/attribute definition updated.
   *
   */
  readonly fieldName: string
  /**
   *
   */
  readonly nextValue: EnumValue
}
export interface AddExternalImageChange {
  readonly type: 'AddExternalImageChange'
  /**
   *	Update actions for adding an external image
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly previousValue: Image[]
  /**
   *
   */
  readonly nextValue: Image[]
}
export interface AddFieldDefinitionChange {
  readonly type: 'AddFieldDefinitionChange'
  /**
   *	Update action for `addFieldDefinition` on payments
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: FieldDefinition
}
export interface AddInterfaceInteractionChange {
  readonly type: 'AddInterfaceInteractionChange'
  /**
   *	Update action for `addInterfaceInteraction` on payments
   *
   */
  readonly change: string
  /**
   *	Only available if `expand` is set to true
   *
   */
  readonly nextValue: CustomFieldExpandedValue
}
export interface AddItemShippingAddressesChange {
  readonly type: 'AddItemShippingAddressesChange'
  /**
   *	Update action for `addItemShippingAddress`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: Address
  /**
   *
   */
  readonly previousValue: Address
}
export interface AddLocalizedEnumValueChange {
  readonly type: 'AddLocalizedEnumValueChange'
  /**
   *	Update action for `addLocalizedEnumValue` on types
   *
   */
  readonly change: string
  /**
   *	The name of the field definition updated.
   *
   */
  readonly fieldName: string
  /**
   *	The name of the attribute updated.
   *
   */
  readonly attributeName: string
  /**
   *
   */
  readonly nextValue: LocalizedEnumValue
}
export interface AddLocationChange {
  readonly type: 'AddLocationChange'
  /**
   *	Update action for `addLocation` on zones
   *
   */
  readonly change: string
  /**
   *	Shape of the value for `addLocation` and `removeLocation` actions
   *
   */
  readonly previousValue: Location
  /**
   *	Shape of the value for `addLocation` and `removeLocation` actions
   *
   */
  readonly nextValue: Location
}
export interface AddOrderLineItemChange {
  readonly type: 'AddOrderLineItemChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: LineItem
  /**
   *
   */
  readonly nextValue: LineItem
}
export interface AddParcelToDeliveryChange {
  readonly type: 'AddParcelToDeliveryChange'
  /**
   *	Update action for `addParcelToDelivery`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly deliveryId: string
  /**
   *
   */
  readonly nextValue: Parcel
}
export interface AddPaymentChange {
  readonly type: 'AddPaymentChange'
  /**
   *	Update action for `addPayment` & `removePayment`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: PaymentInfo
  /**
   *
   */
  readonly previousValue: PaymentInfo
}
export interface AddPlainEnumValueChange {
  readonly type: 'AddPlainEnumValueChange'
  /**
   *	Update action for `addPlainEnumValue` on product types
   *
   */
  readonly change: string
  /**
   *	The name of the attribute updated.
   *
   */
  readonly attributeName: string
  /**
   *
   */
  readonly nextValue: EnumValue
}
export interface AddPriceChange {
  readonly type: 'AddPriceChange'
  /**
   *	Update action for adding prices
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly priceId: string
  /**
   *
   */
  readonly nextValue: Price
}
export interface AddReturnInfoChange {
  readonly type: 'AddReturnInfoChange'
  /**
   *	Update action for `addReturnInfo`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: ReturnInfo
}
export interface AddShippingAddressIdChange {
  readonly type: 'AddShippingAddressIdChange'
  /**
   *	Update action for `addShippingAddressId` action on customers.
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: string[]
  /**
   *
   */
  readonly previousValue: string[]
  /**
   *
   */
  readonly address: Address
}
export interface AddShoppingListLineItemChange {
  readonly type: 'AddShoppingListLineItemChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: LineItem
  /**
   *
   */
  readonly nextValue: LineItem
}
export interface AddStateRolesChange {
  readonly type: 'AddStateRolesChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: StateRole[]
  /**
   *
   */
  readonly nextValue: StateRole[]
}
export interface AddTaxRateChange {
  readonly type: 'AddTaxRateChange'
  /**
   *	Update action for `addTaxRate` on tax categories
   *
   */
  readonly change: string
  /**
   *	Shape of the value for `addTaxRate` and `removeTaxRate` actions
   *
   */
  readonly nextValue: TaxRate
}
export interface AddTextLineItemChange {
  readonly type: 'AddTextLineItemChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: TextLineItem
}
export interface AddToCategoryChange {
  readonly type: 'AddToCategoryChange'
  /**
   *	Update action for `addToCategory`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly category: Reference
  /**
   *
   */
  readonly previousValue: Reference[]
  /**
   *
   */
  readonly nextValue: Reference[]
}
export interface AddTransactionChange {
  readonly type: 'AddTransactionChange'
  /**
   *	Update action for `addTransaction` on payments
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: Transaction
}
export interface AddVariantChange {
  readonly type: 'AddVariantChange'
  /**
   *	Update action for `addVariant`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly previousValue: Variant
  /**
   *
   */
  readonly nextValue: Variant
}
export interface ChangeAddressChange {
  readonly type: 'ChangeAddressChange'
  /**
   *	Update action `changeAddress` action.
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: Address
  /**
   *
   */
  readonly previousValue: Address
}
export interface ChangeAmountAuthorizedChange {
  readonly type: 'ChangeAmountAuthorizedChange'
  /**
   *	Internal Update action for `changeAmountAuthorized`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: Money
  /**
   *
   */
  readonly nextValue: Money
}
export interface ChangeAmountPlannedChange {
  readonly type: 'ChangeAmountPlannedChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: Money
  /**
   *
   */
  readonly nextValue: Money
}
export interface ChangeAssetNameChange {
  readonly type: 'ChangeAssetNameChange'
  /**
   *	Update action for `changeAssetName`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly asset: AssetChangeValue
  /**
   *
   */
  readonly nextValue: LocalizedString
  /**
   *
   */
  readonly previousValue: LocalizedString
}
export interface ChangeAssetOrderChange {
  readonly type: 'ChangeAssetOrderChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: LocalizedString[]
  /**
   *
   */
  readonly nextValue: LocalizedString[]
}
export interface ChangeAttributeConstraintChange {
  readonly type: 'ChangeAttributeConstraintChange'
  /**
   *
   */
  readonly change: string
  /**
   *	name of the updated attribute
   *
   */
  readonly attributeName: string
  /**
   *
   */
  readonly previousValue: AttributeConstraintEnum
  /**
   *
   */
  readonly nextValue: AttributeConstraintEnum
}
export interface ChangeAttributeOrderByNameChange {
  readonly type: 'ChangeAttributeOrderByNameChange'
  /**
   *	Update action for `changeAttributeOrderByName` on product types
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string[]
  /**
   *
   */
  readonly nextValue: string[]
}
export interface ChangeCartDiscountsChange {
  readonly type: 'ChangeCartDiscountsChange'
  /**
   *	Shape of the action for `changeCartDiscounts`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: Reference[]
  /**
   *
   */
  readonly nextValue: Reference[]
}
export interface ChangeCartPredicateChange {
  readonly type: 'ChangeCartPredicateChange'
  /**
   *	Shape of the action for `changeCartPredicate`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface ChangeCustomLineItemQuantityChange {
  readonly type: 'ChangeCustomLineItemQuantityChange'
  /**
   *	Update action for `changeCustomLineItemQuantity`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly customLineItem: LocalizedString
  /**
   *
   */
  readonly customLineItemId: string
  /**
   *
   */
  readonly nextValue: number
  /**
   *
   */
  readonly previousValue: number
}
export interface ChangeDescriptionChange {
  readonly type: 'ChangeDescriptionChange'
  /**
   *	Shape of the action for `changeDescription`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface ChangeEmailChange {
  readonly type: 'ChangeEmailChange'
  /**
   *	Shape of the action for `changeEmail`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface ChangeEnumValueLabelChange {
  readonly type: 'ChangeEnumValueLabelChange'
  /**
   *	Update action for `changeEnumValueLabel` on types
   *
   */
  readonly change: string
  /**
   *	The name of the field definition updated.
   *
   */
  readonly fieldName: string
  /**
   *	Key of the values that was updated
   *
   */
  readonly valueKey: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface ChangeEnumValueOrderChange {
  readonly type: 'ChangeEnumValueOrderChange'
  /**
   *	Update action for `changeEnumValueOrder` on types
   *
   */
  readonly change: string
  /**
   *	The name of the field/attribute definition updated.
   *
   */
  readonly fieldName: string
  /**
   *
   */
  readonly nextValue: EnumValue[]
  /**
   *
   */
  readonly previousValue: EnumValue[]
}
export interface ChangeFieldDefinitionOrderChange {
  readonly type: 'ChangeFieldDefinitionOrderChange'
  /**
   *	Update action for `changeFieldDefinitionOrder` on types
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: FieldDefinitionOrderValue[]
  /**
   *
   */
  readonly nextValue: FieldDefinitionOrderValue[]
}
export interface ChangeGroupsChange {
  readonly type: 'ChangeGroupsChange'
  /**
   *	Update action for `changeGroups` on stores
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string[]
  /**
   *
   */
  readonly nextValue: string[]
}
export interface ChangeInitialChange {
  readonly type: 'ChangeInitialChange'
  /**
   *	Shape of the action for `changeInitial`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: boolean
  /**
   *
   */
  readonly nextValue: boolean
}
export interface ChangeInputHintChange {
  readonly type: 'ChangeInputHintChange'
  /**
   *	Update action for `changeInputHint` on product types and types
   *
   */
  readonly change: string
  /**
   *	The name of the field definition updated.
   *
   */
  readonly fieldName: string
  /**
   *	The name of the attribute updated.
   *
   */
  readonly attributeName: string
  /**
   *
   */
  readonly nextValue: TextInputHint
  /**
   *
   */
  readonly previousValue: TextInputHint
}
export interface ChangeIsActiveChange {
  readonly type: 'ChangeIsActiveChange'
  /**
   *	Shape of the action for `changeIsActive`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: boolean
  /**
   *
   */
  readonly nextValue: boolean
}
export interface ChangeIsSearchableChange {
  readonly type: 'ChangeIsSearchableChange'
  /**
   *	Update action for `changeIsSearchable` on product types
   *
   */
  readonly change: string
  /**
   *	The name of the updated attribute.
   *
   */
  readonly attributeName: string
  /**
   *
   */
  readonly nextValue: boolean
  /**
   *
   */
  readonly previousValue: boolean
}
export interface ChangeKeyChange {
  readonly type: 'ChangeKeyChange'
  /**
   *	Shape of the action for `changeKey`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface ChangeLabelChange {
  readonly type: 'ChangeLabelChange'
  /**
   *	Update action for `changeLabel` on product types and types
   *
   */
  readonly change: string
  /**
   *	The name of the field definition to update (types).
   *
   */
  readonly fieldName: string
  /**
   *	The name of the attribute definition to update (product-type).
   *
   */
  readonly attributeName: string
  /**
   *
   */
  readonly nextValue: LocalizedString
  /**
   *
   */
  readonly previousValue: LocalizedString
}
export interface ChangeLineItemQuantityChange {
  readonly type: 'ChangeLineItemQuantityChange'
  /**
   *	Update action for `changeLineItemQuantity`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly lineItem: LocalizedString
  /**
   *
   */
  readonly lineItemId: string
  /**
   *	The amount of a LineItem in the cart. Must be a positive integer.
   *
   */
  readonly nextValue: number
  /**
   *	The amount of a LineItem in the cart. Must be a positive integer.
   *
   */
  readonly previousValue: number
}
export interface ChangeLocalizedDescriptionChange {
  readonly type: 'ChangeLocalizedDescriptionChange'
  /**
   *	Shape of the action for `changeDescription`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: LocalizedString
  /**
   *
   */
  readonly nextValue: LocalizedString
}
export interface ChangeLocalizedEnumValueLabelChange {
  readonly type: 'ChangeLocalizedEnumValueLabelChange'
  /**
   *	Update action for `changeLocalizedEnumValueLabel` on types
   *
   */
  readonly change: string
  /**
   *	The name of the field definition updated.
   *
   */
  readonly fieldName: string
  /**
   *	The name of the attribute updated.
   *
   */
  readonly attributeName: string
  /**
   *	Key of the values that was updated
   *
   */
  readonly valueKey: string
  /**
   *
   */
  readonly previousValue: LocalizedString
  /**
   *
   */
  readonly nextValue: LocalizedString
}
export interface ChangeLocalizedEnumValueOrderChange {
  readonly type: 'ChangeLocalizedEnumValueOrderChange'
  /**
   *	Update action for `changeLocalizedEnumValueOrder` on types and product types
   *
   */
  readonly change: string
  /**
   *	The name of the field definition updated.
   *
   */
  readonly fieldName: string
  /**
   *	The name of the attribute updated.
   *
   */
  readonly attributeName: string
  /**
   *
   */
  readonly nextValue: LocalizedEnumValue[]
  /**
   *
   */
  readonly previousValue: LocalizedEnumValue[]
}
export interface ChangeLocalizedNameChange {
  readonly type: 'ChangeLocalizedNameChange'
  /**
   *	Shape of the action for `changeName`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: LocalizedString
  /**
   *
   */
  readonly nextValue: LocalizedString
}
export interface ChangeMasterVariantChange {
  readonly type: 'ChangeMasterVariantChange'
  /**
   *	Update action for `changeMasterVariant`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly previousValue: Variant
  /**
   *
   */
  readonly nextValue: Variant
}
export interface ChangeNameChange {
  readonly type: 'ChangeNameChange'
  /**
   *	Shape of the action for `changeName`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface ChangeOrderHintChange {
  readonly type: 'ChangeOrderHintChange'
  /**
   *	Shape of the action for `changeOrderHint`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface ChangeOrderStateChange {
  readonly type: 'ChangeOrderStateChange'
  /**
   *	Update action for `changeOrderState`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: OrderState
  /**
   *
   */
  readonly previousValue: OrderState
}
export interface ChangeParentChange {
  readonly type: 'ChangeParentChange'
  /**
   *	Shape of the action for `changeParent`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: Reference
  /**
   *
   */
  readonly nextValue: Reference
}
export interface ChangePaymentStateChange {
  readonly type: 'ChangePaymentStateChange'
  /**
   *	Update action for `changePaymentState`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: PaymentState
  /**
   *
   */
  readonly previousValue: PaymentState
}
export interface ChangePlainEnumValueLabelChange {
  readonly type: 'ChangePlainEnumValueLabelChange'
  /**
   *	Update action for `changePlainEnumValueLabel` on types
   *
   */
  readonly change: string
  /**
   *	The name of the attribute updated.
   *
   */
  readonly attributeName: string
  /**
   *	Key of the values that was updated
   *
   */
  readonly valueKey: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface ChangePlainEnumValueOrderChange {
  readonly type: 'ChangePlainEnumValueOrderChange'
  /**
   *	Update action for `changePlainEnumValueOrder` on product types
   *
   */
  readonly change: string
  /**
   *	The name of the attribute updated.
   *
   */
  readonly attributeName: string
  /**
   *
   */
  readonly nextValue: EnumValue[]
  /**
   *
   */
  readonly previousValue: EnumValue[]
}
export interface ChangePredicateChange {
  readonly type: 'ChangePredicateChange'
  /**
   *	Shape of the action for `changePredicate`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface ChangePriceChange {
  readonly type: 'ChangePriceChange'
  /**
   *	Update action for changing prices
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly priceId: string
  /**
   *
   */
  readonly previousValue: Price
  /**
   *
   */
  readonly nextValue: Price
}
/**
 *	Update action for `changeQuantity` on inventories
 */
export interface ChangeQuantityChange {
  readonly type: 'ChangeQuantityChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: InventoryQuantityValue
  /**
   *
   */
  readonly previousValue: InventoryQuantityValue
}
export interface ChangeRequiresDiscountCodeChange {
  readonly type: 'ChangeRequiresDiscountCodeChange'
  /**
   *	Shape of the action for `changeRequiresDiscountCode`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: boolean
  /**
   *
   */
  readonly nextValue: boolean
}
export interface ChangeReviewRatingStatisticsChange {
  readonly type: 'ChangeReviewRatingStatisticsChange'
  /**
   *	Update action for `changeReviewRatingStatistics`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: ReviewRatingStatistics
  /**
   *
   */
  readonly previousValue: ReviewRatingStatistics
}
export interface ChangeShipmentStateChange {
  readonly type: 'ChangeShipmentStateChange'
  /**
   *	Update action for `changeShipmentState`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: ShipmentState
  /**
   *
   */
  readonly previousValue: ShipmentState
}
export interface ChangeShoppingListLineItemQuantityChange {
  readonly type: 'ChangeShoppingListLineItemQuantityChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly lineItem: ShoppingListLineItemValue
  /**
   *
   */
  readonly previousValue: number
  /**
   *
   */
  readonly nextValue: number
}
export interface ChangeShoppingListLineItemsOrderChange {
  readonly type: 'ChangeShoppingListLineItemsOrderChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: ShoppingListLineItemValue[]
  /**
   *
   */
  readonly nextValue: ShoppingListLineItemValue[]
}
export interface ChangeSlugChange {
  readonly type: 'ChangeSlugChange'
  /**
   *	Shape of the action for `changeSlug`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: LocalizedString
  /**
   *
   */
  readonly nextValue: LocalizedString
}
export interface ChangeSortOrderChange {
  readonly type: 'ChangeSortOrderChange'
  /**
   *	Shape of the action for `changeSortOrder`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface ChangeStackingModeChange {
  readonly type: 'ChangeStackingModeChange'
  /**
   *	Update action for `changeStackingMode` on cart discounts
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: StackingMode
  /**
   *
   */
  readonly previousValue: StackingMode
}
export interface ChangeStateTypeChange {
  readonly type: 'ChangeStateTypeChange'
  /**
   *	Update action for `changeType` on state
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: StateType
  /**
   *
   */
  readonly nextValue: StateType
}
export interface ChangeTargetChange {
  readonly type: 'ChangeTargetChange'
  /**
   *	Update action for `changeTarget` on cart discounts
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: ChangeTargetChangeValue
  /**
   *
   */
  readonly previousValue: ChangeTargetChangeValue
}
export interface ChangeTextLineItemNameChange {
  readonly type: 'ChangeTextLineItemNameChange'
  /**
   *	Update action for `changeTextLineItemName`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly textLineItem: TextLineItemValue
  /**
   *
   */
  readonly nextValue: LocalizedString
  /**
   *
   */
  readonly previousValue: LocalizedString
}
export interface ChangeTextLineItemQuantityChange {
  readonly type: 'ChangeTextLineItemQuantityChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly textLineItem: TextLineItemValue
  /**
   *
   */
  readonly previousValue: number
  /**
   *
   */
  readonly nextValue: number
}
export interface ChangeTextLineItemsOrderChange {
  readonly type: 'ChangeTextLineItemsOrderChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: TextLineItemValue[]
  /**
   *
   */
  readonly nextValue: TextLineItemValue[]
}
export interface ChangeTransactionInteractionIdChange {
  readonly type: 'ChangeTransactionInteractionIdChange'
  /**
   *	Update action for `changeTransactionInteractionId` on payments
   *
   */
  readonly change: string
  /**
   *
   */
  readonly transaction: TransactionChangeValue
  /**
   *
   */
  readonly nextValue: string
  /**
   *
   */
  readonly previousValue: string
}
export interface ChangeTransactionStateChange {
  readonly type: 'ChangeTransactionStateChange'
  /**
   *	Update action for `changeTransactionState` on payments
   *
   */
  readonly change: string
  /**
   *
   */
  readonly transaction: TransactionChangeValue
  /**
   *
   */
  readonly nextValue: TransactionState
  /**
   *
   */
  readonly previousValue: TransactionState
}
export interface ChangeTransactionTimestampChange {
  readonly type: 'ChangeTransactionTimestampChange'
  /**
   *	Update action for `changeTransactionTimestamp` on payments
   *
   */
  readonly change: string
  /**
   *
   */
  readonly transaction: TransactionChangeValue
  /**
   *
   */
  readonly nextValue: string
  /**
   *
   */
  readonly previousValue: string
}
export interface ChangeValueChange {
  readonly type: 'ChangeValueChange'
  /**
   *	Update action for `changeValue` on cart discounts and product discounts
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: ChangeValueChangeValue
  /**
   *
   */
  readonly previousValue: ChangeValueChangeValue
}
export interface MoveImageToPositionChange {
  readonly type: 'MoveImageToPositionChange'
  /**
   *	Update actions for moving images
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly previousValue: Image[]
  /**
   *
   */
  readonly nextValue: Image[]
}
export interface PublishChange {
  readonly type: 'PublishChange'
  /**
   *
   */
  readonly change: string
}
export interface RemoveAddressChange {
  readonly type: 'RemoveAddressChange'
  /**
   *	Update action for `removeAddress` action.
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: Address
}
export interface RemoveAssetChange {
  readonly type: 'RemoveAssetChange'
  /**
   *	Update action for `removeAsset`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: Asset
}
export interface RemoveAttributeDefinitionChange {
  readonly type: 'RemoveAttributeDefinitionChange'
  /**
   *	Update action for `removeAttributeDefinition` on product types
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: AttributeDefinition
}
export interface RemoveBillingAddressIdChange {
  readonly type: 'RemoveBillingAddressIdChange'
  /**
   *	Update action for `removeBillingAddressId` action on customers.
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: string[]
  /**
   *
   */
  readonly previousValue: string[]
  /**
   *
   */
  readonly address: Address
}
export interface RemoveChannelRolesChange {
  readonly type: 'RemoveChannelRolesChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: ChannelRole[]
  /**
   *
   */
  readonly nextValue: ChannelRole[]
}
export interface RemoveCustomLineItemChange {
  readonly type: 'RemoveCustomLineItemChange'
  /**
   *	Update action for adding and removing custom line items
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: CustomLineItem
  /**
   *
   */
  readonly previousValue: CustomLineItem
}
export interface RemoveDeliveryItemsChange {
  readonly type: 'RemoveDeliveryItemsChange'
  /**
   *	Update action for `removeDelivery`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: Delivery
}
export interface RemoveEnumValuesChange {
  readonly type: 'RemoveEnumValuesChange'
  /**
   *	Update action for `removeEnumValues` on product types
   *
   */
  readonly change: string
  /**
   *	The name of the attribute updated.
   *
   */
  readonly attributeName: string
  /**
   *
   */
  readonly previousValue: EnumValue
}
export interface RemoveFieldDefinitionChange {
  readonly type: 'RemoveFieldDefinitionChange'
  /**
   *	Update action for `removeFieldDefinition` on payments
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: FieldDefinition
}
export interface RemoveFromCategoryChange {
  readonly type: 'RemoveFromCategoryChange'
  /**
   *	Update action for `addToCategory`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly category: Reference
  /**
   *
   */
  readonly previousValue: Reference[]
  /**
   *
   */
  readonly nextValue: Reference[]
}
export interface RemoveImageChange {
  readonly type: 'RemoveImageChange'
  /**
   *	Update actions for removing images
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly previousValue: Image[]
  /**
   *
   */
  readonly nextValue: Image[]
}
export interface RemoveItemShippingAddressesChange {
  readonly type: 'RemoveItemShippingAddressesChange'
  /**
   *	Update action for `removeItemShippingAddress`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: Address
  /**
   *
   */
  readonly previousValue: Address
}
export interface RemoveLocalizedEnumValuesChange {
  readonly type: 'RemoveLocalizedEnumValuesChange'
  /**
   *	Update action for `removeEnumValues` on product types
   *
   */
  readonly change: string
  /**
   *	The name of the attribute updated.
   *
   */
  readonly attributeName: string
  /**
   *
   */
  readonly previousValue: LocalizedEnumValue
}
export interface RemoveLocationChange {
  readonly type: 'RemoveLocationChange'
  /**
   *	Update action for `removeLocation` on zones
   *
   */
  readonly change: string
  /**
   *	Shape of the value for `addLocation` and `removeLocation` actions
   *
   */
  readonly previousValue: Location
  /**
   *	Shape of the value for `addLocation` and `removeLocation` actions
   *
   */
  readonly nextValue: Location
}
export interface RemoveOrderLineItemChange {
  readonly type: 'RemoveOrderLineItemChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: LineItem
  /**
   *
   */
  readonly nextValue: LineItem
}
export interface RemoveParcelFromDeliveryChange {
  readonly type: 'RemoveParcelFromDeliveryChange'
  /**
   *	Update action for `removeParcelFromDelivery`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly deliveryId: string
  /**
   *
   */
  readonly previousValue: Parcel
}
export interface RemovePaymentChange {
  readonly type: 'RemovePaymentChange'
  /**
   *	Update action for `addPayment` & `removePayment`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: PaymentInfo
  /**
   *
   */
  readonly previousValue: PaymentInfo
}
export interface RemovePriceChange {
  readonly type: 'RemovePriceChange'
  /**
   *	Update action for removing prices
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly priceId: string
  /**
   *
   */
  readonly previousValue: Price
  /**
   *
   */
  readonly nextValue: Price
}
export interface RemoveShippingAddressIdChange {
  readonly type: 'RemoveShippingAddressIdChange'
  /**
   *	Update action for `removeShippingAddressId` action on customers.
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: string[]
  /**
   *
   */
  readonly previousValue: string[]
  /**
   *
   */
  readonly address: Address
}
export interface RemoveShoppingListLineItemChange {
  readonly type: 'RemoveShoppingListLineItemChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: LineItem
  /**
   *
   */
  readonly nextValue: LineItem
}
export interface RemoveStateRolesChange {
  readonly type: 'RemoveStateRolesChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: StateRole[]
  /**
   *
   */
  readonly nextValue: StateRole[]
}
export interface RemoveTaxRateChange {
  readonly type: 'RemoveTaxRateChange'
  /**
   *	Update action for `removeTaxRate` on tax categories
   *
   */
  readonly change: string
  /**
   *	Shape of the value for `addTaxRate` and `removeTaxRate` actions
   *
   */
  readonly previousValue: TaxRate
  /**
   *	Shape of the value for `addTaxRate` and `removeTaxRate` actions
   *
   */
  readonly nextValue: TaxRate
}
export interface RemoveTextLineItemChange {
  readonly type: 'RemoveTextLineItemChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: TextLineItem
  /**
   *
   */
  readonly nextValue: TextLineItem
}
export interface RemoveVariantChange {
  readonly type: 'RemoveVariantChange'
  /**
   *	Update action for `removeVariant`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly previousValue: Variant
  /**
   *
   */
  readonly nextValue: Variant
}
export interface SetAddressChange {
  readonly type: 'SetAddressChange'
  /**
   *	Update action for `setAddress` action.
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: Address
  /**
   *
   */
  readonly previousValue: Address
}
export interface SetAnonymousIdChange {
  readonly type: 'SetAnonymousIdChange'
  /**
   *	Shape of the action for `setAnonymousId`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetApplicationVersionChange {
  readonly type: 'SetApplicationVersionChange'
  /**
   *	Internal Update action for `setApplicationVersion`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: number
  /**
   *
   */
  readonly nextValue: number
}
export interface SetAssetCustomFieldChange {
  readonly type: 'SetAssetCustomFieldChange'
  /**
   *	Update action for `setAssetCustomField`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly name: string
  /**
   *
   */
  readonly customTypeId: string
  /**
   *
   */
  readonly asset: AssetChangeValue
  /**
   *
   */
  readonly nextValue: any
  /**
   *
   */
  readonly previousValue: any
}
export interface SetAssetCustomTypeChange {
  readonly type: 'SetAssetCustomTypeChange'
  /**
   *	Update action for `setAssetCustomType`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly asset: AssetChangeValue
  /**
   *
   */
  readonly nextValue: CustomFields
  /**
   *
   */
  readonly previousValue: CustomFields
}
export interface SetAssetDescriptionChange {
  readonly type: 'SetAssetDescriptionChange'
  /**
   *	Update action for `setAssetDescription`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly asset: AssetChangeValue
  /**
   *
   */
  readonly nextValue: LocalizedString
  /**
   *
   */
  readonly previousValue: LocalizedString
}
export interface SetAssetKeyChange {
  readonly type: 'SetAssetKeyChange'
  /**
   *	Update action for `setAssetKey`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly asset: AssetChangeValue
  /**
   *
   */
  readonly nextValue: string
  /**
   *
   */
  readonly previousValue: string
}
export interface SetAssetSourcesChange {
  readonly type: 'SetAssetSourcesChange'
  /**
   *	Update action for `setAssetSources`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly asset: AssetChangeValue
  /**
   *
   */
  readonly nextValue: AssetSource[]
  /**
   *
   */
  readonly previousValue: AssetSource[]
}
export interface SetAssetTagsChange {
  readonly type: 'SetAssetTagsChange'
  /**
   *	Update action for `setAssetTags`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly asset: AssetChangeValue
  /**
   *
   */
  readonly nextValue: string[]
  /**
   *
   */
  readonly previousValue: string[]
}
export interface SetAttributeChange {
  readonly type: 'SetAttributeChange'
  /**
   *	Update action for `setAttribute`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly previousValue: any
  /**
   *
   */
  readonly nextValue: any
}
export interface SetAuthorNameChange {
  readonly type: 'SetAuthorNameChange'
  /**
   *	Shape of the action for `setAuthorName`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetBillingAddressChange {
  readonly type: 'SetBillingAddressChange'
  /**
   *	Update action for `setBillingAddress`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: Address
  /**
   *
   */
  readonly previousValue: Address
}
export interface SetCartPredicateChange {
  readonly type: 'SetCartPredicateChange'
  /**
   *	Shape of the action for `setCartPredicate`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetCategoryOrderHintChange {
  readonly type: 'SetCategoryOrderHintChange'
  /**
   *	Update action for `setCategoryOrderHint`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly categoryId: string
  /**
   *
   */
  readonly previousValue: CategoryOrderHints
  /**
   *
   */
  readonly nextValue: CategoryOrderHints
}
export interface SetChannelRolesChange {
  readonly type: 'SetChannelRolesChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: ChannelRole[]
  /**
   *
   */
  readonly nextValue: ChannelRole[]
}
export interface SetCompanyNameChange {
  readonly type: 'SetCompanyNameChange'
  /**
   *	Shape of the action for `setCompanyName`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetCustomFieldChange {
  readonly type: 'SetCustomFieldChange'
  /**
   *	Update action for setting a custom field
   *
   */
  readonly change: string
  /**
   *	Custom field name
   *
   */
  readonly name: string
  /**
   *
   */
  readonly customTypeId: string
  /**
   *
   */
  readonly nextValue: any
  /**
   *
   */
  readonly previousValue: any
}
export interface SetCustomLineItemCustomFieldChange {
  readonly type: 'SetCustomLineItemCustomFieldChange'
  /**
   *	Update action for `setCustomLineItemCustomField`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly name: string
  /**
   *
   */
  readonly customLineItem: LocalizedString
  /**
   *
   */
  readonly nextValue: any
  /**
   *
   */
  readonly previousValue: any
}
export interface SetCustomLineItemCustomTypeChange {
  readonly type: 'SetCustomLineItemCustomTypeChange'
  /**
   *	Update action for `setCustomLineItemCustomType`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly customLineItem: LocalizedString
  /**
   *
   */
  readonly nextValue: CustomFields
  /**
   *
   */
  readonly previousValue: CustomFields
}
export interface SetCustomLineItemMoneyChange {
  readonly type: 'SetCustomLineItemMoneyChange'
  /**
   *	Update action for `setCustomLineItemMoney`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly customLineItem: LocalizedString
  /**
   *
   */
  readonly customLineItemId: string
  /**
   *
   */
  readonly nextValue: Money
  /**
   *
   */
  readonly previousValue: Money
}
export interface SetCustomLineItemShippingDetailsChange {
  readonly type: 'SetCustomLineItemShippingDetailsChange'
  /**
   *	Update action for `setCustomLineItemShippingDetails`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly customLineItemId: string
  /**
   *
   */
  readonly nextValue: ItemShippingDetails
  /**
   *
   */
  readonly previousValue: ItemShippingDetails
}
export interface SetCustomLineItemTaxRateChange {
  readonly type: 'SetCustomLineItemTaxRateChange'
  /**
   *	Update action for `setCustomLineItemTaxRate`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly customLineItem: LocalizedString
  /**
   *
   */
  readonly customLineItemId: string
  /**
   *	Shape of the value for `addTaxRate` and `removeTaxRate` actions
   *
   */
  readonly nextValue: TaxRate
  /**
   *	Shape of the value for `addTaxRate` and `removeTaxRate` actions
   *
   */
  readonly previousValue: TaxRate
}
export interface SetCustomLineItemTaxedPriceChange {
  readonly type: 'SetCustomLineItemTaxedPriceChange'
  /**
   *	Update action for `setCustomLineItemTaxedPrice`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly customLineItem: LocalizedString
  /**
   *
   */
  readonly customLineItemId: string
  /**
   *
   */
  readonly nextValue: Money
  /**
   *
   */
  readonly previousValue: Money
}
export interface SetCustomLineItemTotalPriceChange {
  readonly type: 'SetCustomLineItemTotalPriceChange'
  /**
   *	Update action for `setCustomLineItemTotalPrice`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly customLineItem: LocalizedString
  /**
   *
   */
  readonly customLineItemId: string
  /**
   *
   */
  readonly nextValue: Money
  /**
   *
   */
  readonly previousValue: Money
}
export interface SetCustomTypeChange {
  readonly type: 'SetCustomTypeChange'
  /**
   *	Update action for setting a custom type
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: CustomFields
  /**
   *
   */
  readonly previousValue: CustomFields
}
export interface SetCustomerChange {
  readonly type: 'SetCustomerChange'
  /**
   *	Shape of the action for `setCustomer`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: Reference
  /**
   *
   */
  readonly nextValue: Reference
}
export interface SetCustomerEmailChange {
  readonly type: 'SetCustomerEmailChange'
  /**
   *	Shape of the action for `setCustomerEmail`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetCustomerGroupChange {
  readonly type: 'SetCustomerGroupChange'
  /**
   *	Shape of the action for `setCustomerGroup`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: Reference
  /**
   *
   */
  readonly nextValue: Reference
}
export interface SetCustomerIdChange {
  readonly type: 'SetCustomerIdChange'
  /**
   *	Shape of the action for `setCustomerId`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetCustomerNumberChange {
  readonly type: 'SetCustomerNumberChange'
  /**
   *	Shape of the action for `setCustomerNumber`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetDateOfBirthChange {
  readonly type: 'SetDateOfBirthChange'
  /**
   *	Shape of the action for `setDateOfBirth`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetDefaultBillingAddressChange {
  readonly type: 'SetDefaultBillingAddressChange'
  /**
   *	Update action for `setDefaultBillingAddress` action.
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: Address
  /**
   *
   */
  readonly previousValue: Address
}
export interface SetDefaultShippingAddressChange {
  readonly type: 'SetDefaultShippingAddressChange'
  /**
   *	Update action for `setDefaultShippingAddress` action.
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: Address
  /**
   *
   */
  readonly previousValue: Address
}
export interface SetDeleteDaysAfterLastModificationChange {
  readonly type: 'SetDeleteDaysAfterLastModificationChange'
  /**
   *	Shape of the action for `setDeleteDaysAfterLastModification`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: number
  /**
   *
   */
  readonly nextValue: number
}
export interface SetDeliveryAddressChange {
  readonly type: 'SetDeliveryAddressChange'
  /**
   *	Update action for `setDeliveryAddress`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly deliveryId: string
  /**
   *
   */
  readonly nextValue: Address
  /**
   *
   */
  readonly previousValue: Address
}
export interface SetDeliveryItemsChange {
  readonly type: 'SetDeliveryItemsChange'
  /**
   *	Update action for `setDeliveryItems`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly deliveryId: string
  /**
   *
   */
  readonly nextValue: DeliveryItem[]
  /**
   *
   */
  readonly previousValue: DeliveryItem[]
}
export interface SetDescriptionChange {
  readonly type: 'SetDescriptionChange'
  /**
   *	Shape of the action for `setDescription`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetDiscountedPriceChange {
  readonly type: 'SetDiscountedPriceChange'
  /**
   *	Update action for `setDiscountedPrice`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly variant: string
  /**
   *
   */
  readonly priceId: string
  /**
   *
   */
  readonly previousValue: Price
  /**
   *
   */
  readonly nextValue: Price
}
export interface SetDistributionChannelsChange {
  readonly type: 'SetDistributionChannelsChange'
  /**
   *	Shape of the action for `setDistributionChannels`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: Reference[]
  /**
   *
   */
  readonly nextValue: Reference[]
}
export interface SetExpectedDeliveryChange {
  readonly type: 'SetExpectedDeliveryChange'
  /**
   *	Shape of the action for `setExpectedDelivery`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetExternalIdChange {
  readonly type: 'SetExternalIdChange'
  /**
   *	Shape of the action for `setExternalId`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetFirstNameChange {
  readonly type: 'SetFirstNameChange'
  /**
   *	Shape of the action for `setFirstName`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetGeoLocationChange {
  readonly type: 'SetGeoLocationChange'
  /**
   *	Update action for `setGeoLocation`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: GeoLocation
  /**
   *
   */
  readonly previousValue: GeoLocation
}
export interface SetImageLabelChange {
  readonly type: 'SetImageLabelChange'
  /**
   *	Update action for `setImageLabel`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly previousValue: Image
  /**
   *
   */
  readonly nextValue: Image
}
export interface SetInputTipChange {
  readonly type: 'SetInputTipChange'
  /**
   *	Update action for `setInputTip` on product types
   *
   */
  readonly change: string
  /**
   *	The name of the updated attribute.
   *
   */
  readonly attributeName: string
  /**
   *
   */
  readonly nextValue: LocalizedString
  /**
   *
   */
  readonly previousValue: LocalizedString
}
export interface SetInterfaceIdChange {
  readonly type: 'SetInterfaceIdChange'
  /**
   *	Shape of the action for `setInterfaceId`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetIsValidChange {
  readonly type: 'SetIsValidChange'
  /**
   *	Shape of the action for `setIsValid`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: boolean
  /**
   *
   */
  readonly nextValue: boolean
}
export interface SetKeyChange {
  readonly type: 'SetKeyChange'
  /**
   *	Shape of the action for `setKey`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetLanguagesChange {
  readonly type: 'SetLanguagesChange'
  /**
   *	Update action for `setLanguages` on stores
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string[]
  /**
   *
   */
  readonly nextValue: string[]
}
export interface SetLastNameChange {
  readonly type: 'SetLastNameChange'
  /**
   *	Shape of the action for `setLastName`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetLineItemDiscountedPriceChange {
  readonly type: 'SetLineItemDiscountedPriceChange'
  /**
   *	Update action for `setLineItemDiscountedPrice`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly lineItem: LocalizedString
  /**
   *
   */
  readonly variant: string
  /**
   *
   */
  readonly nextValue: DiscountedLineItemPrice
  /**
   *
   */
  readonly previousValue: DiscountedLineItemPrice
}
export interface SetLineItemDiscountedPricePerQuantityChange {
  readonly type: 'SetLineItemDiscountedPricePerQuantityChange'
  /**
   *	Update action for `setLineItemDiscountedPricePerQuantity`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly lineItem: LocalizedString
  /**
   *
   */
  readonly variant: string
  /**
   *
   */
  readonly nextValue: DiscountedLineItemPriceForQuantity
  /**
   *
   */
  readonly previousValue: DiscountedLineItemPriceForQuantity
}
export interface SetLineItemPriceChange {
  readonly type: 'SetLineItemPriceChange'
  /**
   *	Update action for `setLineItemPrice`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly lineItem: LocalizedString
  /**
   *
   */
  readonly nextValue: Price
  /**
   *
   */
  readonly previousValue: Price
}
export interface SetLineItemProductSlugChange {
  readonly type: 'SetLineItemProductSlugChange'
  /**
   *	Update action for `setLineItemProductSlug`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly lineItem: LocalizedString
  /**
   *
   */
  readonly variant: string
  /**
   *
   */
  readonly nextValue: LocalizedString
  /**
   *
   */
  readonly previousValue: LocalizedString
}
export interface SetLineItemShippingDetailsChange {
  readonly type: 'SetLineItemShippingDetailsChange'
  /**
   *	Update action for `setLineItemShippingDetails`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly nextValue: ItemShippingDetails
  /**
   *
   */
  readonly previousValue: ItemShippingDetails
}
export interface SetLineItemTaxRateChange {
  readonly type: 'SetLineItemTaxRateChange'
  /**
   *	Update action for `setLineItemTaxRate`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly lineItem: LocalizedString
  /**
   *	Shape of the value for `addTaxRate` and `removeTaxRate` actions
   *
   */
  readonly nextValue: TaxRate
  /**
   *	Shape of the value for `addTaxRate` and `removeTaxRate` actions
   *
   */
  readonly previousValue: TaxRate
}
export interface SetLineItemTaxedPriceChange {
  readonly type: 'SetLineItemTaxedPriceChange'
  /**
   *	Update action for `setLineItemTaxedPrice`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly lineItem: LocalizedString
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly nextValue: TaxedItemPrice
  /**
   *
   */
  readonly previousValue: TaxedItemPrice
}
export interface SetLineItemTotalPriceChange {
  readonly type: 'SetLineItemTotalPriceChange'
  /**
   *	Update action for `setLineItemTotalPrice`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly lineItem: LocalizedString
  /**
   *
   */
  readonly nextValue: Money
  /**
   *
   */
  readonly previousValue: Money
}
export interface SetLocaleChange {
  readonly type: 'SetLocaleChange'
  /**
   *	Update action for `setLocale` on reviews
   *
   */
  readonly change: string
  /**
   *	A locale of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag).
   *
   */
  readonly previousValue: string
  /**
   *	A locale of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag).
   *
   */
  readonly nextValue: string
}
export interface SetLocalizedDescriptionChange {
  readonly type: 'SetLocalizedDescriptionChange'
  /**
   *	Shape of the action for `setDescription`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: LocalizedString
  /**
   *
   */
  readonly nextValue: LocalizedString
}
export interface SetMaxApplicationsChange {
  readonly type: 'SetMaxApplicationsChange'
  /**
   *	Shape of the action for `setMaxApplications`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: number
  /**
   *
   */
  readonly nextValue: number
}
export interface SetMaxApplicationsPerCustomerChange {
  readonly type: 'SetMaxApplicationsPerCustomerChange'
  /**
   *	Shape of the action for `setMaxApplicationsPerCustomer`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: number
  /**
   *
   */
  readonly nextValue: number
}
export interface SetMetaDescriptionChange {
  readonly type: 'SetMetaDescriptionChange'
  /**
   *	Shape of the action for `setMetaDescription`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: LocalizedString
  /**
   *
   */
  readonly nextValue: LocalizedString
}
export interface SetMetaKeywordsChange {
  readonly type: 'SetMetaKeywordsChange'
  /**
   *	Shape of the action for `setMetaKeywords`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: LocalizedString
  /**
   *
   */
  readonly nextValue: LocalizedString
}
export interface SetMetaTitleChange {
  readonly type: 'SetMetaTitleChange'
  /**
   *	Shape of the action for `setMetaTitle`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: LocalizedString
  /**
   *
   */
  readonly nextValue: LocalizedString
}
export interface SetMethodInfoInterfaceChange {
  readonly type: 'SetMethodInfoInterfaceChange'
  /**
   *	Shape of the action for `setMethodInfoInterface`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetMethodInfoMethodChange {
  readonly type: 'SetMethodInfoMethodChange'
  /**
   *	Shape of the action for `setMethodInfoMethod`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetMethodInfoNameChange {
  readonly type: 'SetMethodInfoNameChange'
  /**
   *	Shape of the action for `setMethodInfoName`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: LocalizedString
  /**
   *
   */
  readonly nextValue: LocalizedString
}
export interface SetMiddleNameChange {
  readonly type: 'SetMiddleNameChange'
  /**
   *	Shape of the action for `setMiddleName`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetNameChange {
  readonly type: 'SetNameChange'
  /**
   *	Shape of the action for `setName`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: LocalizedString
  /**
   *
   */
  readonly nextValue: LocalizedString
}
export interface SetOrderLineItemCustomFieldChange {
  readonly type: 'SetOrderLineItemCustomFieldChange'
  /**
   *	Update action for `setLineItemCustomField`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly customTypeId: string
  /**
   *
   */
  readonly name: string
  /**
   *
   */
  readonly variant: string
  /**
   *
   */
  readonly lineItem: LocalizedString
  /**
   *
   */
  readonly nextValue: any
  /**
   *
   */
  readonly previousValue: any
}
export interface SetOrderLineItemCustomTypeChange {
  readonly type: 'SetOrderLineItemCustomTypeChange'
  /**
   *	Update action for `setLineItemCustomType`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly lineItem: LocalizedString
  /**
   *
   */
  readonly variant: string
  /**
   *
   */
  readonly nextValue: CustomFields
  /**
   *
   */
  readonly previousValue: CustomFields
}
export interface SetOrderNumberChange {
  readonly type: 'SetOrderNumberChange'
  /**
   *	Shape of the action for `setOrderNumber`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetOrderTaxedPriceChange {
  readonly type: 'SetOrderTaxedPriceChange'
  /**
   *	Update action for `setOrderTaxedPrice`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: TaxedItemPrice
  /**
   *
   */
  readonly previousValue: TaxedItemPrice
}
export interface SetOrderTotalPriceChange {
  readonly type: 'SetOrderTotalPriceChange'
  /**
   *	Update action for `setOrderTotalPrice`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: Money
  /**
   *
   */
  readonly previousValue: Money
}
export interface SetParcelItemsChange {
  readonly type: 'SetParcelItemsChange'
  /**
   *	Update action for `setParcelItems`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly parcel: ParcelChangeValue
  /**
   *
   */
  readonly nextValue: DeliveryItem[]
  /**
   *
   */
  readonly previousValue: DeliveryItem[]
}
export interface SetParcelMeasurementsChange {
  readonly type: 'SetParcelMeasurementsChange'
  /**
   *	Update action for `setParcelMeasurements`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly parcel: ParcelChangeValue
  /**
   *
   */
  readonly nextValue: ParcelMeasurements
  /**
   *
   */
  readonly previousValue: ParcelMeasurements
}
export interface SetParcelTrackingDataChange {
  readonly type: 'SetParcelTrackingDataChange'
  /**
   *	Update action for `setParcelTrackingData`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly parcel: ParcelChangeValue
  /**
   *
   */
  readonly nextValue: TrackingData
  /**
   *
   */
  readonly previousValue: TrackingData
}
export interface SetPricesChange {
  readonly type: 'SetPricesChange'
  /**
   *	Update action for `setPrices`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly variant: string
  /**
   *
   */
  readonly previousValue: Price[]
  /**
   *
   */
  readonly nextValue: Price[]
}
export interface SetProductPriceCustomFieldChange {
  readonly type: 'SetProductPriceCustomFieldChange'
  /**
   *	Update action for `setProductPriceCustomField`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly previousValue: CustomFields
  /**
   *
   */
  readonly nextValue: CustomFields
}
export interface SetProductPriceCustomTypeChange {
  readonly type: 'SetProductPriceCustomTypeChange'
  /**
   *	Update action for `setProductPriceCustomType`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly previousValue: CustomFields
  /**
   *
   */
  readonly nextValue: CustomFields
}
export interface SetProductVariantKeyChange {
  readonly type: 'SetProductVariantKeyChange'
  /**
   *	Update action for `setProductVariantKey`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetRatingChange {
  readonly type: 'SetRatingChange'
  /**
   *	Shape of the action for `setRating`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: number
  /**
   *
   */
  readonly nextValue: number
}
export interface SetReservationsChange {
  readonly type: 'SetReservationsChange'
  /**
   *	Update action for `setReservations` on inventories
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: Reservation[]
  /**
   *
   */
  readonly previousValue: Reservation[]
}
export interface SetRestockableInDaysChange {
  readonly type: 'SetRestockableInDaysChange'
  /**
   *	Shape of the action for `setRestockableInDays`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: number
  /**
   *
   */
  readonly nextValue: number
}
export interface SetReturnPaymentStateChange {
  readonly type: 'SetReturnPaymentStateChange'
  /**
   *	Update action for `setReturnPaymentState`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: ReturnPaymentState
  /**
   *
   */
  readonly previousValue: ReturnPaymentState
}
export interface SetReturnShipmentStateChange {
  readonly type: 'SetReturnShipmentStateChange'
  /**
   *	Update action for `setReturnShipmentState`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: ReturnShipmentState
  /**
   *
   */
  readonly previousValue: ReturnShipmentState
}
export interface SetSalutationChange {
  readonly type: 'SetSalutationChange'
  /**
   *	Shape of the action for `setSalutation`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetSearchKeywordsChange {
  readonly type: 'SetSearchKeywordsChange'
  /**
   *	Update action for `setSearchKeywords`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly previousValue: SearchKeywords
  /**
   *
   */
  readonly nextValue: SearchKeywords
}
export interface SetShippingAddressChange {
  readonly type: 'SetShippingAddressChange'
  /**
   *	Update action for `setShippingAddress`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly nextValue: Address
  /**
   *
   */
  readonly previousValue: Address
}
export interface SetShoppingListLineItemCustomFieldChange {
  readonly type: 'SetShoppingListLineItemCustomFieldChange'
  /**
   *	Update action for `setLineItemCustomField`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly name: string
  /**
   *
   */
  readonly customTypeId: string
  /**
   *
   */
  readonly lineItem: ShoppingListLineItemValue
  /**
   *
   */
  readonly nextValue: any
  /**
   *
   */
  readonly previousValue: any
}
export interface SetShoppingListLineItemCustomTypeChange {
  readonly type: 'SetShoppingListLineItemCustomTypeChange'
  /**
   *	Update action for `setLineItemCustomType`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly lineItem: ShoppingListLineItemValue
  /**
   *
   */
  readonly nextValue: CustomFields
  /**
   *
   */
  readonly previousValue: CustomFields
}
export interface SetSkuChange {
  readonly type: 'SetSkuChange'
  /**
   *	Update action for `setSku`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetSlugChange {
  readonly type: 'SetSlugChange'
  /**
   *	Shape of the action for `setSlug`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: LocalizedString
  /**
   *
   */
  readonly nextValue: LocalizedString
}
export interface SetStateRolesChange {
  readonly type: 'SetStateRolesChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: StateRole[]
  /**
   *
   */
  readonly nextValue: StateRole[]
}
export interface SetStatusInterfaceCodeChange {
  readonly type: 'SetStatusInterfaceCodeChange'
  /**
   *	Shape of the action for `setStatusInterfaceCode`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetStatusInterfaceTextChange {
  readonly type: 'SetStatusInterfaceTextChange'
  /**
   *	Shape of the action for `setStatusInterfaceText`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetStoreChange {
  readonly type: 'SetStoreChange'
  /**
   *	Shape of the action for `setStore`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: Reference
  /**
   *
   */
  readonly nextValue: Reference
}
export interface SetStoresChange {
  readonly type: 'SetStoresChange'
  /**
   *	Shape of the action for `setStores`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: Reference[]
  /**
   *
   */
  readonly nextValue: Reference[]
}
export interface SetSupplyChannelChange {
  readonly type: 'SetSupplyChannelChange'
  /**
   *	Shape of the action for `setSupplyChannel`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: Reference
  /**
   *
   */
  readonly nextValue: Reference
}
export interface SetSupplyChannelsChange {
  readonly type: 'SetSupplyChannelsChange'
  /**
   *	Shape of the action for `setSupplyChannels`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: Reference[]
  /**
   *
   */
  readonly nextValue: Reference[]
}
export interface SetTargetChange {
  readonly type: 'SetTargetChange'
  /**
   *	Shape of the action for `setTarget`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: Reference
  /**
   *
   */
  readonly nextValue: Reference
}
export interface SetTaxCategoryChange {
  readonly type: 'SetTaxCategoryChange'
  /**
   *	Shape of the action for `setTaxCategory`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: Reference
  /**
   *
   */
  readonly nextValue: Reference
}
export interface SetTextChange {
  readonly type: 'SetTextChange'
  /**
   *	Shape of the action for `setText`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetTextLineItemCustomFieldChange {
  readonly type: 'SetTextLineItemCustomFieldChange'
  /**
   *	Update action for `setTextLineItemCustomField`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly name: string
  /**
   *
   */
  readonly customTypeId: string
  /**
   *
   */
  readonly textLineItem: TextLineItemValue
  /**
   *
   */
  readonly nextValue: any
  /**
   *
   */
  readonly previousValue: any
}
export interface SetTextLineItemCustomTypeChange {
  readonly type: 'SetTextLineItemCustomTypeChange'
  /**
   *	Update action for `setTextLineItemCustomType`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly textLineItem: TextLineItemValue
  /**
   *
   */
  readonly nextValue: CustomFields
  /**
   *
   */
  readonly previousValue: CustomFields
}
export interface SetTextLineItemDescriptionChange {
  readonly type: 'SetTextLineItemDescriptionChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly textLineItem: TextLineItemValue
  /**
   *
   */
  readonly previousValue: LocalizedString
  /**
   *
   */
  readonly nextValue: LocalizedString
}
export interface SetTitleChange {
  readonly type: 'SetTitleChange'
  /**
   *	Shape of the action for `setTitle`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetTransitionsChange {
  readonly type: 'SetTransitionsChange'
  /**
   *	Shape of the action for `setTransitions`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: Reference[]
  /**
   *
   */
  readonly nextValue: Reference[]
}
export interface SetValidFromAndUntilChange {
  readonly type: 'SetValidFromAndUntilChange'
  /**
   *
   */
  readonly change: string
  /**
   *	Shape of the value for `setValidFromAndUntil` action
   *
   */
  readonly previousValue: ValidFromAndUntilValue
  /**
   *	Shape of the value for `setValidFromAndUntil` action
   *
   */
  readonly nextValue: ValidFromAndUntilValue
}
export interface SetValidFromChange {
  readonly type: 'SetValidFromChange'
  /**
   *	Shape of the action for `setValidFrom`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetValidUntilChange {
  readonly type: 'SetValidUntilChange'
  /**
   *	Shape of the action for `setValidUntil`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface SetVariantAvailabilityChange {
  readonly type: 'SetVariantAvailabilityChange'
  /**
   *	Update action for `setVariantAvailability`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly catalogData: string
  /**
   *
   */
  readonly variant: string
  /**
   *
   */
  readonly previousValue: ProductVariantAvailability
  /**
   *
   */
  readonly nextValue: ProductVariantAvailability
}
export interface SetVatIdChange {
  readonly type: 'SetVatIdChange'
  /**
   *	Shape of the action for `setVatId`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: string
  /**
   *
   */
  readonly nextValue: string
}
export interface TransitionCustomLineItemStateChange {
  readonly type: 'TransitionCustomLineItemStateChange'
  /**
   *	Update action for `transitionCustomLineItemState`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly stateId: string
  /**
   *
   */
  readonly nextValue: ItemState[]
  /**
   *
   */
  readonly previousValue: ItemState[]
}
export interface TransitionLineItemStateChange {
  readonly type: 'TransitionLineItemStateChange'
  /**
   *	Update action for `transitionLineItemState`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly lineItemId: string
  /**
   *
   */
  readonly stateId: string
  /**
   *
   */
  readonly nextValue: ItemState[]
  /**
   *
   */
  readonly previousValue: ItemState[]
}
export interface TransitionStateChange {
  readonly type: 'TransitionStateChange'
  /**
   *	Shape of the action for `transitionState`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: Reference
  /**
   *
   */
  readonly nextValue: Reference
}
export interface UnknownChange {
  readonly type: 'UnknownChange'
  /**
   *
   */
  readonly change: string
  /**
   *
   */
  readonly previousValue: any
  /**
   *
   */
  readonly nextValue: any
}
export interface UnpublishChange {
  readonly type: 'UnpublishChange'
  /**
   *
   */
  readonly change: string
}
export interface UpdateSyncInfoChange {
  readonly type: 'UpdateSyncInfoChange'
  /**
   *	Update action for `updateSyncInfo`
   *
   */
  readonly change: string
  /**
   *
   */
  readonly channelId: string
  /**
   *
   */
  readonly nextValue: SyncInfo
}
export interface VerifyEmailChange {
  readonly type: 'VerifyEmailChange'
  /**
   *
   */
  readonly change: string
}

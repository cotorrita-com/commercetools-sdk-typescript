/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  Asset,
  Image,
  ImportResource,
  KeyReference,
  LocalizedString,
  ProductKeyReference,
  ProductVariantKeyReference,
  TypedMoney,
} from './common'

/**
 *	This type represents the value of an attribute of a product variant.
 *	The name and type property must match the name and type property of an attribute definition of the product type.
 *
 */
export type Attribute =
  | BooleanAttribute
  | BooleanSetAttribute
  | DateAttribute
  | DateSetAttribute
  | DateTimeAttribute
  | DateTimeSetAttribute
  | EnumAttribute
  | EnumSetAttribute
  | LocalizableEnumAttribute
  | LocalizableEnumSetAttribute
  | LocalizableTextAttribute
  | LocalizableTextSetAttribute
  | MoneyAttribute
  | MoneySetAttribute
  | NumberAttribute
  | NumberSetAttribute
  | ReferenceAttribute
  | ReferenceSetAttribute
  | TextAttribute
  | TextSetAttribute
  | TimeAttribute
  | TimeSetAttribute
/**
 *	This type represents an attribute whose value is either "true" or "false".
 *
 */
export interface BooleanAttribute {
  readonly type: 'boolean'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: boolean
}
/**
 *	This type represents an attribute whose value is set of boolean values.
 *
 */
export interface BooleanSetAttribute {
  readonly type: 'boolean-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: boolean[]
}
/**
 *	This type represents an attribute whose value is a date.
 *
 */
export interface DateAttribute {
  readonly type: 'date'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string
}
/**
 *	This type represents an attribute whose value is a set of dates.
 *
 */
export interface DateSetAttribute {
  readonly type: 'date-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string[]
}
/**
 *	This type represents an attribute whose value is a date with time.
 *
 */
export interface DateTimeAttribute {
  readonly type: 'datetime'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string
}
/**
 *	This type represents an attribute whose value is a set of dates with time.
 *
 */
export interface DateTimeSetAttribute {
  readonly type: 'datetime-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string[]
}
/**
 *	This type represents an attribute whose value is an enum.
 *	The attribute value refers to the key of the enum value.
 *
 */
export interface EnumAttribute {
  readonly type: 'enum'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string
}
/**
 *	This type represents an attribute whose value is an enum.
 *	The attribute value refers to the key of the enum value.
 *
 */
export interface EnumSetAttribute {
  readonly type: 'enum-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string[]
}
/**
 *	This type represents an attribute whose value is a localized enum.
 *	The attribute value refers to the key of the enum value.
 *
 */
export interface LocalizableEnumAttribute {
  readonly type: 'lenum'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string
}
/**
 *	This type represents an attribute whose value is a localized enum.
 *	The attribute value refers to the key of the enum value.
 *
 */
export interface LocalizableEnumSetAttribute {
  readonly type: 'lenum-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string[]
}
/**
 *	This type represents an attribute whose value is a localized text.
 *
 */
export interface LocalizableTextAttribute {
  readonly type: 'ltext'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *	A localized string is a JSON object where the keys are of [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag), and the values the corresponding strings used for that language.
   *	```json
   *	{
   *	  "de": "Hundefutter",
   *	  "en": "dog food"
   *	}
   *	```
   *
   *
   */
  readonly value: LocalizedString
}
/**
 *	This type represents an attribute whose value is a localized text.
 *
 */
export interface LocalizableTextSetAttribute {
  readonly type: 'ltext-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: LocalizedString[]
}
/**
 *	This type represents an attribute whose value is a money object.
 *
 */
export interface MoneyAttribute {
  readonly type: 'money'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: TypedMoney
}
/**
 *	This type represents an attribute whose value is a set of money objects.
 *
 */
export interface MoneySetAttribute {
  readonly type: 'money-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *	TypedMoney is what is called BaseMoney in the HTTP API.
   *
   *
   */
  readonly value: TypedMoney[]
}
/**
 *	This type represents an attribute whose value is a number.
 *
 */
export interface NumberAttribute {
  readonly type: 'number'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: number
}
/**
 *	This type represents an attribute whose value is a set of numbers.
 *
 */
export interface NumberSetAttribute {
  readonly type: 'number-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: number[]
}
/**
 *	This type represents an attribute whose value is a key reference.
 *
 */
export interface ReferenceAttribute {
  readonly type: 'reference'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *	References a resource by key.
   *
   */
  readonly value: KeyReference
}
/**
 *	This type represents an attribute whose value is a set of references.
 *
 */
export interface ReferenceSetAttribute {
  readonly type: 'reference-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: KeyReference[]
}
/**
 *	This type represents an attribute whose value is a string.
 *
 */
export interface TextAttribute {
  readonly type: 'text'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string
}
/**
 *	This type represents an attribute whose value is a set of strings.
 *
 */
export interface TextSetAttribute {
  readonly type: 'text-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string[]
}
/**
 *	This type represents an attribute whose value is a time.
 *
 */
export interface TimeAttribute {
  readonly type: 'time'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string
}
/**
 *	This type represents an attribute whose value is a set of times.
 *
 */
export interface TimeSetAttribute {
  readonly type: 'time-set'
  /**
   *	The name of this attribute must match a name of the product types attribute definitions.
   *	The name is required if this type is used in a product variant and must not be set when
   *	used in a product variant patch.
   *
   *
   */
  readonly name?: string
  /**
   *
   */
  readonly value: string[]
}
/**
 *	The data representation for a ProductVariant to be imported that is persisted as a [ProductVariant](/../api/projects/products#productvariant) in the Project.
 *
 */
export interface ProductVariantImport extends ImportResource {
  /**
   *	Maps to `ProductVariant.sku`.
   *
   *
   */
  readonly sku?: string
  /**
   *	Maps to `ProductVariant.isMasterVariant`.
   *
   *
   */
  readonly isMasterVariant: boolean
  /**
   *	Maps to `ProductVariant.attributes`.
   *	The referenced attribute must be defined in an already existing ProductType in the commercetools project, or the `state` of the [ImportOperation](/import-operation#importoperation) will be `unresolved`.
   *
   *
   */
  readonly attributes?: Attribute[]
  /**
   *	Maps to `ProductVariant.images`.
   *
   *
   */
  readonly images?: Image[]
  /**
   *	Maps to `ProductVariant.assets`.
   *
   *
   */
  readonly assets?: Asset[]
  /**
   *	If `publish` is set to either `true` or `false`, both staged and current projections are set to the same value provided by the import data.
   *	If `publish` is not set, the staged projection is set to the provided import data, but the current projection stays unchanged.
   *	However, if the import data contains no update, that is, if it matches the staged projection of the existing Product in the platform, the import induces no change in the existing Product whether `publish` is set or not.
   *
   *
   */
  readonly publish?: boolean
  /**
   *	The [Product](/../api/projects/products#productvariant) to which this Product Variant belongs. Maps to `ProductVariant.product`.
   *	The Reference to the [Product](/../api/projects/products#product) with which the ProductVariant is associated.
   *	If referenced Product does not exist, the `state` of the [ImportOperation](/import-operation#importoperation) will be set to `unresolved` until the necessary Product is created.
   *
   *
   */
  readonly product: ProductKeyReference
}
/**
 *	Representation for an update of a [ProductVariant](/../api/projects/products#productvariant). Use this type to import updates for existing
 *	[ProductVariants](/../api/projects/products#productvariant) in a commercetools Project.
 *
 */
export interface ProductVariantPatch {
  /**
   *	The [ProductVariant](/../api/projects/products#productvariant) to which this patch is applied.
   *	The Reference to the [ProductVariant](/../api/projects/products#productvariant) with which the ProductVariantPatch is associated.
   *	If referenced ProductVariant does not exist, the `state` of the [ImportOperation](/import-operation#importoperation) will be set to `unresolved` until the necessary ProductVariant is created.
   *
   *
   */
  readonly productVariant: ProductVariantKeyReference
  /**
   *	Maps to `ProductVariant.attributes`.
   *	The referenced attribute must be defined in an already existing [ProductType](/../api/projects/productTypes#producttype) in the commercetools Project, or the `state` of the [ImportOperation](/import-operation#importoperation) will be `unresolved`.
   *
   *
   */
  readonly attributes?: Attributes
  /**
   *	If `false`, the attribute changes are applied to both [current and staged projected representations](/../api/projects/productProjections#current--staged) of the [Product](/../api/projects/products#product).
   *
   *
   */
  readonly staged?: boolean
}
export interface Attributes {
  [key: string]: Attribute | null
}

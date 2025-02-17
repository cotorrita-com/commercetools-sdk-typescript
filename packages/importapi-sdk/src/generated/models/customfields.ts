/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import {
  KeyReference,
  LocalizedString,
  Money,
  TypedMoney,
  TypeKeyReference,
} from './common'

/**
 *	The representation to be sent to the server when creating a resource with custom fields.
 */
export interface Custom {
  /**
   *	The type that provides the field definitions for this object.
   *
   */
  readonly type: TypeKeyReference
  /**
   *	The custom fields of this object.
   *
   */
  readonly fields?: FieldContainer
}
/**
 *	Maps the custom field names to the actual values.
 */
export interface FieldContainer {
  [key: string]: CustomField
}
/**
 *	Provides the value for a custom field of a specific type.
 */
export type CustomField =
  | BooleanField
  | BooleanSetField
  | DateField
  | DateSetField
  | DateTimeField
  | DateTimeSetField
  | EnumField
  | EnumSetField
  | LocalizedEnumField
  | LocalizedEnumSetField
  | LocalizedStringField
  | LocalizedStringSetField
  | MoneyField
  | MoneySetField
  | NumberField
  | NumberSetField
  | ReferenceField
  | ReferenceSetField
  | StringField
  | StringSetField
  | TimeField
  | TimeSetField
/**
 *	A field with a boolean value.
 */
export interface BooleanField {
  readonly type: 'Boolean'
  /**
   *
   */
  readonly value: boolean
}
/**
 *	A field with a string value.
 */
export interface StringField {
  readonly type: 'String'
  /**
   *
   */
  readonly value: string
}
/**
 *	A field with a localized string value.
 */
export interface LocalizedStringField {
  readonly type: 'LocalizedString'
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
 *	A field with a enum value.
 */
export interface EnumField {
  readonly type: 'Enum'
  /**
   *
   */
  readonly value: string
}
/**
 *	A field with a localized enum value.
 */
export interface LocalizedEnumField {
  readonly type: 'LocalizedEnum'
  /**
   *
   */
  readonly value: string
}
/**
 *	A field with a number value.
 */
export interface NumberField {
  readonly type: 'Number'
  /**
   *
   */
  readonly value: number
}
/**
 *	A field with a money value.
 */
export interface MoneyField {
  readonly type: 'Money'
  /**
   *
   */
  readonly value: TypedMoney
}
/**
 *	A field with a date value.
 */
export interface DateField {
  readonly type: 'Date'
  /**
   *
   */
  readonly value: string
}
/**
 *	A field with a time value.
 */
export interface TimeField {
  readonly type: 'Time'
  /**
   *
   */
  readonly value: string
}
/**
 *	A field with a date time value.
 */
export interface DateTimeField {
  readonly type: 'DateTime'
  /**
   *
   */
  readonly value: string
}
/**
 *	A field with a reference value.
 */
export interface ReferenceField {
  readonly type: 'Reference'
  /**
   *	References a resource by key
   *
   */
  readonly value: KeyReference
}
/**
 *	A field with a boolean set value.
 */
export interface BooleanSetField {
  readonly type: 'BooleanSet'
  /**
   *
   */
  readonly value: boolean[]
}
/**
 *	A field with a string set value.
 */
export interface StringSetField {
  readonly type: 'StringSet'
  /**
   *
   */
  readonly value: string[]
}
/**
 *	A field with a localized string set value.
 */
export interface LocalizedStringSetField {
  readonly type: 'LocalizedStringSet'
  /**
   *
   */
  readonly value: LocalizedString[]
}
/**
 *	A field with a enum set value.
 */
export interface EnumSetField {
  readonly type: 'EnumSet'
  /**
   *
   */
  readonly value: string[]
}
/**
 *	A field with a localized enum set value.
 */
export interface LocalizedEnumSetField {
  readonly type: 'LocalizedEnumSet'
  /**
   *
   */
  readonly value: string[]
}
/**
 *	A field with a number value.
 */
export interface NumberSetField {
  readonly type: 'NumberSet'
  /**
   *
   */
  readonly value: number[]
}
/**
 *	A field with a money set value.
 */
export interface MoneySetField {
  readonly type: 'MoneySet'
  /**
   *
   */
  readonly value: Money[]
}
/**
 *	A field with a date set value.
 */
export interface DateSetField {
  readonly type: 'DateSet'
  /**
   *
   */
  readonly value: string[]
}
/**
 *	A field with a time set value.
 */
export interface TimeSetField {
  readonly type: 'TimeSet'
  /**
   *
   */
  readonly value: string[]
}
/**
 *	A field with a date time set value.
 */
export interface DateTimeSetField {
  readonly type: 'DateTimeSet'
  /**
   *
   */
  readonly value: string[]
}
/**
 *	A field with a reference set value.
 */
export interface ReferenceSetField {
  readonly type: 'ReferenceSet'
  /**
   *
   */
  readonly value: KeyReference[]
}

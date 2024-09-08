import { ObjectDefn } from "../renderers/RenderObject";
import { Name } from "../domain/name";
import { Address } from "../domain/address";
import { countries } from "./country";

export const ukName: ObjectDefn<Name> = {
  title: { type: 'dropdown', options: [ 'Mr', 'Ms', 'Mrs', 'Dr', 'Prof' ] },
  firstName: 'string',
  lastName: 'string',
}
export const ukAddress: ObjectDefn<Address> = {
  houseNumber: 'string',
  street: 'string',
  town: 'string',
  city: 'string',
  county: 'string',
  country: { type: 'dropdown', options: countries },
}

import { ObjectDefn } from "../renderers/RenderObject";
import { Name } from "../domain/name";
import { Address } from "../domain/address";
import { countries } from "./country";

export const chName: ObjectDefn<Name> = {
  title: { type: 'dropdown', options: [ 'Herr', 'Frau', 'Dr', 'Prof' ] },
  firstName: 'string',
  lastName: 'string',
}
export const chAddress: ObjectDefn<Address> = {
  houseNumber: 'string',
  street: 'string',
  town: 'string',
  city: 'string',
  county: 'string',
  country: { type: 'dropdown', options: countries },
}
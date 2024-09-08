import React, { useState } from 'react';

import {  } from "../renderers/formfield";
import { Option } from "../utils/utils";
import { useComponents } from "../renderers/simpleimpl/use.simple";

export interface Address {
  houseNumber: string;
  street: string;
  town: string;
  city: string;
  county: string;
  country: string;
}
export const emptyAddress: Address = {
  houseNumber: '',
  street: '',
  town: '',
  city: '',
  county: '',
  country: '',
}

const countryOptions: Option[] = [
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  { value: "Other", label: "unknown" }
];

export const AddressForm: React.FC = () => {
  const [ formData, setFormData ] = useState<Address> ( emptyAddress );
  const { Field, FieldContainer } = useComponents ( formData, setFormData );
  return (
    <FieldContainer>
      <Field id="houseNumber"/>
      <Field id="street"/>
      <Field id="town"/>
      <Field id="city"/>
      <Field id="county"/>
      <Field id="country" renderer={{ type: 'dropdown', options: countryOptions }}/>
    </FieldContainer>
  );
};

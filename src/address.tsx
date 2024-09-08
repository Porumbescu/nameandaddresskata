import React, { useState } from 'react';
import { Address, emptyAddress } from './domain';

import { renderDropDown, renderStringInput } from './fieldRenderers';
import { FormField } from "./formfield";
import { FormFieldContainer } from "./form.field.container";
import { Option } from "./utils";

const countryOptions: Option[] = [
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  { value: "Other", label: "unknown" }
];

export const AddressForm: React.FC = () => {
  const [ formData, setFormData ] = useState<Address> ( emptyAddress );

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
    const { name, value } = e.target;
    setFormData ( ( prev ) => ({
      ...prev,
      [ name ]: value,
    }) );
  };

  return (
    <FormFieldContainer>
      <FormField<Address>
        id="houseNumber"
        value={formData}
        onChange={handleChange}
        renderInput={renderStringInput}
      />
      <FormField<Address>
        id="street"
        value={formData}
        onChange={handleChange}
        renderInput={renderStringInput}
      />
      <FormField<Address>
        id="town"
        value={formData}
        onChange={handleChange}
        renderInput={renderStringInput}
      />
      <FormField<Address>
        id="city"
        value={formData}
        onChange={handleChange}
        renderInput={renderStringInput}
      />
      <FormField<Address>
        id="county"
        value={formData}
        onChange={handleChange}
        renderInput={renderStringInput}
      />
      <FormField<Address>
        id="country"
        value={formData}
        onChange={handleChange}
        renderInput={renderDropDown ( countryOptions )}
      />
    </FormFieldContainer>
  );
};

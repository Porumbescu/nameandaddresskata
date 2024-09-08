import { useState } from "react";
import { emptyName, Name } from "./domain";
import { FormFieldContainer } from "./form.field.container";
import { FormField } from "./formfield";
import { renderDropDown, renderStringInput } from "./fieldRenderers";

const titleOptions = [
  'Mr',
  'Ms',
  'Mrs',
  'Dr',
  'Prof'
];
export const NameForm: React.FC = () => {
  const [ formData, setFormData ] = useState<Name> ( emptyName );

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
    const { name, value } = e.target;
    setFormData ( ( prev ) => ({
      ...prev,
      [ name ]: value,
    }) );
  };

  return (
    <FormFieldContainer>
      <FormField<Name>
        id="title"
        value={formData}
        onChange={handleChange}
        renderInput={renderDropDown ( titleOptions )}
      />
      <FormField<Name>
        id="firstName"
        value={formData}
        onChange={handleChange}
        renderInput={renderStringInput}
      />
      <FormField<Name>
        id="lastName"
        value={formData}
        onChange={handleChange}
        renderInput={renderStringInput}
      />
    </FormFieldContainer>
  );
};
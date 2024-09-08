import { useState } from "react";
import { useComponents } from "../renderers/simpleimpl/use.simple";


export interface Name {
  title: string;
  firstName: string;
  lastName: string;
}
export const emptyName: Name = {
  title: '',
  firstName: '',
  lastName: '',
}

const titleOptions = [
  'Mr',
  'Ms',
  'Mrs',
  'Dr',
  'Prof'
];
export const NameForm: React.FC = () => {
  const [ formData, setFormData ] = useState<Name> ( emptyName );
  const { Field, FieldContainer } = useComponents ( formData, setFormData );

  return (
    <FieldContainer>
      <Field id="title" renderer={{ type: 'dropdown', options: titleOptions }}/>
      <Field id="firstName"/>
      <Field id="lastName"/>
    </FieldContainer>
  );
};
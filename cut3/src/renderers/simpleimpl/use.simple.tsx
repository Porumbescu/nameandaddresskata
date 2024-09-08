import { FieldComponentProps, FieldComponentsFn } from "../field.components";
import React from "react";
import { SimpleFormField } from "./simple.field";
import { getRenderer } from "./simple.field.renderers";
import { SimpleFieldContainer } from "./simple.form.field.container";

export const useComponents: FieldComponentsFn = <T, > ( formData: T, set: ( t: T ) => void ) => {
  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
    const { name, value } = e.target;

    set ( {
      ...formData,
      [ name ]: value,
    } );
  };
  return {
    getRenderer,
    Field: ( { id, renderer = 'string' }: FieldComponentProps<T> ) =>
      <SimpleFormField<T> id={id} value={formData} onChange={handleChange} renderInput={renderer} getRenderer={getRenderer}/>,
    FieldContainer: SimpleFieldContainer
  }
}

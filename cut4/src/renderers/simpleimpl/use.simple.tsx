// src/renderers/simpleimpl/use.simple.tsx

import { FieldComponentProps, FieldComponentsFn } from "../field.components";
import React from "react";
import { SimpleFormField } from "./simple.field";
import { getRenderer } from "./simple.field.renderers";
import { SimpleFieldContainer } from "./simple.form.field.container";
import { setValueByPath } from "../../utils/utils";

export const useComponents: FieldComponentsFn = <T,>(formData: T, set: (t: T) => void) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const path = name.split('.');
    const newFormData = setValueByPath(formData, path, value);
    set(newFormData);
  };
  return {
    getRenderer,
    Field: ({ id, renderer = 'string' }: FieldComponentProps<T>) => (
      <SimpleFormField<T>
        id={id}
        value={formData}
        onChange={handleChange}
        renderInput={renderer}
        getRenderer={getRenderer}
      />
    ),
    FieldContainer: SimpleFieldContainer,
  };
};

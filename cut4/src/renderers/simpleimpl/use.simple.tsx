// src/renderers/simpleimpl/use.simple.tsx

import { FieldComponentProps, FieldComponentsFn } from "../field.components";
import React from "react";
import { SimpleFormField } from "./simple.field";
import { getRenderer } from "./simple.field.renderers";
import { SimpleFieldContainer } from "./simple.form.field.container";
import { LensAndPath } from "../../utils/lensUtils";

export const useComponents: FieldComponentsFn = <T,>(formData: T, set: (t: T) => void) => {
  const handleChange = (lens: LensAndPath<T, any>) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const newValue = e.target.value;
    const newFormData = lens.set(formData, newValue);
    set(newFormData);
  };
  return {
    getRenderer,
    Field: ({ lens, renderer = 'string' }: FieldComponentProps<T>) => (
      <SimpleFormField<T>
        lens={lens}
        value={formData}
        onChange={handleChange(lens)}
        renderInput={renderer}
        getRenderer={getRenderer}
      />
    ),
    FieldContainer: SimpleFieldContainer,
  };
};

// src/renderers/simpleimpl/simple.field.tsx

import { toDisplayForm, getValueByPath } from "../../utils/utils";
import React, { CSSProperties } from "react";
import { FormFieldProps } from "../formfield";

const fieldStyles = {
  formField: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '1rem',
  } as CSSProperties,
  label: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
};

export const SimpleFormField = <T,>({
  id,
  value,
  onChange,
  renderInput,
  getRenderer,
  required = true,
}: FormFieldProps<T>) => {
  const label = toDisplayForm(id as string);
  const path = (id as string).split('.');
  const fieldValue = getValueByPath(value, path);

  return (
    <div style={fieldStyles.formField}>
      <label htmlFor={id as string} style={fieldStyles.label}>
        {label}
      </label>
      {getRenderer(renderInput)(id as string, fieldValue, onChange, required)}
    </div>
  );
};

// src/renderers/simpleimpl/simple.field.tsx

import React, { CSSProperties } from "react";
import { FormFieldProps } from "../formfield";
import { toDisplayForm } from "../../utils/utils";

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
  lens,
  value,
  onChange,
  renderInput,
  getRenderer,
  required = true,
}: FormFieldProps<T>) => {
  const label = lens.path.join('.');
  const fieldValue = lens.get(value);

  return (
    <div style={fieldStyles.formField}>
      <label htmlFor={label} style={fieldStyles.label}>
        {toDisplayForm(label)}
      </label>
      {getRenderer(renderInput)(label, fieldValue, onChange, required)}
    </div>
  );
};

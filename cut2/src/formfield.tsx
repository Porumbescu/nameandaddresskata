import React, { CSSProperties } from 'react';
import { toDisplayForm } from "./utils";


// Define local styles inside the component
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

interface FormFieldProps<T> {
  id: keyof T;
  value: T;
  onChange: ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => void;
  renderInput: (
    id: keyof T,
    value: T,
    onChange: ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => void,
    required: boolean
  ) => JSX.Element;
  required?: boolean;
}

export const FormField = <T, > ( { id, value, onChange, renderInput, required = true }: FormFieldProps<T> ) => {
  const label = toDisplayForm ( id as string );

  return (
    <div style={fieldStyles.formField}>
      <label htmlFor={id as string} style={fieldStyles.label}>
        {label}
      </label>
      {renderInput ( id, value, onChange, required )}
    </div>
  );
};

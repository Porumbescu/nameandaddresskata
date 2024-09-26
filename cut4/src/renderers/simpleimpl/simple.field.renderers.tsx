// src/renderers/simpleimpl/simple.field.renderers.tsx

import React from 'react';
import { normalizeOptions, Option, toDisplayForm } from "../../utils/utils";

export type FieldRenderer = (
  label: string,
  fieldValue: any,
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  required: boolean
) => JSX.Element;

export const renderStringInput: FieldRenderer = (
  label: string,
  fieldValue: any,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  required: boolean = true
) => (
  <input
    type="text"
    id={label}
    name={label}
    value={fieldValue || ''}
    onChange={onChange}
    aria-required={required}
    aria-label={toDisplayForm(label)}
  />
);

export const renderDropDown = (options: Option[]): FieldRenderer => (
  label: string,
  fieldValue: any,
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  required: boolean = true
) => (
  <select
    id={label}
    name={label}
    value={fieldValue || ''}
    onChange={onChange}
    aria-required={required}
    aria-label={toDisplayForm(label)}
  >
    <option value="">Select {toDisplayForm(label).toLowerCase()}</option>
    {normalizeOptions(options).map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export type RendererDefn = 'string' | { type: 'dropdown'; options: Option[] };
export type GetRenderer = (renderer: RendererDefn) => FieldRenderer;
export const getRenderer: GetRenderer = (renderer: RendererDefn) => {
  if (typeof renderer === 'string') {
    return renderStringInput;
  } else {
    return renderDropDown(renderer.options);
  }
};

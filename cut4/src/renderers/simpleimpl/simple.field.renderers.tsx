// src/renderers/simpleimpl/simple.field.renderers.tsx

import React from 'react';
import { normalizeOptions, Option, toDisplayForm } from "../../utils/utils";

export type FieldRenderer = (
  id: string,
  fieldValue: any,
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  required: boolean
) => JSX.Element;

export const renderStringInput: FieldRenderer = (
  id: string,
  fieldValue: any,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  required: boolean = true
) => (
  <input
    type="text"
    id={id}
    name={id}
    value={fieldValue || ''}
    onChange={onChange}
    aria-required={required}
    aria-label={toDisplayForm(id)}
  />
);

export const renderDropDown = (options: Option[]): FieldRenderer => (
  id: string,
  fieldValue: any,
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  required: boolean = true
) => (
  <select
    id={id}
    name={id}
    value={fieldValue || ''}
    onChange={onChange}
    aria-required={required}
    aria-label={toDisplayForm(id)}
  >
    <option value="">Select {toDisplayForm(id).toLowerCase()}</option>
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

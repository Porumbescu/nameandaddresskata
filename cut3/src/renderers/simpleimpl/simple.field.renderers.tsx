import React from 'react';
import { normalizeOptions, Option, toDisplayForm } from "../../utils/utils";


export type FieldRenderer = (<T, >( id: keyof T, value: T, onChange: ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => void, required: boolean ) => JSX.Element);
export const renderStringInput: FieldRenderer = <T, > (
  id: keyof T,
  value: T,
  onChange: ( e: React.ChangeEvent<HTMLInputElement> ) => void,
  required: boolean = true
) => (
  <input
    type="text"
    id={id as string}
    name={id as string}
    value={value[ id ] as string}  // Index into value by id to get the specific field value
    onChange={onChange}
    aria-required={required}
    aria-label={toDisplayForm ( id as string )}
  />
);

export const renderDropDown = ( options: Option[] ): FieldRenderer => <T, > (
  id: keyof T,
  value: T,
  onChange: ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => void,
  required: boolean = true,
) => (
  <select
    id={id as string}
    name={id as string}
    value={value[ id ] as string}
    onChange={onChange}
    aria-required={required}
    aria-label={toDisplayForm ( id as string )}
  >
    <option value="">Select {toDisplayForm ( id as string ).toLowerCase ()}</option>
    {normalizeOptions ( options ).map ( ( option ) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ) )}
  </select>
);

export type RendererDefn = 'string' | { type: 'dropdown', options: Option[] }
export type GetRenderer = ( renderer: RendererDefn ) => FieldRenderer;
export const getRenderer:GetRenderer = ( renderer: RendererDefn ) => {
  if ( typeof renderer === 'string' ) {
    return renderStringInput;
  } else {
    return renderDropDown ( renderer.options );
  }
};
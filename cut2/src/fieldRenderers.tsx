import React from 'react';

import { normalizeOptions, Option, toDisplayForm } from "./utils";

export const renderStringInput = <T, > (
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
export const renderDropDown =( options: Option[]) =><T, > (
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

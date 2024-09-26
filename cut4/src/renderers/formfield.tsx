// src/renderers/formfield.tsx

import React from 'react';
import { GetRenderer, RendererDefn } from "./simpleimpl/simple.field.renderers";

export interface FormFieldProps<T> {
  id: keyof T | string;
  value: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  getRenderer: GetRenderer;
  renderInput: RendererDefn;
  required?: boolean;
}

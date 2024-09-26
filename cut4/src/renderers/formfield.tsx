// src/renderers/formfield.tsx

import { GetRenderer, RendererDefn } from "./simpleimpl/simple.field.renderers";
import { LensAndPath } from "../utils/lensUtils";

export interface FormFieldProps<T> {
  lens: LensAndPath<T, any>;
  value: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  getRenderer: GetRenderer;
  renderInput: RendererDefn;
  required?: boolean;
}

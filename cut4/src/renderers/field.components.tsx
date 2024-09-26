// src/renderers/field.components.tsx

import { FieldContainerType } from "./form.field.container";
import { GetRenderer, RendererDefn } from "./simpleimpl/simple.field.renderers";
import { LensAndPath } from "../utils/lensUtils";

export type FieldComponentProps<T> = {
  lens: LensAndPath<T, any>;
  renderer?: RendererDefn;
};

export type FieldComponents<T> = {
  getRenderer: GetRenderer;
  Field: (props: FieldComponentProps<T>) => JSX.Element;
  FieldContainer: FieldContainerType;
};

export type FieldComponentsFn = <T,>(formData: T, set: (t: T) => void) => FieldComponents<T>;

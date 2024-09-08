import { FieldContainerType } from "./form.field.container";
import { GetRenderer, RendererDefn } from "./simpleimpl/simple.field.renderers";


export type FieldComponentProps<T> = {
  id: keyof T;
  renderer?: RendererDefn;
}

export type FieldComponents<T> = {
  getRenderer: GetRenderer;
  Field: ( { id, renderer }: FieldComponentProps<T> ) => JSX.Element;
  FieldContainer: FieldContainerType
}

export type FieldComponentsFn = <T, >( formData: T, set: ( t: T ) => void ) => FieldComponents<T>

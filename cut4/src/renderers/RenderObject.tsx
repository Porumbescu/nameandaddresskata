import { RendererDefn } from "./simpleimpl/simple.field.renderers";
import { useState } from "react";
import { useComponents } from "./simpleimpl/use.simple";
import { mapKeys } from "../utils/utils";
import { Country, useCountry } from "../country/country";


export type ObjectDefn<T> = Partial<Record<keyof T, RendererDefn>>
export type TypeToObjectDefn<Type extends string> = Record<Type, ObjectDefn<any>>
export type CountryToObjectDefn<Type extends string> = Record<Country, TypeToObjectDefn<Type>>

export function empty<T> ( defn: ObjectDefn<T> ): T {
  const obj = {} as T;
  mapKeys ( defn, ( key ) => { obj[ key ] = '' as any;} );
  return obj;
}
export type RenderObjectProps<Type extends string, T> = {
  value?: T;
}

export const renderObject = <Type extends string, T> ( defns: CountryToObjectDefn<Type>, type: Type ) =>
  ( { value }: RenderObjectProps<Type, T> ): JSX.Element => {
    const country = useCountry ()
    const [ obj, setObj ] = useState<Partial<T>> ( value || {} );
    const { Field, FieldContainer } = useComponents ( obj, setObj );
    const byCountry: Record<Type, ObjectDefn<T>> = defns[ country ];
    if ( !byCountry ) throw new Error ( `No definition for country ${country}` );
    const defn: ObjectDefn<T> = byCountry[ type ];
    if ( !defn ) throw new Error ( `No definition for type ${type} in country ${country}` );
    return <>
      <FieldContainer>
        {mapKeys ( defn, key => <Field id={key} renderer={defn[ key ]}/> )}
      </FieldContainer>
    </>
  };

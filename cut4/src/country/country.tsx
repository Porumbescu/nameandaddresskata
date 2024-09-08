import React from "react";

export type Country = 'uk' | 'ch' | 'cn';
export const countries: Country[] = [
  'uk', 'ch', 'cn'
]
export function isCountry ( country: string ): country is Country {
  return countries.includes ( country as Country );
}

export const countryContext = React.createContext<Country> ( countries[ 0 ] );

export type CountryProviderProps = {
  children: React.ReactNode;
  country?: Country;
}
export function CountryProvider ( { children, country }: CountryProviderProps ) {
  return <countryContext.Provider value={country || countries[ 0 ]}>{children}</countryContext.Provider>
}
export function useCountry (): Country {
  return React.useContext ( countryContext );
}
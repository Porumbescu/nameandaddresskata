import React from 'react';
import ReactDOM from 'react-dom/client';
import { NameForm } from "./domain/name";
import { AddressForm } from "./domain/address";
import { Country, CountryProvider, isCountry } from "./country/country";

//get from a param in the url
const country = window.location.search.split ( '=' )[ 1 ] as Country;
if ( country && !isCountry ( country ) ) throw new Error ( 'Failed to get the country from the url' );
const App = () => {
  return (
    <CountryProvider country={country}>
      <NameForm/>
      <AddressForm/>
    </CountryProvider>
  );
};

const rootElement = document.getElementById ( 'root' );
if ( !rootElement ) throw new Error ( 'Failed to find the root element' );
const root = ReactDOM.createRoot ( rootElement );

root.render ( <App/> );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { NameForm } from "./domain/name";
import { AddressForm } from "./domain/address";

const App = () => {
  return (
    <div>
      <NameForm/>
      <AddressForm/>
    </div>
  );
};

const rootElement = document.getElementById ( 'root' );
if ( !rootElement ) throw new Error ( 'Failed to find the root element' );
const root = ReactDOM.createRoot ( rootElement );

root.render ( <App/> );

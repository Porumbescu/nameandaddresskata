import React from 'react';
import ReactDOM from 'react-dom/client';
import { NameForm } from "./name";
import { AddressForm } from "./address";


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

import React from 'react';
import { renderObject, RenderObjectProps } from "../renderers/RenderObject";
import { ValidTypes } from "./valid.types";
import { Country } from "../country/country";
import { countryDetails } from "../country/all.country.details";

export interface Address {
  houseNumber: string;
  street: string;
  town: string;
  city: string;
  county: string;
  country: Country;
  "国家": string;
  "省": string;
  "市": string;
  "区": string;
  "街道": string;
  "建筑号": string;
  "单元": string;
  "公寓号": string;
}


export const AddressForm: React.FC<RenderObjectProps<ValidTypes, Address>> = renderObject ( countryDetails, 'address' );
import { CountryToObjectDefn } from "../renderers/RenderObject";
import { ValidTypes } from "../domain/valid.types";
import { ukAddress, ukName } from "./uk";
import { chAddress, chName } from "./ch";

export const countryDetails: CountryToObjectDefn<ValidTypes> = {
  uk: { name: ukName, address: ukAddress },
  ch: { name: chName, address: chAddress },
  cn: { name: chName, address: chAddress },
}

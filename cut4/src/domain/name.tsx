import { renderObject, RenderObjectProps } from "../renderers/RenderObject";
import { ValidTypes } from "./valid.types";
import { countryDetails } from "../country/all.country.details";


export interface Name {
  title: string;
  firstName: string;
  lastName: string;
  generationName: string;
  givenName: string;
  "称谓": string;
  "姓氏": string;
  "辈分名": string;
  "名字": string;
}

export const NameForm: React.FC<RenderObjectProps<ValidTypes, Name>> = renderObject ( countryDetails, 'name' );
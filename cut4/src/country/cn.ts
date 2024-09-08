import { ObjectDefn } from "../renderers/RenderObject";
import { Name } from "../domain/name";
import { Address } from "../domain/address";
import { countries } from "./country";

export const cnName: ObjectDefn<Name> = {
  "称谓": { type: 'dropdown', options: [ '先生', '女士', '博士', '教授' ] },
  "姓氏": 'string',        // Surname
  "辈分名": 'string',      // Generation Name
  "名字": 'string',        // Given Name
}
export const cnAddress: ObjectDefn<Address> = {
  "国家": { type: 'dropdown', options: countries },
  "省": 'string',
  "市": 'string',
  "区": 'string',
  "街道": 'string',
  "建筑号": 'string',
  "单元": 'string',
  "公寓号": 'string'
}

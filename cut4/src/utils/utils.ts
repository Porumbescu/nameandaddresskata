// src/utils/utils.ts

export const toDisplayForm = (id: string): string => {
  return id.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
};

export interface ValueAndLabel {
  value: string;
  label: string;
}
export type Option = ValueAndLabel | string;

export const normalizeOptions = (options: Option[]): ValueAndLabel[] => {
  return options.map((option) =>
    typeof option === 'string' ? { value: option, label: option } : option
  );
};

export function mapKeys<T extends object, T1>(obj: T, fn: (key: keyof T) => T1): T1[] {
  return Object.keys(obj).map((key) => fn(key as keyof T));
}

export function getValueByPath(obj: any, path: string[]): any {
  return path.reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

export function setValueByPath(obj: any, path: string[], value: any): any {
  if (path.length === 0) {
    return value;
  }
  const [first, ...rest] = path;
  return {
    ...obj,
    [first]: rest.length > 0 ? setValueByPath(obj ? obj[first] : {}, rest, value) : value,
  };
}

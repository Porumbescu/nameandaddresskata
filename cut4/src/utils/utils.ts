export const toDisplayForm = ( id: string ): string => {
  return id.replace ( /([A-Z])/g, ' $1' ).replace ( /^./, ( str ) => str.toUpperCase () );
};

export interface ValueAndLabel {
  value: string;
  label: string;
}
export type Option = ValueAndLabel | string;

// Utility function to convert string | ValueAndLabel to ValueAndLabel
export const normalizeOptions = (
  options: Option[]
): ValueAndLabel[] => {
  return options.map ( option =>
    typeof option === 'string'
      ? { value: option, label: option } // If string, use the same value and label
      : option // If it's already ValueAndLabel, use it as is
  );
};

export function mapKeys<T extends object, T1> ( obj: T, fn: ( key: keyof T ) => T1 ): T1[] {
  return Object.keys ( obj ).map ( ( key ) => fn ( key as keyof T ) );

}
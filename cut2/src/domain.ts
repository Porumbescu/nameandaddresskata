export interface Name {
  title: string;
  firstName: string;
  lastName: string;
}
export const emptyName: Name = {
  title: '',
  firstName: '',
  lastName: '',
}

export interface Address {
  houseNumber: string;
  street: string;
  town: string;
  city: string;
  county: string;
  country: string;
}
export const emptyAddress: Address = {
  houseNumber: '',
  street: '',
  town: '',
  city: '',
  county: '',
  country: '',
}
export type ItemType = {
  title: string;
  description: string;
  image: string;
  price: number;
};

export type MenuItemType = ItemType & {
  itemID: string;
};

export type CartItemType = ItemType & {
  itemID: number;
  quantity: number;
  totalPrice: number;
};

export type CartStateType = {
  orderID: number;
  items: CartItemType[];
  totalItems: number;
  subtotal: number;
  tax: number;
  total: number;
};

export type AddressType = {
  street: string;
  apt: string;
  city: string;
  state: string;
  zipCode: number;
};

export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  telephone: number;
  address: AddressType;
};

export type ItemType = {
  title: string;
  description: string;
  image: string;
  imageURL: string;
  price: number;
};

export type MenuItemType = ItemType & {
  menuItemId: string;
};

export type CartItemType = ItemType &
  MenuItemType & {
    cartItemId: number;
    quantity: number;
    totalPrice: number;
  };

export type CartStateType = {
  orderID: string;
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
  zipCode: string;
};

export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  password: string;
  address: AddressType;
};

export type UserAttributesType = {
  [userAttributes: string]: string;
};

export type ErrorType = {
  name: string;
  code: string;
  message: string;
};

export type MainSelectionType = "menu" | "signin" | "cart";

export type MainContentType = {
  selection: MainSelectionType;
};

export type MenuSelectionType = "drinks" | "pizza" | "sides";

export type MenuContentType = {
  selection: MenuSelectionType;
};

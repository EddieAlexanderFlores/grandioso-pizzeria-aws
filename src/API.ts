/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMenuInput = {
  id?: string | null,
  name: string,
};

export type ModelMenuConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelMenuConditionInput | null > | null,
  or?: Array< ModelMenuConditionInput | null > | null,
  not?: ModelMenuConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Menu = {
  __typename: "Menu",
  id: string,
  name: string,
  menuCategories?: ModelMenuCategoryConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMenuCategoryConnection = {
  __typename: "ModelMenuCategoryConnection",
  items:  Array<MenuCategory | null >,
  nextToken?: string | null,
};

export type MenuCategory = {
  __typename: "MenuCategory",
  id: string,
  menuID: string,
  name: string,
  menuItems?: ModelMenuItemConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMenuItemConnection = {
  __typename: "ModelMenuItemConnection",
  items:  Array<MenuItem | null >,
  nextToken?: string | null,
};

export type MenuItem = {
  __typename: "MenuItem",
  id: string,
  menuCategoryID: string,
  title: string,
  image: string,
  description: string,
  price: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMenuInput = {
  id: string,
  name?: string | null,
};

export type DeleteMenuInput = {
  id: string,
};

export type CreateMenuCategoryInput = {
  id?: string | null,
  menuID: string,
  name: string,
};

export type ModelMenuCategoryConditionInput = {
  menuID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelMenuCategoryConditionInput | null > | null,
  or?: Array< ModelMenuCategoryConditionInput | null > | null,
  not?: ModelMenuCategoryConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMenuCategoryInput = {
  id: string,
  menuID?: string | null,
  name?: string | null,
};

export type DeleteMenuCategoryInput = {
  id: string,
};

export type CreateMenuItemInput = {
  id?: string | null,
  menuCategoryID: string,
  title: string,
  image: string,
  description: string,
  price: number,
};

export type ModelMenuItemConditionInput = {
  menuCategoryID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelMenuItemConditionInput | null > | null,
  or?: Array< ModelMenuItemConditionInput | null > | null,
  not?: ModelMenuItemConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMenuItemInput = {
  id: string,
  menuCategoryID?: string | null,
  title?: string | null,
  image?: string | null,
  description?: string | null,
  price?: number | null,
};

export type DeleteMenuItemInput = {
  id: string,
};

export type CreateCustomerInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  email: string,
};

export type ModelCustomerConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
};

export type Customer = {
  __typename: "Customer",
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  orders?: ModelOrderConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  customerID: string,
  email: string,
  totalItems: number,
  subtotal: number,
  tax: number,
  total: number,
  orderItems?: ModelOrderItemConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelOrderItemConnection = {
  __typename: "ModelOrderItemConnection",
  items:  Array<OrderItem | null >,
  nextToken?: string | null,
};

export type OrderItem = {
  __typename: "OrderItem",
  id: string,
  orderID: string,
  menuItemID: string,
  title: string,
  image: string,
  description: string,
  price: number,
  quantity: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateCustomerInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
};

export type DeleteCustomerInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  customerID: string,
  email: string,
  totalItems: number,
  subtotal: number,
  tax: number,
  total: number,
};

export type ModelOrderConditionInput = {
  customerID?: ModelIDInput | null,
  email?: ModelStringInput | null,
  totalItems?: ModelIntInput | null,
  subtotal?: ModelIntInput | null,
  tax?: ModelIntInput | null,
  total?: ModelIntInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type UpdateOrderInput = {
  id: string,
  customerID?: string | null,
  email?: string | null,
  totalItems?: number | null,
  subtotal?: number | null,
  tax?: number | null,
  total?: number | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type CreateOrderItemInput = {
  id?: string | null,
  orderID: string,
  menuItemID: string,
  title: string,
  image: string,
  description: string,
  price: number,
  quantity: number,
};

export type ModelOrderItemConditionInput = {
  orderID?: ModelIDInput | null,
  menuItemID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelIntInput | null,
  quantity?: ModelIntInput | null,
  and?: Array< ModelOrderItemConditionInput | null > | null,
  or?: Array< ModelOrderItemConditionInput | null > | null,
  not?: ModelOrderItemConditionInput | null,
};

export type UpdateOrderItemInput = {
  id: string,
  orderID?: string | null,
  menuItemID?: string | null,
  title?: string | null,
  image?: string | null,
  description?: string | null,
  price?: number | null,
  quantity?: number | null,
};

export type DeleteOrderItemInput = {
  id: string,
};

export type ModelMenuFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelMenuFilterInput | null > | null,
  or?: Array< ModelMenuFilterInput | null > | null,
  not?: ModelMenuFilterInput | null,
};

export type ModelMenuConnection = {
  __typename: "ModelMenuConnection",
  items:  Array<Menu | null >,
  nextToken?: string | null,
};

export type ModelMenuCategoryFilterInput = {
  id?: ModelIDInput | null,
  menuID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelMenuCategoryFilterInput | null > | null,
  or?: Array< ModelMenuCategoryFilterInput | null > | null,
  not?: ModelMenuCategoryFilterInput | null,
};

export type ModelMenuItemFilterInput = {
  id?: ModelIDInput | null,
  menuCategoryID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelMenuItemFilterInput | null > | null,
  or?: Array< ModelMenuItemFilterInput | null > | null,
  not?: ModelMenuItemFilterInput | null,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  customerID?: ModelIDInput | null,
  email?: ModelStringInput | null,
  totalItems?: ModelIntInput | null,
  subtotal?: ModelIntInput | null,
  tax?: ModelIntInput | null,
  total?: ModelIntInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelOrderItemFilterInput = {
  id?: ModelIDInput | null,
  orderID?: ModelIDInput | null,
  menuItemID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelIntInput | null,
  quantity?: ModelIntInput | null,
  and?: Array< ModelOrderItemFilterInput | null > | null,
  or?: Array< ModelOrderItemFilterInput | null > | null,
  not?: ModelOrderItemFilterInput | null,
};

export type CreateMenuMutationVariables = {
  input: CreateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type CreateMenuMutation = {
  createMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    menuCategories?:  {
      __typename: "ModelMenuCategoryConnection",
      items:  Array< {
        __typename: "MenuCategory",
        id: string,
        menuID: string,
        name: string,
        menuItems?:  {
          __typename: "ModelMenuItemConnection",
          items:  Array< {
            __typename: "MenuItem",
            id: string,
            menuCategoryID: string,
            title: string,
            image: string,
            description: string,
            price: number,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMenuMutationVariables = {
  input: UpdateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type UpdateMenuMutation = {
  updateMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    menuCategories?:  {
      __typename: "ModelMenuCategoryConnection",
      items:  Array< {
        __typename: "MenuCategory",
        id: string,
        menuID: string,
        name: string,
        menuItems?:  {
          __typename: "ModelMenuItemConnection",
          items:  Array< {
            __typename: "MenuItem",
            id: string,
            menuCategoryID: string,
            title: string,
            image: string,
            description: string,
            price: number,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMenuMutationVariables = {
  input: DeleteMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type DeleteMenuMutation = {
  deleteMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    menuCategories?:  {
      __typename: "ModelMenuCategoryConnection",
      items:  Array< {
        __typename: "MenuCategory",
        id: string,
        menuID: string,
        name: string,
        menuItems?:  {
          __typename: "ModelMenuItemConnection",
          items:  Array< {
            __typename: "MenuItem",
            id: string,
            menuCategoryID: string,
            title: string,
            image: string,
            description: string,
            price: number,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMenuCategoryMutationVariables = {
  input: CreateMenuCategoryInput,
  condition?: ModelMenuCategoryConditionInput | null,
};

export type CreateMenuCategoryMutation = {
  createMenuCategory?:  {
    __typename: "MenuCategory",
    id: string,
    menuID: string,
    name: string,
    menuItems?:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        menuCategoryID: string,
        title: string,
        image: string,
        description: string,
        price: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMenuCategoryMutationVariables = {
  input: UpdateMenuCategoryInput,
  condition?: ModelMenuCategoryConditionInput | null,
};

export type UpdateMenuCategoryMutation = {
  updateMenuCategory?:  {
    __typename: "MenuCategory",
    id: string,
    menuID: string,
    name: string,
    menuItems?:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        menuCategoryID: string,
        title: string,
        image: string,
        description: string,
        price: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMenuCategoryMutationVariables = {
  input: DeleteMenuCategoryInput,
  condition?: ModelMenuCategoryConditionInput | null,
};

export type DeleteMenuCategoryMutation = {
  deleteMenuCategory?:  {
    __typename: "MenuCategory",
    id: string,
    menuID: string,
    name: string,
    menuItems?:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        menuCategoryID: string,
        title: string,
        image: string,
        description: string,
        price: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMenuItemMutationVariables = {
  input: CreateMenuItemInput,
  condition?: ModelMenuItemConditionInput | null,
};

export type CreateMenuItemMutation = {
  createMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    menuCategoryID: string,
    title: string,
    image: string,
    description: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMenuItemMutationVariables = {
  input: UpdateMenuItemInput,
  condition?: ModelMenuItemConditionInput | null,
};

export type UpdateMenuItemMutation = {
  updateMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    menuCategoryID: string,
    title: string,
    image: string,
    description: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMenuItemMutationVariables = {
  input: DeleteMenuItemInput,
  condition?: ModelMenuItemConditionInput | null,
};

export type DeleteMenuItemMutation = {
  deleteMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    menuCategoryID: string,
    title: string,
    image: string,
    description: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        customerID: string,
        email: string,
        totalItems: number,
        subtotal: number,
        tax: number,
        total: number,
        orderItems?:  {
          __typename: "ModelOrderItemConnection",
          items:  Array< {
            __typename: "OrderItem",
            id: string,
            orderID: string,
            menuItemID: string,
            title: string,
            image: string,
            description: string,
            price: number,
            quantity: number,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        customerID: string,
        email: string,
        totalItems: number,
        subtotal: number,
        tax: number,
        total: number,
        orderItems?:  {
          __typename: "ModelOrderItemConnection",
          items:  Array< {
            __typename: "OrderItem",
            id: string,
            orderID: string,
            menuItemID: string,
            title: string,
            image: string,
            description: string,
            price: number,
            quantity: number,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        customerID: string,
        email: string,
        totalItems: number,
        subtotal: number,
        tax: number,
        total: number,
        orderItems?:  {
          __typename: "ModelOrderItemConnection",
          items:  Array< {
            __typename: "OrderItem",
            id: string,
            orderID: string,
            menuItemID: string,
            title: string,
            image: string,
            description: string,
            price: number,
            quantity: number,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    customerID: string,
    email: string,
    totalItems: number,
    subtotal: number,
    tax: number,
    total: number,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        orderID: string,
        menuItemID: string,
        title: string,
        image: string,
        description: string,
        price: number,
        quantity: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    customerID: string,
    email: string,
    totalItems: number,
    subtotal: number,
    tax: number,
    total: number,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        orderID: string,
        menuItemID: string,
        title: string,
        image: string,
        description: string,
        price: number,
        quantity: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    customerID: string,
    email: string,
    totalItems: number,
    subtotal: number,
    tax: number,
    total: number,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        orderID: string,
        menuItemID: string,
        title: string,
        image: string,
        description: string,
        price: number,
        quantity: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateOrderItemMutationVariables = {
  input: CreateOrderItemInput,
  condition?: ModelOrderItemConditionInput | null,
};

export type CreateOrderItemMutation = {
  createOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    orderID: string,
    menuItemID: string,
    title: string,
    image: string,
    description: string,
    price: number,
    quantity: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateOrderItemMutationVariables = {
  input: UpdateOrderItemInput,
  condition?: ModelOrderItemConditionInput | null,
};

export type UpdateOrderItemMutation = {
  updateOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    orderID: string,
    menuItemID: string,
    title: string,
    image: string,
    description: string,
    price: number,
    quantity: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteOrderItemMutationVariables = {
  input: DeleteOrderItemInput,
  condition?: ModelOrderItemConditionInput | null,
};

export type DeleteOrderItemMutation = {
  deleteOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    orderID: string,
    menuItemID: string,
    title: string,
    image: string,
    description: string,
    price: number,
    quantity: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetMenuQueryVariables = {
  id: string,
};

export type GetMenuQuery = {
  getMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    menuCategories?:  {
      __typename: "ModelMenuCategoryConnection",
      items:  Array< {
        __typename: "MenuCategory",
        id: string,
        menuID: string,
        name: string,
        menuItems?:  {
          __typename: "ModelMenuItemConnection",
          items:  Array< {
            __typename: "MenuItem",
            id: string,
            menuCategoryID: string,
            title: string,
            image: string,
            description: string,
            price: number,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMenusQueryVariables = {
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenusQuery = {
  listMenus?:  {
    __typename: "ModelMenuConnection",
    items:  Array< {
      __typename: "Menu",
      id: string,
      name: string,
      menuCategories?:  {
        __typename: "ModelMenuCategoryConnection",
        items:  Array< {
          __typename: "MenuCategory",
          id: string,
          menuID: string,
          name: string,
          menuItems?:  {
            __typename: "ModelMenuItemConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMenuCategoryQueryVariables = {
  id: string,
};

export type GetMenuCategoryQuery = {
  getMenuCategory?:  {
    __typename: "MenuCategory",
    id: string,
    menuID: string,
    name: string,
    menuItems?:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        menuCategoryID: string,
        title: string,
        image: string,
        description: string,
        price: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMenuCategoriesQueryVariables = {
  filter?: ModelMenuCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenuCategoriesQuery = {
  listMenuCategories?:  {
    __typename: "ModelMenuCategoryConnection",
    items:  Array< {
      __typename: "MenuCategory",
      id: string,
      menuID: string,
      name: string,
      menuItems?:  {
        __typename: "ModelMenuItemConnection",
        items:  Array< {
          __typename: "MenuItem",
          id: string,
          menuCategoryID: string,
          title: string,
          image: string,
          description: string,
          price: number,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMenuItemQueryVariables = {
  id: string,
};

export type GetMenuItemQuery = {
  getMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    menuCategoryID: string,
    title: string,
    image: string,
    description: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMenuItemsQueryVariables = {
  filter?: ModelMenuItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenuItemsQuery = {
  listMenuItems?:  {
    __typename: "ModelMenuItemConnection",
    items:  Array< {
      __typename: "MenuItem",
      id: string,
      menuCategoryID: string,
      title: string,
      image: string,
      description: string,
      price: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        customerID: string,
        email: string,
        totalItems: number,
        subtotal: number,
        tax: number,
        total: number,
        orderItems?:  {
          __typename: "ModelOrderItemConnection",
          items:  Array< {
            __typename: "OrderItem",
            id: string,
            orderID: string,
            menuItemID: string,
            title: string,
            image: string,
            description: string,
            price: number,
            quantity: number,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        items:  Array< {
          __typename: "Order",
          id: string,
          customerID: string,
          email: string,
          totalItems: number,
          subtotal: number,
          tax: number,
          total: number,
          orderItems?:  {
            __typename: "ModelOrderItemConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    customerID: string,
    email: string,
    totalItems: number,
    subtotal: number,
    tax: number,
    total: number,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        orderID: string,
        menuItemID: string,
        title: string,
        image: string,
        description: string,
        price: number,
        quantity: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      customerID: string,
      email: string,
      totalItems: number,
      subtotal: number,
      tax: number,
      total: number,
      orderItems?:  {
        __typename: "ModelOrderItemConnection",
        items:  Array< {
          __typename: "OrderItem",
          id: string,
          orderID: string,
          menuItemID: string,
          title: string,
          image: string,
          description: string,
          price: number,
          quantity: number,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderItemQueryVariables = {
  id: string,
};

export type GetOrderItemQuery = {
  getOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    orderID: string,
    menuItemID: string,
    title: string,
    image: string,
    description: string,
    price: number,
    quantity: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListOrderItemsQueryVariables = {
  filter?: ModelOrderItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderItemsQuery = {
  listOrderItems?:  {
    __typename: "ModelOrderItemConnection",
    items:  Array< {
      __typename: "OrderItem",
      id: string,
      orderID: string,
      menuItemID: string,
      title: string,
      image: string,
      description: string,
      price: number,
      quantity: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMenuSubscription = {
  onCreateMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    menuCategories?:  {
      __typename: "ModelMenuCategoryConnection",
      items:  Array< {
        __typename: "MenuCategory",
        id: string,
        menuID: string,
        name: string,
        menuItems?:  {
          __typename: "ModelMenuItemConnection",
          items:  Array< {
            __typename: "MenuItem",
            id: string,
            menuCategoryID: string,
            title: string,
            image: string,
            description: string,
            price: number,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMenuSubscription = {
  onUpdateMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    menuCategories?:  {
      __typename: "ModelMenuCategoryConnection",
      items:  Array< {
        __typename: "MenuCategory",
        id: string,
        menuID: string,
        name: string,
        menuItems?:  {
          __typename: "ModelMenuItemConnection",
          items:  Array< {
            __typename: "MenuItem",
            id: string,
            menuCategoryID: string,
            title: string,
            image: string,
            description: string,
            price: number,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMenuSubscription = {
  onDeleteMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    menuCategories?:  {
      __typename: "ModelMenuCategoryConnection",
      items:  Array< {
        __typename: "MenuCategory",
        id: string,
        menuID: string,
        name: string,
        menuItems?:  {
          __typename: "ModelMenuItemConnection",
          items:  Array< {
            __typename: "MenuItem",
            id: string,
            menuCategoryID: string,
            title: string,
            image: string,
            description: string,
            price: number,
            createdAt: string,
            updatedAt: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMenuCategorySubscription = {
  onCreateMenuCategory?:  {
    __typename: "MenuCategory",
    id: string,
    menuID: string,
    name: string,
    menuItems?:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        menuCategoryID: string,
        title: string,
        image: string,
        description: string,
        price: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMenuCategorySubscription = {
  onUpdateMenuCategory?:  {
    __typename: "MenuCategory",
    id: string,
    menuID: string,
    name: string,
    menuItems?:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        menuCategoryID: string,
        title: string,
        image: string,
        description: string,
        price: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMenuCategorySubscription = {
  onDeleteMenuCategory?:  {
    __typename: "MenuCategory",
    id: string,
    menuID: string,
    name: string,
    menuItems?:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        menuCategoryID: string,
        title: string,
        image: string,
        description: string,
        price: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMenuItemSubscription = {
  onCreateMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    menuCategoryID: string,
    title: string,
    image: string,
    description: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMenuItemSubscription = {
  onUpdateMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    menuCategoryID: string,
    title: string,
    image: string,
    description: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMenuItemSubscription = {
  onDeleteMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    menuCategoryID: string,
    title: string,
    image: string,
    description: string,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        customerID: string,
        email: string,
        totalItems: number,
        subtotal: number,
        tax: number,
        total: number,
        orderItems?:  {
          __typename: "ModelOrderItemConnection",
          items:  Array< {
            __typename: "OrderItem",
            id: string,
            orderID: string,
            menuItemID: string,
            title: string,
            image: string,
            description: string,
            price: number,
            quantity: number,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        customerID: string,
        email: string,
        totalItems: number,
        subtotal: number,
        tax: number,
        total: number,
        orderItems?:  {
          __typename: "ModelOrderItemConnection",
          items:  Array< {
            __typename: "OrderItem",
            id: string,
            orderID: string,
            menuItemID: string,
            title: string,
            image: string,
            description: string,
            price: number,
            quantity: number,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items:  Array< {
        __typename: "Order",
        id: string,
        customerID: string,
        email: string,
        totalItems: number,
        subtotal: number,
        tax: number,
        total: number,
        orderItems?:  {
          __typename: "ModelOrderItemConnection",
          items:  Array< {
            __typename: "OrderItem",
            id: string,
            orderID: string,
            menuItemID: string,
            title: string,
            image: string,
            description: string,
            price: number,
            quantity: number,
            createdAt: string,
            updatedAt: string,
            owner?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    customerID: string,
    email: string,
    totalItems: number,
    subtotal: number,
    tax: number,
    total: number,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        orderID: string,
        menuItemID: string,
        title: string,
        image: string,
        description: string,
        price: number,
        quantity: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    customerID: string,
    email: string,
    totalItems: number,
    subtotal: number,
    tax: number,
    total: number,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        orderID: string,
        menuItemID: string,
        title: string,
        image: string,
        description: string,
        price: number,
        quantity: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    customerID: string,
    email: string,
    totalItems: number,
    subtotal: number,
    tax: number,
    total: number,
    orderItems?:  {
      __typename: "ModelOrderItemConnection",
      items:  Array< {
        __typename: "OrderItem",
        id: string,
        orderID: string,
        menuItemID: string,
        title: string,
        image: string,
        description: string,
        price: number,
        quantity: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateOrderItemSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateOrderItemSubscription = {
  onCreateOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    orderID: string,
    menuItemID: string,
    title: string,
    image: string,
    description: string,
    price: number,
    quantity: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateOrderItemSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateOrderItemSubscription = {
  onUpdateOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    orderID: string,
    menuItemID: string,
    title: string,
    image: string,
    description: string,
    price: number,
    quantity: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteOrderItemSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteOrderItemSubscription = {
  onDeleteOrderItem?:  {
    __typename: "OrderItem",
    id: string,
    orderID: string,
    menuItemID: string,
    title: string,
    image: string,
    description: string,
    price: number,
    quantity: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

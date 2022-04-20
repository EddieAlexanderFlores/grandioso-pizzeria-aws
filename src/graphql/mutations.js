/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMenu = /* GraphQL */ `
  mutation CreateMenu(
    $input: CreateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    createMenu(input: $input, condition: $condition) {
      id
      name
      categories {
        items {
          id
          name
          createdAt
          updatedAt
          menuCategoriesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateMenu = /* GraphQL */ `
  mutation UpdateMenu(
    $input: UpdateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    updateMenu(input: $input, condition: $condition) {
      id
      name
      categories {
        items {
          id
          name
          createdAt
          updatedAt
          menuCategoriesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteMenu = /* GraphQL */ `
  mutation DeleteMenu(
    $input: DeleteMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    deleteMenu(input: $input, condition: $condition) {
      id
      name
      categories {
        items {
          id
          name
          createdAt
          updatedAt
          menuCategoriesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      menu {
        id
        name
        categories {
          nextToken
        }
        createdAt
        updatedAt
      }
      items {
        items {
          id
          title
          description
          image
          price
          createdAt
          updatedAt
          categoryItemsId
        }
        nextToken
      }
      createdAt
      updatedAt
      menuCategoriesId
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      menu {
        id
        name
        categories {
          nextToken
        }
        createdAt
        updatedAt
      }
      items {
        items {
          id
          title
          description
          image
          price
          createdAt
          updatedAt
          categoryItemsId
        }
        nextToken
      }
      createdAt
      updatedAt
      menuCategoriesId
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      menu {
        id
        name
        categories {
          nextToken
        }
        createdAt
        updatedAt
      }
      items {
        items {
          id
          title
          description
          image
          price
          createdAt
          updatedAt
          categoryItemsId
        }
        nextToken
      }
      createdAt
      updatedAt
      menuCategoriesId
    }
  }
`;
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      title
      description
      image
      price
      category {
        id
        name
        menu {
          id
          name
          createdAt
          updatedAt
        }
        items {
          nextToken
        }
        createdAt
        updatedAt
        menuCategoriesId
      }
      createdAt
      updatedAt
      categoryItemsId
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      title
      description
      image
      price
      category {
        id
        name
        menu {
          id
          name
          createdAt
          updatedAt
        }
        items {
          nextToken
        }
        createdAt
        updatedAt
        menuCategoriesId
      }
      createdAt
      updatedAt
      categoryItemsId
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      title
      description
      image
      price
      category {
        id
        name
        menu {
          id
          name
          createdAt
          updatedAt
        }
        items {
          nextToken
        }
        createdAt
        updatedAt
        menuCategoriesId
      }
      createdAt
      updatedAt
      categoryItemsId
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      orders {
        items {
          id
          totalItems
          subtotal
          tax
          total
          createdAt
          updatedAt
          customerOrdersId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      orders {
        items {
          id
          totalItems
          subtotal
          tax
          total
          createdAt
          updatedAt
          customerOrdersId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      orders {
        items {
          id
          totalItems
          subtotal
          tax
          total
          createdAt
          updatedAt
          customerOrdersId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      items {
        items {
          id
          title
          description
          image
          price
          quantity
          totalPrice
          createdAt
          updatedAt
          orderItemsId
          owner
        }
        nextToken
      }
      totalItems
      subtotal
      tax
      total
      customer {
        id
        firstName
        lastName
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      customerOrdersId
      owner
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      items {
        items {
          id
          title
          description
          image
          price
          quantity
          totalPrice
          createdAt
          updatedAt
          orderItemsId
          owner
        }
        nextToken
      }
      totalItems
      subtotal
      tax
      total
      customer {
        id
        firstName
        lastName
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      customerOrdersId
      owner
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      items {
        items {
          id
          title
          description
          image
          price
          quantity
          totalPrice
          createdAt
          updatedAt
          orderItemsId
          owner
        }
        nextToken
      }
      totalItems
      subtotal
      tax
      total
      customer {
        id
        firstName
        lastName
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      customerOrdersId
      owner
    }
  }
`;
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
      id
      title
      description
      image
      price
      quantity
      totalPrice
      order {
        id
        items {
          nextToken
        }
        totalItems
        subtotal
        tax
        total
        customer {
          id
          firstName
          lastName
          email
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        customerOrdersId
        owner
      }
      createdAt
      updatedAt
      orderItemsId
      owner
    }
  }
`;
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
      id
      title
      description
      image
      price
      quantity
      totalPrice
      order {
        id
        items {
          nextToken
        }
        totalItems
        subtotal
        tax
        total
        customer {
          id
          firstName
          lastName
          email
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        customerOrdersId
        owner
      }
      createdAt
      updatedAt
      orderItemsId
      owner
    }
  }
`;
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
      id
      title
      description
      image
      price
      quantity
      totalPrice
      order {
        id
        items {
          nextToken
        }
        totalItems
        subtotal
        tax
        total
        customer {
          id
          firstName
          lastName
          email
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        customerOrdersId
        owner
      }
      createdAt
      updatedAt
      orderItemsId
      owner
    }
  }
`;

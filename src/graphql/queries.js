/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMenu = /* GraphQL */ `
  query GetMenu($id: ID!) {
    getMenu(id: $id) {
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
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        categories {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
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
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        price
        category {
          id
          name
          createdAt
          updatedAt
          menuCategoriesId
        }
        createdAt
        updatedAt
        categoryItemsId
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
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
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        price
        quantity
        totalPrice
        order {
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
        createdAt
        updatedAt
        orderItemsId
        owner
      }
      nextToken
    }
  }
`;

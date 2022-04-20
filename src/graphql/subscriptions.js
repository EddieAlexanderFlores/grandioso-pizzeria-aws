/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMenu = /* GraphQL */ `
  subscription OnCreateMenu {
    onCreateMenu {
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
export const onUpdateMenu = /* GraphQL */ `
  subscription OnUpdateMenu {
    onUpdateMenu {
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
export const onDeleteMenu = /* GraphQL */ `
  subscription OnDeleteMenu {
    onDeleteMenu {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($owner: String) {
    onCreateCustomer(owner: $owner) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($owner: String) {
    onUpdateCustomer(owner: $owner) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($owner: String) {
    onDeleteCustomer(owner: $owner) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($owner: String) {
    onCreateOrder(owner: $owner) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String) {
    onUpdateOrder(owner: $owner) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String) {
    onDeleteOrder(owner: $owner) {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem($owner: String) {
    onCreateOrderItem(owner: $owner) {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem($owner: String) {
    onUpdateOrderItem(owner: $owner) {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem($owner: String) {
    onDeleteOrderItem(owner: $owner) {
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

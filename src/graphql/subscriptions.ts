/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMenu = /* GraphQL */ `
  subscription OnCreateMenu {
    onCreateMenu {
      id
      name
      menuCategories {
        items {
          id
          menuID
          name
          menuItems {
            items {
              id
              menuCategoryID
              title
              image
              description
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
      menuCategories {
        items {
          id
          menuID
          name
          menuItems {
            items {
              id
              menuCategoryID
              title
              image
              description
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
      menuCategories {
        items {
          id
          menuID
          name
          menuItems {
            items {
              id
              menuCategoryID
              title
              image
              description
              price
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMenuCategory = /* GraphQL */ `
  subscription OnCreateMenuCategory {
    onCreateMenuCategory {
      id
      menuID
      name
      menuItems {
        items {
          id
          menuCategoryID
          title
          image
          description
          price
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMenuCategory = /* GraphQL */ `
  subscription OnUpdateMenuCategory {
    onUpdateMenuCategory {
      id
      menuID
      name
      menuItems {
        items {
          id
          menuCategoryID
          title
          image
          description
          price
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMenuCategory = /* GraphQL */ `
  subscription OnDeleteMenuCategory {
    onDeleteMenuCategory {
      id
      menuID
      name
      menuItems {
        items {
          id
          menuCategoryID
          title
          image
          description
          price
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMenuItem = /* GraphQL */ `
  subscription OnCreateMenuItem {
    onCreateMenuItem {
      id
      menuCategoryID
      title
      image
      description
      price
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMenuItem = /* GraphQL */ `
  subscription OnUpdateMenuItem {
    onUpdateMenuItem {
      id
      menuCategoryID
      title
      image
      description
      price
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMenuItem = /* GraphQL */ `
  subscription OnDeleteMenuItem {
    onDeleteMenuItem {
      id
      menuCategoryID
      title
      image
      description
      price
      createdAt
      updatedAt
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
          customerID
          email
          totalItems
          subtotal
          tax
          total
          orderItems {
            items {
              id
              orderID
              menuItemID
              title
              image
              description
              price
              quantity
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
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
          customerID
          email
          totalItems
          subtotal
          tax
          total
          orderItems {
            items {
              id
              orderID
              menuItemID
              title
              image
              description
              price
              quantity
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
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
          customerID
          email
          totalItems
          subtotal
          tax
          total
          orderItems {
            items {
              id
              orderID
              menuItemID
              title
              image
              description
              price
              quantity
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          createdAt
          updatedAt
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
      customerID
      email
      totalItems
      subtotal
      tax
      total
      orderItems {
        items {
          id
          orderID
          menuItemID
          title
          image
          description
          price
          quantity
          createdAt
          updatedAt
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String) {
    onUpdateOrder(owner: $owner) {
      id
      customerID
      email
      totalItems
      subtotal
      tax
      total
      orderItems {
        items {
          id
          orderID
          menuItemID
          title
          image
          description
          price
          quantity
          createdAt
          updatedAt
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String) {
    onDeleteOrder(owner: $owner) {
      id
      customerID
      email
      totalItems
      subtotal
      tax
      total
      orderItems {
        items {
          id
          orderID
          menuItemID
          title
          image
          description
          price
          quantity
          createdAt
          updatedAt
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem($owner: String) {
    onCreateOrderItem(owner: $owner) {
      id
      orderID
      menuItemID
      title
      image
      description
      price
      quantity
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem($owner: String) {
    onUpdateOrderItem(owner: $owner) {
      id
      orderID
      menuItemID
      title
      image
      description
      price
      quantity
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem($owner: String) {
    onDeleteOrderItem(owner: $owner) {
      id
      orderID
      menuItemID
      title
      image
      description
      price
      quantity
      createdAt
      updatedAt
      owner
    }
  }
`;

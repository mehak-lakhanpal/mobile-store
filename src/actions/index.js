export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const SEARCH = 'SEARCH';
export const FETCH_PRODUCT_BY_ID = 'FETCH_PRODUCT_BY_ID';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';

export function fetchProductsSuccess(products) {
    const action = {
        type: FETCH_PRODUCTS_SUCCESS,
        products
      };
      return action;
}

export function fetchProductsError(error) {
    const action = {
        type: FETCH_PRODUCTS_ERROR,
        error
      };
      return action;
}

export function search(value) {
    const action = {
        type: SEARCH,
        value
      };
      return action;
  }

export function fetchProductByProductId(product) {
    const action = {
        type: FETCH_PRODUCT_BY_ID,
        product
      };
      return action;
  }

export const addToCart = (product) => {
 
    return {
        type: 'ADD_TO_CART',
        payload: {
            product,
            quantity: 1
        }
    }
};
 
export const removeFromCart = (id) => {
 
    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            id
        }
    }
};
 
export const updateCartQuantity = (id,quantity) => {
 
  return {
      type: 'UPDATE_CART_QUANTITY',
      payload: {
          id,
          quantity
      }
  }
};
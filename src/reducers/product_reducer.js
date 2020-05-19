import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, SEARCH, FETCH_PRODUCT_BY_ID } from '../actions';

const initialState = {
    products: [],
    error: null,
    product:{},
    filterProducts: []
}

export function products(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.products,
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                error: action.error
            }
        case SEARCH: {
            state.filterProducts=state.products;
            const filterProducts =  state.filterProducts.filter(val => val.name.includes(action.value));
            return { ...state, filterProducts:filterProducts };
        }
        case FETCH_PRODUCT_BY_ID: {
            return { ...state, 
                product: action.product[0]
            };
        }
        default:
            return state;
    }
}

export default products;


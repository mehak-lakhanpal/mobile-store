import { fetchProductsSuccess, fetchProductsError, fetchProductByProductId } from '../actions/index';

export function fetchProducts() {
    return dispatch => {
        fetch('http://localhost:3333/products')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchProductsSuccess(res));
            })
            .catch(error => {
                dispatch(fetchProductsError(error));
            })
    }
}

export function fetchProductById(id) {
    return dispatch => {
        fetch(`http://localhost:3333/products?id=${id}`)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchProductByProductId(res));
            })
            .catch(error => {
                dispatch(fetchProductsError(error));
            })
    }
}


export default { fetchProducts, fetchProductById };
import { combineReducers } from "redux";
import products from  "../reducers/product_reducer";
import cart from  "../reducers/cart_reduce"

const rootReducer = combineReducers({
   products,cart
  });
  
  export default rootReducer;
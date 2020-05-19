import React ,{useContext} from 'react';
import './Cart.css';
import { Table } from 'react-bootstrap';
import CartItem from './CartItem';
import { useSelector,useDispatch } from "react-redux";
import * as uuid from "uuid";
import { removeFromCart } from '../actions';
import { AuthContext } from '../contexts/AuthContext'

const Cart = () => {
    const { auth } = useContext(AuthContext);
    const cart = useSelector(state => state.cart.cart);
    let total = 0;
    total = cart.map(item => total += item.product.price * item.quantity);

    const dispatch = useDispatch();

    const placeOrder = () => {
        // dispatch(removeFromCart(productId));
        console.log(auth)
    }

    return (
        <div className="container">
            {cart.length > 0 ?
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Device</th>
                                <th>Model</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => {
                                return (
                                    <CartItem item={item} key={uuid.v1()}></CartItem>
                                )
                            })}
                        </tbody>
                    </Table>

                    <div className="pull-right">
                    <h3 >
                        Total:  Rs. {total}
                    </h3>
                        <div className="btn-group">
                            <button className="btn btn-primary" onClick={placeOrder}>
                               Place Order
                            </button>
                        </div>
                    </div>
                </div>
                :
                <h1>Your cart is empty!</h1>
            }
        </div>
    );

}
export default Cart;

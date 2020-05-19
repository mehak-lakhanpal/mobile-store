import React, { useState } from 'react';
import './Cart.css';
import { Button } from 'react-bootstrap';
import { updateCartQuantity, removeFromCart } from '../actions';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
    const [quantity, setQuantity] = useState(props.item.quantity);
    // const [uniqueId] = useState(props.key);
    const [product] = useState(props.item.product);

    const dispatch = useDispatch();

    const increaseQuantity = () => {
        console.log(props)
        setQuantity(quantity + 1)
        dispatch(updateCartQuantity(product.id, quantity + 1));
    }

    const decreaseQuantity = () => {
        if (quantity === 1) {
            dispatch(removeFromCart(product.id));
        } else {
            setQuantity(quantity - 1)
            dispatch(updateCartQuantity(product.id, quantity - 1));
        }
    }
    const removeItemFromCart = () => {
        dispatch(removeFromCart(product.id));
    }


    return (
        <tr>
            <td>{}</td>
            <td>{product.name}</td>
            <td>{product.model}</td>
            <td>
                <Button variant="light" onClick={decreaseQuantity}>- </Button>
                {quantity}
                <Button variant="light" onClick={increaseQuantity}> +</Button>
            </td>
            <td>{product.price}</td>
            <td><Button variant="danger" onClick={removeItemFromCart}>Remove</Button></td>
        </tr>
    );

}


export default CartItem;

import React, { useContext } from 'react';
import './cart.css';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContextProvider';

const CartWidget = () => {

    const { cartList } = useContext(CartContext)

    return (
        <NavLink className="cart btn-small" id="cartwidget" to={`/cart`}>
            <i className="material-icons" id="icon">shopping_cart</i>
            {cartList.length >= 1 &&
                <span className="new badge" id="span-counter" data-badge-caption="producto/s">{cartList.length}</span>
            }
        </NavLink>
    )
}

export default CartWidget   
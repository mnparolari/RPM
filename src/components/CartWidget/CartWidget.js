import React from 'react';
import './cartwidget.css';
import {NavLink} from 'react-router-dom'

const CartWidget = () => {
    return (
        <button className="cart btn-small">
            <NavLink to={`/cart`} className="icon" href="#">
                <i className="material-icons">shopping_cart</i>
                
            </NavLink>
            <span className="new badge" data-badge-caption="producto">1</span>
        </button>
    )
}

export default CartWidget   
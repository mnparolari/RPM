import React from 'react';
import './cartwidget.css';

const CartWidget = () => {
    return (
        <button className="cart btn-small">
            <a className="icon" href="#">
                <i className="material-icons">shopping_cart</i>
                
            </a>
            <span className="new badge" data-badge-caption="producto">1</span>
        </button>
    )
}

export default CartWidget   
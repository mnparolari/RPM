import React from 'react';
import './cartwidget.css';
import {useNavigate, NavLink} from 'react-router-dom';

const CartWidget = () => {

    const navigate = useNavigate()

    return (
        <button className="cart btn-small" onClick={() => navigate(`/cart`)}>
            <NavLink to={`/cart`} className="icon" href="#">
                <i className="material-icons">shopping_cart</i>
            </NavLink>
            <span className="new badge" data-badge-caption="producto" onClick={() => navigate(`/cart`)}>1</span>
        </button>
    )
}

export default CartWidget   
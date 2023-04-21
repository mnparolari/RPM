import React from 'react'

const CartWidget = () => {
    return (
        <li>
            <a className="carrito" href="#">
                <i className="material-icons">add_shopping_cart</i>
            </a>
            <span className="new badge">2</span>
        </li>
    )
}

export default CartWidget   
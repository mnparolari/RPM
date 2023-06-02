import React from 'react';
import './cart.css';
import { Link } from 'react-router-dom';


const CartItem = (props) => {

    const { deleteQuantity, deleteItem, id, title, band, price, pictureUrl, quantity } = props;

    return (
        <div className="card mb-2" id="card-cart">
            <div className="row g-0" id="card-row-cart">
                <div className="col-md-4">
                    <img src={pictureUrl} className="img-fluid rounded-start" alt={title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text"><span>TÍTULO: </span>{title.toUpperCase()}</p>
                        <p className="card-text"><span>BANDA: </span>{band.toUpperCase()}</p>
                        <p className="card-text"><span>PRECIO: </span>${price.toLocaleString()}</p>
                        <p className="card-text"><span>CANTIDAD: </span>{quantity}</p>
                    </div>
                    <Link onClick={() => deleteQuantity(id)} className="waves-effect waves-light btn-small" id="btn-delete">Eliminar Cantidad<i className="large material-icons">clear</i></Link>
                    <Link onClick={() => deleteItem(id)} className="waves-effect waves-light btn-small" id="btn-delete">Eliminar producto<i className="large material-icons">clear</i></Link>
                </div>
            </div>
        </div>
    )
}

export default CartItem
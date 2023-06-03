import React, { useContext } from 'react';
import './itemDetailStyle.css';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContextProvider';

const ItemDetail = ({ prod }) => {

    const { title, band, detail, description, price, pictureUrl, stock } = prod;

    const { cartList, addToCart, isInCart } = useContext(CartContext);

    return (
        <div className="detail-section">
            <div className="detail-product">
                <div className="detail-imageBox">
                    <div className="back-icon">
                        <Link to={-1} className="waves-effect waves-light btn-small" id="btn-back"><i className="material-icons" id="icon-back">keyboard_return</i>Volver</Link>
                    </div>
                    <img className="detail-img" src={pictureUrl} alt={title} />
                </div>
                <div className="detail-textBox">
                    <h4 className="detail-title">{title.toUpperCase()} - {band.toUpperCase()}</h4>
                    <h5 className="detail-price">${price.toLocaleString()}</h5>
                    <h6>Detalles: <br /></h6>
                    <p className="detail-detail">{detail}</p>
                    <ItemCount initial={1} stock={stock} addToCart={addToCart} prod={prod} isInCart={isInCart} />
                    {cartList.length > 0 &&
                        <div>
                            <hr />
                            <Link to={`/cart`} className="waves-effect waves-light btn-small" id="btn-finish"><p>Finalizar compra<i className="large material-icons">check</i></p></Link>
                            <p style={{ fontWeight: "bold" }}><small>¡TENES {cartList.length} PRODUCTO/S ESPERANDOTE!</small></p>
                        </div>
                    }
                </div>
            </div>
            <div className="detail-descriptionBox">
                <h5 className="detail-descriptionTitle">Descripción: <br /></h5>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ItemDetail

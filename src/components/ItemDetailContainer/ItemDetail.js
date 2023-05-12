import React from 'react';
import './itemDetailStyle.css';
import ItemCount from './ItemCount'

const ItemDetail = (props) => {
    const { title, band, detail, description, price, pictureUrl, stock } = props;

    return (
        <section className="detail-section">
            <div className="detail-product">
                <div className="detail-imageBox">
                    <img className="detail-img" src={pictureUrl} alt={title} />
                </div>
                <div className="detail-text">
                    <h4 className="detail-title">{title} - {band}</h4>
                    <h5 className="detail-price">${price}</h5>
                    <h6>Detalles: <br/></h6>
                    <p className="detail-detail">{detail}</p>
                    <ItemCount initial={0} stock={stock} />
                </div>
            </div>
            <div className="detail-descriptionBox">
                <h5 className="detail-descriptionTitle">Descripción: <br/></h5>
                <p>{description}</p>
            </div>
        </section>
    )
}

export default ItemDetail

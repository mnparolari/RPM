import React from 'react';
import './itemListStyle.css';
import { useNavigate } from 'react-router-dom';


const Item = (props) => {

    const { id, title, band, price, pictureUrl, category, stock } = props;

    const navigate = useNavigate();

    return (
        <div className="card" id="card-prod">
            <img src={pictureUrl} className="c-img" alt={title} />
            <div className="c-body">
                <h5 className="c-title">{title.toUpperCase()}</h5>
                <h6 className="c-band">{band.toUpperCase()}</h6>
                <p className="c-text">${price.toLocaleString()}</p>
                <button className="btn" id="btn-detail" type="button" onClick={() => navigate(`/${category}/${id}`)}>Ver detalle del producto</button>
                <p className="c-stock"> STOCK DISPONIBLE {stock} </p>
            </div>
        </div>
    )
}

export default Item


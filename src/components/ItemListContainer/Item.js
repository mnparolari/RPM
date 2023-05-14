import React from 'react';
import './itemListStyle.css';
import { useNavigate } from 'react-router-dom';


const Item = (props) => {

    const { id, title, band, price, pictureUrl, categorie, stock } = props;

    const navigate = useNavigate()

    return (
        <div className="card">
            <img src={pictureUrl} className="c-img" alt={title} />
            <div className="c-body">
                <h5 className="c-title">{title}</h5>
                <h6 className="c-band">{band}</h6>
                <p className="c-text">${price}</p>
                <button className="btn" id="btn-detail" type="button" onClick={() => navigate(`/${categorie}/${id}`)}>Ver detalle del producto</button>
                <p className="c-stock">Stock disponible: {stock} </p>
            </div>
        </div>
    )
}

export default Item


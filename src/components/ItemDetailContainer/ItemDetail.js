import React, { useState } from 'react';
import './itemDetailStyle.css';
import ItemCount from './ItemCount';
import { Link, useNavigate } from 'react-router-dom';

const ItemDetail = ({ prod }) => {
    const { title, band, detail, description, price, pictureUrl, stock } = prod;

    const feesArray = [
        {
            "valor": 1,
            "cuotas": 3,
        },
        {
            "valor": 2,
            "cuotas": 6,
        },
        {
            "valor": 3,
            "cuotas": 12,
        }
    ]

    const navigate = useNavigate();

    const [valueToAdd, setValueToAdd] = useState(0)

    const handleOnAdd = (value) => {
        setValueToAdd(value)
    }

    return (
        <section className="detail-section">
            <div className="back-icon">
                <button className="back btn-small">
                    <Link to={-1} className="icon-back">
                        <i className="material-icons">arrow_back</i>
                        <p>Volver</p>
                    </Link>
                </button>
            </div>
            <div className="detail-product">
                <div className="detail-imageBox">
                    <img className="detail-img" src={pictureUrl} alt={title} />
                </div>
                <div className="detail-textBox">
                    <div className="detail-text">
                        <h4 className="detail-title">{title} - {band}</h4>
                        <h5 className="detail-price">${price}</h5>
                        <h6>Detalles: <br /></h6>
                        <p className="detail-detail">{detail}</p>
                        {valueToAdd > 0 ? (
                            <div>
                                <button onClick={() => navigate(`/cart`)} className="Optional waves-effect waves-light btn-small">Finalizar Compra</button>
                            </div>
                            ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                            )
                            
                        }
                    </div>
                    <div className="detail-credit">
                        <h6>Calculá tus cuotas:</h6>
                        <div className="detail-fees">
                            <select className="form-select form-select-sm" id="form-fees" aria-label=".form-select-sm example">
                                <option selected>Cuotas</option>
                                {feesArray.map(result => (
                                    <option value={result.valor}>{result.cuotas} cuotas</option>
                                ))}
                            </select>
                            <p className="fees"> </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail-descriptionBox">
                <h5 className="detail-descriptionTitle">Descripción: <br /></h5>
                <p>{description}</p>
            </div>
        </section>
    )
}

export default ItemDetail

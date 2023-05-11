import React from 'react';
import './filters.css';

const Filters = () => {
    return (
        <div className="filters">
            <div className="order">
                <p>Ordenar por:</p>
                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Más relevante</option>
                    <option value="1">Menor precio</option>
                    <option value="2">Mayor precio</option>
                    <option value="3">Más vendido</option>
                </select>
            </div>
            <div className="categories">
                <p className="categories-title">Categorias:</p>
                <select className="form-select" id="form-select-categories" size="5">
                    <option value="1">Rock</option>
                    <option value="2">Pop</option>
                    <option value="3">Reggae</option>
                    <option value="4">Jazz</option>
                    <option value="5">Clásica</option>
                    <option value="6">Otros</option>
                </select>
            </div>
            <div className="price">
                <p className="price-title">Precio:</p>
                <div className="row">
                    <div className="col">
                        <input type="number" className="form-control" placeholder="Precio mínimo" />
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" placeholder="Precio máximo" />
                    </div>
                </div>
            </div>
            <div>
                <p>Tipo:</p>
                <select className="form-select" id="form-select-type" multiple aria-label="multiple select example">
                    <option value="1">Nuevo</option>
                    <option value="2">Usado</option>
                </select>
            </div>
            <div className="filter-btn">
                <button className="btn" id="btn-filter" type="button">FILTRAR</button>
            </div>
            <hr />
        </div>
    )
}

export default Filters


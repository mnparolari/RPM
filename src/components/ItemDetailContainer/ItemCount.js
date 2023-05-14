import React from 'react';
import './itemDetailStyle.css';
import useCount from '../Hooks/useCount';
import {NavLink} from 'react-router-dom';

const ItemCount = (props) => {

    const {value, block, onAdd, onRemove, reset} = useCount(props)

    return (
        <div>
            <div className="item-count">
                <div className="btn-remove">
                    <NavLink onClick={onRemove} className="btn-floating btn-small waves-effect"><i className="material-icons">remove_circle</i></NavLink>
                </div>
                <div className="quantity-product">
                    <p className="value">Cantidad:{value}</p>
                </div>
                <div className="btn-add">
                    <NavLink disabled={block} onClick={onAdd} className="btn-floating btn-small waves-effect"><i className="material-icons">add_circle</i></NavLink>
                </div>
            </div>
            <div className="addCardWidget">
                    <NavLink onClick={reset} className="waves-effect waves-light btn-small"><i className="material-icons left">add_shopping_cart</i>AGREGAR</NavLink>
            </div>
        </div>
    )
}

export default ItemCount
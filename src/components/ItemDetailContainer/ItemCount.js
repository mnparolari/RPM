import React from 'react';
import './itemDetailStyle.css';
import useCount from '../Hooks/useCount'

const ItemCount = (props) => {

    const {value, block, onAdd, onRemove, reset} = useCount(props)

    return (
        <div>
            <div className="itemCount">
                <div className="btn-remove">
                    <a onClick={onRemove} className="btn-floating btn-small waves-effect"><i className="material-icons">remove_circle</i></a>
                </div>
                <div className="quantity-product">
                    <p className="value">Cantidad:{value}</p>
                </div>
                <div className="btn-add">
                    <a disabled={block} onClick={onAdd} className="btn-floating btn-small waves-effect"><i className="material-icons">add_circle</i></a>
                </div>
            </div>
            <div className="addCardWidget">
                    <a onClick={reset} className="waves-effect waves-light btn-small"><i className="material-icons left">add_shopping_cart</i>AGREGAR</a>
            </div>
        </div>
    )
}

export default ItemCount
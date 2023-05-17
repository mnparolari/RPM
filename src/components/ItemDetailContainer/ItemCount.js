import React from 'react';
import './itemDetailStyle.css';
import useCount from '../Hooks/useCount';

const ItemCount = (props) => {

    const { value, block, increment, decrement } = useCount(props);
    const { onAdd } = props;

    return (
        <div>
            <div className="item-count">
                <div className="btn-remove">
                    <button onClick={decrement} className="btn-floating btn-small waves-effect"><i className="material-icons">remove_circle</i></button>
                </div>
                <div className="quantity-product">
                    <p className="value">Cantidad:{value}</p>
                </div>
                <div className="btn-add">
                    <button disabled={block} onClick={increment} className="btn-floating btn-small waves-effect"><i className="material-icons">add_circle</i></button>
                </div>
            </div>
            <div className="addCardwidget">
                    <button onClick={() => onAdd(value)} className="waves-effect waves-light btn-small"><i className="material-icons left">add_shopping_cart</i>AGREGAR</button>
            </div>
        </div>
    )
}

export default ItemCount
/*onClick={reset}*/
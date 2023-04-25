import {useState} from 'react'

const ItemCount = (props) => {

    const {initial} = props;

    const [value, setValue] = useState(initial || 1);

    const onAdd = () => {
        setValue (value + 1);
    };

    const onRemove = () => {
        if (value > 1) {
            setValue(value - 1);
        };
    };

    const reset = () => {
        setValue(initial || 1)
    };

    return (
        <div>
            <div className="itemCount">
                <div>
                    <button onClick={onRemove}>
                        <a className="btn-floating btn-large waves-effect"><i className="material-icons">remove_circle</i></a>
                    </button>
                </div>
                <div>
                    <p>{initial}</p>
                </div>
                <div>
                    <button onClick={onAdd}>
                        <a className="btn-floating btn-large waves-effect"><i className="material-icons">add_circle</i></a>
                    </button>
                </div>
            </div>
            <div className="addCardWidget">
                <button onClick={reset}>
                    <a className="waves-effect waves-light btn"><i className="material-icons left">add_shopping_cart</i>Agregar al carrito</a>
                </button>
            </div>
        </div>
    )
}

export default ItemCount
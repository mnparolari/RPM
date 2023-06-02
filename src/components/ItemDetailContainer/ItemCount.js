import React from 'react';
import './itemDetailStyle.css';
import useCount from '../Hooks/useCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = (props) => {

    const { quantity, block, increment, decrement } = useCount(props);
    const { addToCart, prod } = props;
    const { id, title, band, price, pictureUrl } = prod;

    const arrayAddCart = () => {
        addToCart({ id, title, band, price, pictureUrl, quantity })
    };

    const toastify = () => {
        toast.success('Agregando producto/s...', {
            position: "bottom-left",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
        });
    };

    const onClickHandler = () => {
        arrayAddCart();
        toastify();
    };

    return (
        <div>
            <div className="item-count">
                <div className="btn-remove">
                    <button onClick={decrement} className="btn-floating btn-small waves-effect" id="btn-remove-add"><i className="material-icons">remove_circle</i></button>
                </div>
                <div className="quantity-product">
                    <p className="quantity">CANTIDAD:{quantity}</p>
                </div>
                <div className="btn-add">
                    <button disabled={block} onClick={increment} className="btn-floating btn-small waves-effect" id="btn-remove-add"><i className="material-icons">add_circle</i></button>
                </div>
            </div>
            <div className="addCardwidget">
                <button onClick={onClickHandler} className="waves-effect waves-light btn-small" id="btn-add"><i className="material-icons left">add_shopping_cart</i>AGREGAR</button>
                <ToastContainer position="bottom-left"
                    autoClose={1500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    toastStyle={{ backgroundColor: "#000", color: "#DED7B3ff" }}
                />
            </div>
        </div>
    )
}

export default ItemCount
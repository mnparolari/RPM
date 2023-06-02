import React, { useContext, useState } from 'react'
import './cart.css';
import { CartContext } from '../../context/CartContextProvider';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import Payment from '../Payment/Payment';
import useFirebase from '../Hooks/useFirebase';
import Spinner from '../Spinner/Spinner';


const Cart = (props) => {

  const { cartList, removeList, deleteItem, deleteQuantity } = useContext(CartContext);

  const { loading, postData, orderNumber } = useFirebase(props);

  const totalAmount = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [pay, setPay] = useState(false);
  const goToPay = () => {
    setPay(true)
  };


  return (
    <div className="cart-section">
      <div className="spinner">
        {loading && <Spinner />}
      </div>
      {!loading &&
        <>
          <h5 style={{ textAlign: "center", fontWeight: "bolder" }}>PRODUCTOS SELECCIONADOS:</h5>
          <div className="products-cart">
            <div className="cart-item">
              {cartList.length === 0 ? (
                <div>
                  <h6 style={{ fontWeight: "bold", textDecoration: "underline", paddingTop: "30px", color: "#e2382f", textAlign: "center" }}><i className="large material-icons" style={{ marginBottom: "15px" }}>cancel</i> <br /> NO TENES PRODUCTOS EN EL CARRITO</h6>
                </div>
              ) : (
                cartList.map(item => (
                  <CartItem deleteItem={deleteItem} deleteQuantity={deleteQuantity} id={item.id} title={item.title} band={item.band} price={item.price} pictureUrl={item.pictureUrl} quantity={item.quantity} key={item.id} />
                )))}
            </div>
          </div>
          {cartList.length > 0 &&
            <div>
              <h6 style={{ fontWeight: "bold", fontSize: "1.7rem" }}>TOTAL: ${totalAmount.toLocaleString()}</h6>
            </div>
          }
          <div className="cart-buttons">
            {cartList.length === 0 ? (
              <Link to={`/`} className="waves-effect waves-light btn-small" id="btn-continue"><i className="large material-icons">keyboard_return</i>Seguir mirando</Link>
            ) : (
              <>
                <Link to={`/`} className="waves-effect waves-light btn-small" id="btn-continue"><i className="large material-icons">keyboard_return</i>Seguir comprando</Link>
                <Link onClick={removeList} className="waves-effect waves-light btn-small" id="btn-delete-list"><i className="large material-icons">remove_shopping_cart</i>Eliminar todos los productos</Link>
                <Link onClick={goToPay} className="waves-effect waves-light btn-small" id="btn-pay"><i className="large material-icons">attach_money</i>Ir a Pagar</Link>
              </>
            )}
          </div>
          {pay && cartList.length > 0 &&
            <div className="payment-component">
              <Payment cartList={cartList} postData={postData} totalAmount={totalAmount} removeList={removeList} orderNumber={orderNumber} />
            </div>
          }
        </>
      }
    </div>

  )
}

export default Cart


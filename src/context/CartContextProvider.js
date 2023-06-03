import React, { createContext, useState } from 'react';
export const CartContext = createContext();


const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        if (!isInCart(item.id)) {
            setCartList([...cartList, item]);
        }
    };

    const isInCart = (itemId) => {
        return cartList.some(prod => prod.id === itemId)
    };

    const removeList = () => {
        setCartList([]);
    };

    const deleteItem = (itemId) => {
        const cartUpdated = cartList.filter(prod => prod.id !== itemId)
        setCartList(cartUpdated);
    };

    const deleteQuantity = (itemId) => {
        const quantityUpdated = cartList.map((item) => {
            if (item.id === itemId && item.quantity > 1) {
                return { ...item, "quantity": item.quantity - 1 }
            }
            return item;
        });
        setCartList(quantityUpdated);
    };

    return (
        <CartContext.Provider value={{ isInCart, cartList, addToCart, removeList, deleteItem, deleteQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
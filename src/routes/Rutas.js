import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Brand from '../components/Brand/Brand';
import Navbar from '../components/Navbar/Navbar';
import Cart from '../components/CartWidget/Cart';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import CartContextProvider from '../context/CartContextProvider';
import Footer from '../components/Footer/Footer';

const Rutas = () => {
    return (
        <BrowserRouter>
            <CartContextProvider>
                <Brand />
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/:category" element={<ItemListContainer />} />
                    <Route path="/:category/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<h1>404 NOT FOUND</h1>} />
                </Routes>
                <Footer />
            </CartContextProvider>
        </BrowserRouter>
    )
}

export default Rutas
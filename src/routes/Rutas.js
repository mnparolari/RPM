import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Brand from '../components/Brand/Brand';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Greeting';
import Cart from '../components/CartWidget/Cart';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Rutas = () => {
    return (
        <BrowserRouter>
            <Brand />
            <Navbar />
            <Home greeting={"Bienvenido/a. Estás en RPM, la casa del vinílo."} />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/:category" element={<ItemListContainer />} />
                <Route path="/:category/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas
//            <Navbar />
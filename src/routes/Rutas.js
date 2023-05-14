import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Brand from '../components/Brand/Brand';
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import Cart from '../components/CartWidget/Cart';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Rutas = () => {
    return (
        <BrowserRouter>
            <Brand />
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home greeting={"Bienvenido/a. Estás en RPM, la casa del vinílo."}/>} />
                <Route path="/:categorie" element={<ItemListContainer />} />
                <Route path="/:categorie/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas
//            <Navbar />
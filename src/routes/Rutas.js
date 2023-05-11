import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import CartWidget from '../components/CartWidget/CartWidget'
import Brand from '../components/Brand/Brand'
import Navbar from '../components/Navbar/Navbar'

const Rutas = () => {
    return (
        <BrowserRouter>
            <Brand/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="Bienvenido/a. Estás en RPM, la casa del vinílo."/>} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<CartWidget />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Brand from '../components/Brand/Brand'
//import Navbar from '../components/Navbar/Navbar'
import Home from '../pages/Home'
import Cart from '../components/CartWidget/Cart'
import Novedades from '../pages/Novedades'
import Clasicos from '../pages/Clasicos'

const Rutas = () => {
    return (
        <BrowserRouter>
            <Brand />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/novedades" element={<Novedades/>} />
                <Route path="/clasicos" element={<Clasicos/>} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas
//            <Navbar />
import React, { Fragment } from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Navbar from '../components/Navbar/Navbar'

const Novedades = () => {
    return (
        <Fragment>
            <Navbar/>
            <ItemListContainer greeting="Bienvenido/a. Estás en RPM, la casa del vinílo."/>
        </Fragment>
    )
}

export default Novedades
import React from 'react'
import 'animate.css';
import ItemCount from './ItemCount'


const ItemListContainer = (props) => {
    return (
        <div className="welcome">
            <h2 className="title animate__animated animate__zoomIn">{props.greeting}</h2>
            <ItemCount initial={1}/>
        </div>
    )
}

export default ItemListContainer
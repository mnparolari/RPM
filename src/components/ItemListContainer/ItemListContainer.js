import React from 'react'
import 'animate.css';

const ItemListContainer = (props) => {
    return (
        <div className="welcome">
            <h2 className="title animate__animated animate__zoomIn">{props.greeting}</h2>
        </div>
    )
}

export default ItemListContainer
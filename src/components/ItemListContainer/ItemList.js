import React from 'react';
import './itemListStyle.css';
import Item from './Item';


const ItemList = (props) => {

    const { product } = props;

    return (
        <div>
            <div className='item-list'>
                {product.map(item => (
                    <Item id={item.id} title={item.title} band={item.band} price={item.price} pictureUrl={item.pictureUrl} category={item.category} stock={item.stock} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default ItemList


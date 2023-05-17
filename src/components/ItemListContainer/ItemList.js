import React from 'react';
import './itemListStyle.css';
import Item from './Item';


const ItemList = (props) => {

    const { prod } = props;

    return (
        <div>
            <div className='item-list'>
                {prod.map(item => (
                    <Item id={item.id} title={item.title} band={item.band} price={item.price} pictureUrl={item.pictureUrl} category={item.category} stock={item.stock} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default ItemList


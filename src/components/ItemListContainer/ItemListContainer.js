import React from 'react';
import './itemListStyle.css';
import ItemList from './ItemList'
import Spinner from '../Spinner/Spinner';
import useFirebase from '../Hooks/useFirebase';


const ItemListContainer = (props) => {

    const { prod, loading } = useFirebase(props);

    return (
        <div className="body-section">
            <div className="spinner">
                {loading && <Spinner />}
            </div>
            {!loading &&
                <div className="section-select">
                    <ItemList product={prod} />
                </div>
            }
        </div>
    )
}

export default ItemListContainer
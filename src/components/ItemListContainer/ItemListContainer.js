import React from 'react';
import './itemListStyle.css';
import ItemList from './ItemList'
import Spinner from '../Spinner/Spinner';
import useFirebase from '../Hooks/useFirebase';


const ItemListContainer = (props) => {

    const { prod, loading } = useFirebase(props);

    return (
        <main className="body-main">
            <div className="spinner">
                {loading && <Spinner />}
            </div>
            {!loading &&
                <section className="section-select">
                    <ItemList product={prod} />
                </section>
            }
        </main>
    )
}

export default ItemListContainer
import React from 'react';
import './itemListStyle.css';
import 'animate.css';
import Filters from '../Filters/Filters';
import ItemList from './ItemList'
import Spinner from '../Spinner/Spinner';
import FetchAndLoading from '../HOC/FetchAndLoading';


const ItemListContainer = (props) => {

    const { prod, loading } = props;

    return (
        <div className="body-section">
            <h2 className="title animate__animated animate__zoomIn">{props.greeting}</h2>
            <div className="spinner">
                {loading && <Spinner />}
            </div>
            {!loading &&
                <div className="section-select">
                    <Filters />
                    <ItemList prod={prod} />
                </div>
            }

        </div>
    )
}

export default FetchAndLoading(ItemListContainer)
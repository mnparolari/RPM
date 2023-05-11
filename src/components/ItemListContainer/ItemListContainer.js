import React from 'react';
import './itemListStyle.css';
import 'animate.css';
import Filters from '../Filters/Filters';
import ItemList from './ItemList'
import Spinner from '../Spinner/Spinner';
import FetchAndLoading from '../HOC/FetchAndLoading';


const ItemListContainer = (props) => {

const {loading} = props;

    return (
        <div className="body-section">
            <h2 className="title animate__animated animate__zoomIn">{props.greeting}</h2>
            <section className="section-select">
                <div className="spinner">
                    {loading && <Spinner/>}
                </div>
                {!loading && 
                <div> 
                    <Filters />
                    <ItemList />
                </div>
                }
            </section>
        </div>
    )
}

export default FetchAndLoading(ItemListContainer)
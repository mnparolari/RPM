import React from 'react';
import './itemListStyle.css';
import Filters from '../Filters/FiltersProducts';
import ItemList from './ItemList'
import Spinner from '../Spinner/Spinner';
import FetchAndLoading from '../HOC/FetchAndLoading';
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) => {

    const { prod, loading } = props;

    const {category} = useParams()
    const categoryProd = prod.filter((cat) => cat.category === category)

    return (
        <div className="body-section">
            <div className="spinner">
                {loading && <Spinner />}
            </div>
            {!loading &&
                <div className="section-select">
                    <Filters />
                    <ItemList prod={categoryProd} />
                </div>
            }

        </div>
    )
}

export default FetchAndLoading(ItemListContainer)
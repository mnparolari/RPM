import React, { useEffect, useState } from 'react';
import './itemListStyle.css';
import Filters from '../Filters/FiltersProducts';
import ItemList from './ItemList'
import Spinner from '../Spinner/Spinner';
import FetchAndLoading from '../HOC/FetchAndLoading';
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) => {

    const { prod, loading } = props;
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    const requestData = () => {
        return new Promise((resolve, reject) => {
            resolve(prod);
        });
    };

    useEffect(() => {
        requestData()
            .then((data) => {
                if (!category) {
                    setProducts(data);
                } else {
                    setProducts(data.filter((cat) => cat.category === category))
                };
            });
    }, [category]);

    return (
        <div className="body-section">
            <div className="spinner">
                {loading && <Spinner />}
            </div>
            {!loading &&
                <div className="section-select">
                    <Filters />
                    <ItemList product={products} />
                </div>
            }

        </div>
    )
}

export default FetchAndLoading(ItemListContainer)
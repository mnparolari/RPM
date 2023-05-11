import React from 'react';
import './itemDetailStyle.css';
import ItemDetail from './ItemDetail';
import Spinner from '../Spinner/Spinner';
import FetchAndLoading from '../HOC/FetchAndLoading';

const ItemDetailContainer = (props) => {

  const { loading, prod } = props;

  return (
    <div>
      <div className="spinner">
        {loading && <Spinner />}
      </div>
      <div>{!loading && 
        <ItemDetail title={prod.title} band={prod.band} detail={prod.detail} description={prod.description} price={prod.price} pictureUrl={prod.pictureUrl} stock={prod.stock} key={prod.id} />
      }
      </div>
    </div>
  )
}

export default FetchAndLoading(ItemDetailContainer)
/*{!loading && prod.map(prod => (
        <ItemDetail id={prod.id} title={prod.title} band={prod.band} detail={prod.detail} description={prod.description} price={prod.price} pictureUrl={prod.pictureUrl} stock={prod.stock} key={prod.id} />
      ))}*/
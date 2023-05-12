import React /*{ useState, useEffect }*/ from 'react';
import './itemDetailStyle.css';
import ItemDetail from './ItemDetail';
import Spinner from '../Spinner/Spinner';
import FetchAndLoading from '../HOC/FetchAndLoading';
//import { useParams } from 'react-router-dom';

const ItemDetailContainer = (props) => {

  const { prod, loading } = props;

  

  return (
    <div>
      <div className="spinner">
        {loading && <Spinner />}
      </div>
      <div>{!loading &&
        <ItemDetail prod={prod} />
      }
      </div>
    </div>
  )
}

export default FetchAndLoading(ItemDetailContainer)

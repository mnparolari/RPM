import React from 'react';
import './itemDetailStyle.css';
import ItemDetail from './ItemDetail';
import Spinner from '../Spinner/Spinner';
import FetchAndLoading from '../HOC/FetchAndLoading';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = (props) => {

const { prod, loading } = props;

const {id} = useParams()
const product = prod.find(item => item.id === Number(id))

  return (
    <div>
      <div className="spinner">
        {loading && <Spinner />}
      </div>
      <div>{!loading &&
        <ItemDetail prod={product} />
      }
      </div>
    </div>
  )
}

export default FetchAndLoading(ItemDetailContainer)

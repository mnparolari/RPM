import React from 'react';
import './itemDetailStyle.css';
import ItemDetail from './ItemDetail';
import Spinner from '../Spinner/Spinner';
import useFirebase from '../Hooks/useFirebase';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = (props) => {

  const { prod, loading } = useFirebase(props);
  const { id } = useParams();
  const product = prod.find(item => item.id === Number(id));

  return (
    <section className="body-section">
      <div className="spinner">
        {loading && <Spinner />}
      </div>
      {!loading &&
        <div>
          <ItemDetail prod={product} />
        </div>
      }
    </section>
  )
}

export default ItemDetailContainer

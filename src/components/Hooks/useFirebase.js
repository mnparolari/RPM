import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

const useFetchLoading = () => {

    const [loading, setLoading] = useState(true);
    const [prod, setProd] = useState([]);
    const [orderNumber, setOrderNumber] = useState([]);
    const { category } = useParams();

    const handleError = () => {
        const MySwalError = withReactContent(Swal)
        MySwalError.fire({
            icon: 'error',
            title: 'Oops... ¡Ocurrió un error!',
            text: 'Refrescá y volvé a intentarlo.',
        });
    };

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const col = collection(db, "products");
                const data = await getDocs(col);
                const docs = data.docs.map(doc => doc = { id: doc.id, ...doc.data() });
                setTimeout(() => {
                    if (!category) {
                        setProd(docs);
                    } else {
                        setProd(docs.filter((res) => res.category === category))
                    };
                    setLoading(false);
                }, 200);
            } catch (error) {
                handleError(error);
            };
        };
        getProducts();
    }, [category]);

    const postData = async ({ data }) => {
        try {
            const col = collection(db, "order");
            const order = await addDoc(col, data);
            setOrderNumber(order.id)
        } catch (error) {
            handleError(error)
        }
    };


    return { prod, loading, postData, orderNumber };
}

export default useFetchLoading
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

const useFetchLoading = () => {

    const [loading, setLoading] = useState(true);
    const [prod, setProd] = useState([]);
    const [orderNumber, setOrderNumber] = useState([]);
    const { category } = useParams();


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
                console.log(error);
            }
        }
        getProducts();
    }, [category]);

    const postData = async ({ data }) => {
        try {
            const col = collection(db, "order");
            const order = await addDoc(col, data);
            setOrderNumber(order.id)
            console.log(order.id)
        } catch (error) {
            console.log(error)
        }
    };


    return { prod, loading, postData, orderNumber };
}

export default useFetchLoading
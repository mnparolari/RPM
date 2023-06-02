import { useState, useEffect } from 'react';

const useCount = (props) => {

    const { initial, stock } = props;

    const [quantity, setQuantity] = useState(initial || 0);
    const [block, setBlock] = useState(false);

    useEffect(() => {
        if (quantity >= stock) {
            setBlock(true)
        }
        return () => {
            setBlock(false)
        }
    }, [stock, quantity]);


    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        };
    };

    return { quantity, block, increment, decrement }

}

export default useCount
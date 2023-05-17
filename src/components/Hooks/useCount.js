import {useState, useEffect} from 'react';


const useCount = (props) => {
    
    const { initial, stock } = props;

    const [value, setValue] = useState(initial || 1);
    const [block, setBlock] = useState(false);

    useEffect(() => {
        if (value >= stock) {
            setBlock(true)
        }
        return () => {
            setBlock(false)
        }
    }, [value]);


    const increment = () => {
        setValue(value + 1);
    };

    const decrement = () => {
        if (value > 1) {
            setValue(value - 1);
        };
    };

    return { value, block, increment, decrement }

}

export default useCount
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


    const onAdd = () => {
        setValue(value + 1);
    };

    const onRemove = () => {
        if (value > 1) {
            setValue(value - 1);
        };
    };

    const reset = () => {
        setValue(initial || 1)
    };

    return {value, block, onAdd, onRemove, reset}

}

export default useCount
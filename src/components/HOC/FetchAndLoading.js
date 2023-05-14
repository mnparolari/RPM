import React, { useState, useEffect } from 'react';

const FetchAndLoading = (ChildrenComponent) => {

    const LoadingAndFetch = () => {

        const [loading, setLoading] = useState(true);
        const [prod, setProd] = useState([]);

        useEffect(() => {
            setLoading(true);
            setTimeout(() => {
                fetch('../data/data.json')
                    .then((res) => res.json())
                    .then((res) => setProd(res))
                    .finally(() => setLoading(false))
            }, 2000);
        }, [])

        return (
            <ChildrenComponent loading={loading} prod={prod} />
        )
    }

    return LoadingAndFetch
}

export default FetchAndLoading
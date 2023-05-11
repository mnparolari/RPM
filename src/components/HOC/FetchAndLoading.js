import React, {useState, useEffect} from 'react'

const FetchAndLoading = (ChildrenComponent) => {

    const LoadingAndFetch = () => {

        const [loading, setLoading] = useState(true);
        const [prod, setProd] = useState(fetch('../data/data.json')
            .then((res) => res.json()));
    
        useEffect(() => {
            setLoading(true);
            const action = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(prod);
                }, 2000);
            });
    
            action.then((res) => {
                setProd(res);
                setLoading(false);
            })
                .catch((err) => {
                    { console.log(err) }
                })
        }, [])

        return (
            <ChildrenComponent loading={loading} prod={prod}/>
            )
    }

    return LoadingAndFetch
}

export default FetchAndLoading
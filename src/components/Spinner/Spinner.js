import React from 'react';
import './spinner.css';

const Spinner = () => {
    return (
        <div className="m-5"
            style={{
                width: '100%',
                height: '18rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
            }}>
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner
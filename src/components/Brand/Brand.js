import React from 'react';
import './brand.css';
import logo from '../../assets/img/rpmLogo.png';
import iso from '../../assets/img/rpmIso.png';

const Brand = () => {
    return (
        <div className="brand">
            <a href="#" className="brand-logo"><img src={logo} className="App-logo" alt="logo" /><img src={iso} className="App-iso" alt="iso" /></a>
        </div>
    )
}

export default Brand
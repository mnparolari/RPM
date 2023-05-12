import React from 'react';
import './brand.css';
import logo from '../../assets/img/rpmLogo.png';
import iso from '../../assets/img/rpmIso.png';
import {NavLink} from 'react-router-dom'

const Brand = () => {
    return (
        <div className="brand">
            <NavLink to={`/`} className="brand-logo"><img src={logo} className="App-logo" alt="logo" /><img src={iso} className="App-iso" alt="iso" /></NavLink>
        </div>
    )
}

export default Brand
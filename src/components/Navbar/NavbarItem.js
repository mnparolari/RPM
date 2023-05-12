import React from 'react'
import './navbar.css';
import {NavLink} from 'react-router-dom'

const NavbarItem = (props) => {
    const {path, name} = props;
    return (
    <li>
        <NavLink to={path} className="menu">{name}</NavLink>
    </li>
    )
}

export default NavbarItem
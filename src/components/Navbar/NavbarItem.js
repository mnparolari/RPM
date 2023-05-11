import React from 'react'
import './navbar.css';
/*import {NavLink} from 'react-router-dom'*/

const NavbarItem = (props) => {
    return (
    <li>
        <a className="menu">{props.menu}</a>
    </li>
    )
}

export default NavbarItem
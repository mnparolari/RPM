import React from 'react'

const NavbarItem = (props) => {
    return (
    <li>
        <a href="#" className="menu">{props.menu}</a>
    </li>
    )
}

export default NavbarItem
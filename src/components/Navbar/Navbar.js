import React from 'react';
import './navbar.css';
import NavbarItem from './NavbarItem';
import CartWidget from '../CartWidget/CartWidget';


function NavbarBoot() {
    const navbarItems = [
        {
            path: "/destacados",
            name: "Destacados"
        },
        {
            path: "/nacionales",
            name: "Nacionales"
        },
        {
            path: "/internacionales",
            name: "Internacionales"
        },
        {
            path: "/usados",
            name: "Usados"
        },
        {
            path: "/clasicos",
            name: "Clásicos"
        },


    ]
    return (
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="nav-item hide-on-med-and-down">
                {navbarItems.map(({path,name})=> (
                    <NavbarItem path={path} name={name} />
                ))}
                </ul>
                <form>
                    <div className="input-field small">
                        <input placeholder='Buscá tu producto' className="input-search" id="search" type="search" required />
                        <label className="label-icon" for="search"><i class="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavbarBoot;
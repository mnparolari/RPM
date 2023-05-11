import React from 'react';
import './navbar.css';
import NavbarItem from './NavbarItem';
import CartWidget from '../CartWidget/CartWidget';


function NavbarBoot() {
    return (

        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="nav-item hide-on-med-and-down">
                    <NavbarItem menu={"Novedades"} />
                    <NavbarItem menu={"Clásicos"} />
                    <NavbarItem menu={"Usados"} />
                    <NavbarItem menu={"Curiosidades"} />
                    <NavbarItem menu={"Ver todo"} />
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
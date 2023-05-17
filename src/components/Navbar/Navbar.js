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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <form className="form-search">
                    <div className="input-field small">
                        <input placeholder='Buscá tu producto' className="input-search" id="search" type="search" required />
                        <label className="label-icon" for="search"></label>
                    </div>
                </form>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        {navbarItems.map(({ path, name }) => (
                            <NavbarItem path={path} name={name} />
                        ))}
                    </ul>
                </div>
                <div><CartWidget /></div>
            </div>
        </nav >
    );
}

export default NavbarBoot;
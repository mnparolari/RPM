import React from 'react';
import './navbar.css';
import NavbarItem from './NavbarItem';
import CartWidget from '../CartWidget/CartWidget';

function NavbarBoot() {
    const navbarItems = [
        {
            path: "/destacados",
            name: "DESTACADOS"
        },
        {
            path: "/nacionales",
            name: "NACIONALES"
        },
        {
            path: "/internacionales",
            name: "INTERNACIONALES"
        },
        {
            path: "/usados",
            name: "USADOS"
        },
        {
            path: "/clasicos",
            name: "CLÁSICOS"
        },
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div><CartWidget /></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav navbar-nav-scroll">
                        {navbarItems.map(({ path, name }) => (
                            <NavbarItem path={path} name={name} key={name}/>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarBoot;
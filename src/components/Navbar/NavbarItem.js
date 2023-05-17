import React from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';

const NavbarItem = (props) => {
    const { path, name } = props;
    return (
        <li className="nav-item">
            <NavLink to={path} className="menu">{name}</NavLink>
        </li>
    )
}

export default NavbarItem

/*<li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Link
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Link</a>
                    </li>
                </ul>*/
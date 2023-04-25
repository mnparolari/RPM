import logo from '../../assets/img/rpmLogo.png';
import iso from '../../assets/img/rpmIso.png';
import NavbarItem from './NavbarItem';
import CartWidget from '../CartWidget/CartWidget';

function NavbarBoot() { 
return (
    <nav>
            <div className="nav-wrapper">
                <div className="brand">
                    <a href="#" className="brand-logo"><img src={logo} className="App-logo" alt="logo" /></a>
                    <a href="#" className="brand-logo"><img src={iso} className="App-iso" alt="iso" /></a>
                </div>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <NavbarItem menu={"Novedades"} />
                    <NavbarItem menu={"Clásicos"} />
                    <NavbarItem menu={"Usados"} />
                    <NavbarItem menu={"Curiosidades"} />
                    <NavbarItem menu={"Ver todo"} />
                    <CartWidget />
                </ul>
            </div>
        </nav>
    );
}

export default NavbarBoot;
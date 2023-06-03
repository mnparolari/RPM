import React from 'react';
import './footer.css';
import logo from '../../assets/img/rpmLogo.png';
import facebook from '../../assets/img/facebook.png';
import instagram from '../../assets/img/instagram.png';
import twitter from '../../assets/img/twitter.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const goToUp = () => {
        window.scrollTo(0, 0)
    }

    return (
        <footer className="main-footer">
            <div className="container-footer">
                <div className="row-footer">
                    <div className="col-footer">
                        <NavLink onClick={goToUp} className="brand-logo"><img src={logo} className="App-logo-footer" alt="logo" /></NavLink>
                    </div>
                    <div className="col-footer">
                        <p style={{ fontWeight: "bold", fontSize: "0.8rem", color: "#DED7B3ff" }}>Desarrollado por: Martín Parolari</p>
                        <p style={{ fontWeight: "bold", fontSize: "0.8rem", color: "#DED7B3ff" }}>&copy; {new Date().getFullYear()} RPM | Todos los derechos reservados.</p>
                    </div>
                    <div className="col-footer">
                        <p style={{ fontWeight: "bold", fontSize: "0.8rem" }}>Seguinos:</p>
                        <div className="row-social">
                            <NavLink to="https://www.facebook.com/" target="_blank"><img src={facebook} alt="Facebook" className="social-logo" /></NavLink>
                            <NavLink to="https://www.instagram.com" target="_blank"><img src={instagram} alt="Instagram" className="social-logo" /></NavLink>
                            <NavLink to="https://www.twitter.com" target="_blank"><img src={twitter} alt="Twitter" className="social-logo" /></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
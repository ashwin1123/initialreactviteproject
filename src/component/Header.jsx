import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from '../assets/img/DD.png'; 

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const navLinkClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

    return (
        <header>

            <nav className="navbar navbar-expand-lg navbar-dark sticky-top">

                <div className="container-fluid">

                    {/* Logo */}
                    <Link
                        className="navbar-brand"
                        to="/"
                        onClick={closeMenu}
                    >
                        <img
                            src={logo}
                            className="img-fluid"
                            alt="Company Logo"
                        />
                    </Link>


                    {/* Mobile Menu Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleMenu}
                        aria-controls="mobile_nav"
                        aria-expanded={menuOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    {/* Navigation Menu */}
                    <div
                        id="mobile_nav"
                        className={`navbar-collapse ${
                            menuOpen ? 'show' : ''
                        }`}
                    >

                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <NavLink
                                    className={navLinkClass}
                                    to="/"
                                    onClick={closeMenu}
                                >
                                    Overview
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className={navLinkClass}
                                    to="/about"
                                    onClick={closeMenu}
                                >
                                    About Us
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className={navLinkClass}
                                    to="/lifeevent"
                                    onClick={closeMenu}
                                >
                                    Life @ Company
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className={navLinkClass}
                                    to="/boardofdirector"
                                    onClick={closeMenu}
                                >
                                    Board of Directors
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className={navLinkClass}
                                    to="/team"
                                    onClick={closeMenu}
                                >
                                    Team
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className={navLinkClass}
                                    to="/careerbenifits"
                                    onClick={closeMenu}
                                >
                                    Career Benifits
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className={navLinkClass}
                                    to="/process"
                                    onClick={closeMenu}
                                >
                                    Process Methodology
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className={navLinkClass}
                                    to="/ceodesk"
                                    onClick={closeMenu}
                                >
                                    Ceo Desk
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className={navLinkClass}
                                    to="/infrastructure"
                                    onClick={closeMenu}
                                >
                                    Infrastructure
                                </NavLink>
                            </li>

                        </ul>


                        {/* Right Side */}
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

                            <li className="nav-item searchicon">
                                <i className="fas fa-search h5 mr-3 mt-3"></i>
                            </li>

                            <li className="nav-item">

                                <Link
                                    to="/contact"
                                    className="btn btn-danger rounded-0"
                                    onClick={closeMenu}
                                >
                                    Contact Us
                                </Link>

                            </li>

                        </ul>

                    </div>

                </div>

            </nav>

        </header>
    );
}

export default Header;
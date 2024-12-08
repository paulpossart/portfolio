import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.scss';

function Navbar({className}) {
    return (
        <div className={className}>

            <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'activeNavLink'
                    : 'inactiveNavLink'}>
                Home
            </NavLink>

            <NavLink
                to="about"
                className={({ isActive }) => isActive ? 'activeNavLink'
                    : 'inactiveNavLink'}>
                About
            </NavLink>

            <NavLink to="projects" className={({ isActive
            }) => isActive ? 'activeNavLink'
                    : 'inactiveNavLink'}>
                Projects
            </NavLink>

            <NavLink to="contact" className={({ isActive
            }) => isActive ? 'activeNavLink'
                    : 'inactiveNavLink'}>
                Contact
            </NavLink>
        </div>
    );
};

export default Navbar;
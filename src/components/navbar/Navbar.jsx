import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.scss';
import homeIcon from '../../assets/icons/home-svgrepo-com.svg'

function Navbar({ className }) {
    return (
        <div className={`${className} ${styles.navbar}`}>

            <NavLink
                to="/"
                className={styles.homeButton}>
                <img src={homeIcon} alt="home icon" />
            </NavLink>

            <NavLink
                to="about"
                className={({ isActive }) => `${isActive ? 'activeNavLink'
                    : 'inactiveNavLink'} ${styles.aboutBtn}`}>
                about
            </NavLink>

            <NavLink to="projects"
                className={({ isActive }) => `${isActive ? 'activeNavLink'
                    : 'inactiveNavLink'} ${styles.projectsBtn}`}>
                projects
            </NavLink>

            <NavLink to="contact"
                className={({ isActive }) => `${isActive ? 'activeNavLink'
                    : 'inactiveNavLink'} ${styles.contactBtn}`}>
                contact
            </NavLink>
        </div >
    );
};

export default Navbar;
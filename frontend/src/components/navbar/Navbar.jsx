import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import "./navbar.css";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="website__navbar">
        <h1 className="website__navbar-links_logo">Sussy little baka restaurant ^.^</h1>
        <div className="website__navbar-links">
            <div className="website__navbar-links_container">
            <p><a href="#home">Home</a></p>
            <p><a href="#reserve">Reserve a table </a></p>
            <p><a href="#menu">View the menu</a></p>
            <p><a href="#about">About us </a></p>
            <p><a href="#contact">Contact us</a></p>
            </div>
        </div>
        <div className="website__navbar-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
        </div>
        <div className="website__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="website__navbar-menu_container scale-up-center">
          <div className="website__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#reserve">Reserve a table </a></p>
            <p><a href="#menu">View the menu</a></p>
            <p><a href="#about">About us </a></p>
            <p><a href="#contact">Contact us</a></p>
          </div>
          <div className="website__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
        </div>
    );
};

export default Navbar;
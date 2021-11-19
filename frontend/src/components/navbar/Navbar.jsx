import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import "./navbar.css";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="website__navbar">
        <h1 className="website__navbar-links_logo">Sussy little baka restaurant ^.^</h1>
        <div className="website__navbar-links">
            <div className="website__navbar-links_container">
              <p onClick={() => navigate("/")}>Home</p>
              <p onClick={() => navigate("/Reserve")}>Reserve a table</p>
              <p onClick={() => navigate("/Menu")}>View the menu</p>
              <p onClick={() => navigate("/About")}>About us</p>
              <p onClick={() => navigate("/Contact")}>Contact us</p>
            </div>
        </div>
        <div className="website__navbar-sign">
            <p onClick={() => navigate("/Login")}>Sign in</p>
            <button type="button" onClick={() => navigate("/SignUp")}>Sign up</button>
        </div>
        <div className="website__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="website__navbar-menu_container scale-up-center">
          <div className="website__navbar-menu_container-links">
            <p onClick={() => navigate("/")}>Home</p>
            <p onClick={() => navigate("/Reserve")}>Reserve a table</p>
            <p onClick={() => navigate("/Menu")}>View the menu</p>
            <p onClick={() => navigate("/About")}>About us</p>
            <p onClick={() => navigate("/Contact")}>Contact us</p>
          </div>
          <div className="website__navbar-menu_container-links-sign">
            <p onClick={() => navigate("/Login")}>Sign in</p>
            <button type="button" onClick={() => navigate("/SignUp")}>Sign up</button>
          </div>
        </div>
        )}
      </div>
        </div>
    );
};

export default Navbar;
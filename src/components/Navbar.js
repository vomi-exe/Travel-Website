import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import "./Navbar.css";
import { Button } from "./Button";
import TollIcon from '@material-ui/icons/Toll';





function Navbar() {
  const [click, isClicked] = useState(true);
  const [button,setButton] = useState(true);

  const handleClick = () => isClicked(!click);

  const closeMobileMenu = () => isClicked(true);
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    }else {
      setButton(true);
    }
  }


  useEffect(() => {
    showButton();
  },[]);

window.addEventListener('resize' , showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TREL <TollIcon fontSize="large" color="inherit" />
          </Link>
          <div onClick={handleClick} className="menu-icon">
            {click ? <MenuIcon color="secondary" fontSize ="large"/> : <MenuOpenIcon fontSize ="large" color="secondary" />}
          </div>
          <ul className={!click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline"  >Sign up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

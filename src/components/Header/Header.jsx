import React from "react";
import logo from "../../assets";
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    function scrollToTop() {
        setTimeout(() => {
            window.scrollTo(0, 0);
          }, 0);
    }

    return (
        <header className="header">
            <Link onClick={scrollToTop} to="sew-and-print/"><img className="header__logo" src={logo} alt="logo"/></Link>
        </header>
    );
};

export default Header;

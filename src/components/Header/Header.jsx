import React from "react";
import logo from "../../assets";
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Link to="/"><img className="header__logo" src={logo} alt="logo"/></Link>
        </header>
    );
};

export default Header;

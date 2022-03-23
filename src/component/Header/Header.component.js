import React from "react";
import "./Header.style.scss";
import PropTypes from "prop-types";
import logo from "../../asset/images/logo.svg";

function Header({ children }) {
  return (
    <header className="header">
      <img className="game-logo" src={logo} alt="Logo" />
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;

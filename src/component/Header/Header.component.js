import React from "react";
import "./Header.style.scss";
import logo from "../../asset/images/logo.svg";

const Header = ({ children }) => {
  return (
    <header className="header">
      <img className="game-logo" src={logo} alt="Logo"></img>
      {children}
    </header>
  );
};

export default Header;

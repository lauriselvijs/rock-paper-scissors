import React from "react";
import "./MenuViewWrapper.style.scss";
import PropTypes from "prop-types";

function MenuViewWrapper({ children }) {
  return <section className="menu-view">{children}</section>;
}

MenuViewWrapper.propTypes = {
  children: PropTypes.node,
};

export default MenuViewWrapper;

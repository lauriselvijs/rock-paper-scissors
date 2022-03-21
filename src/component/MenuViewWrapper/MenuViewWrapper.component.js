import React from "react";
import "./MenuViewWrapper.style.scss";

const MenuViewWrapper = ({ children }) => {
  return <section className="menu-view">{children}</section>;
};

export default MenuViewWrapper;

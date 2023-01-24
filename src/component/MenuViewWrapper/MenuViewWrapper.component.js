import "./MenuViewWrapper.style.scss";
import PropTypes from "prop-types";

function MenuViewWrapper({ children }) {
  return <div className="menu-view">{children}</div>;
}

MenuViewWrapper.propTypes = {
  children: PropTypes.node,
};

export default MenuViewWrapper;

import React from "react";
import "./PlayViewWrapper.style.scss";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function PlayViewWrapper({ children }) {
  const showAnimation = useSelector((state) => state.gesture.showAnimation);

  console.log(showAnimation);

  return (
    <section className={showAnimation ? "play-view-animation" : "play-view"}>
      {children}
    </section>
  );
}

PlayViewWrapper.propTypes = {
  children: PropTypes.node,
};

export default PlayViewWrapper;

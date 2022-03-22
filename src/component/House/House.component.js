import React, { useState, useEffect } from "react";
import "./House.style.scss";

const House = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setSelected("paper");
    }, 2200);
  }, []);

  return (
    <div className="house">
      <div className="house-picked">HOUSE PICKED</div>
      <div className={selected || "image-loop"} />
      {/* <div className="winner-gradient-house" /> */}
    </div>
  );
};

export default House;

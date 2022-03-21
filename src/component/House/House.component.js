import React from "react";
import "./House.style.scss";
import paper from "../../asset/images/paper.svg";
import scissors from "../../asset/images/scissors.svg";
import rock from "../../asset/images/rock.svg";
import EmptySelection from "../../asset/images/empty-selection.svg";

const House = () => {
  return (
    <div className="house">
      <div className="house-picked">HOUSE PICKED</div>
      <img src={rock} alt="Scissor" className="scissors" />
      <div className="winner-gradient-house" />
    </div>
  );
};

export default House;

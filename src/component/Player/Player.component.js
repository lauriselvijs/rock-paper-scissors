import React from "react";
import "./Player.style.scss";
import paper from "../../asset/images/paper.svg";
import scissors from "../../asset/images/scissors.svg";
import rock from "../../asset/images/rock.svg";

const Player = () => {
  return (
    <div className="player">
      <div className="you-picked">YOU PICKED</div>
      <img src={paper} alt="Paper" className="paper" />
      <div className="winner-gradient" />
    </div>
  );
};

export default Player;

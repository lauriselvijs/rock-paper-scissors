import React from "react";
import "./PlayView.style.scss";
import paper from "../../asset/images/paper.svg";
import scissors from "../../asset/images/scissors.svg";
import rock from "../../asset/images/rock.svg";

const PlayView = () => {
  return (
    <section className="play-view">
      <div className="you-picked">YOU PICKED</div>
      <div className="house-picked">HOUSE PICKED</div>
      <img src={paper} alt="Paper" className="paper" />
      <img src={scissors} alt="Scissor" className="scissors" />
      {/* <img src={rock} alt="Rock" className="rock" /> */}
    </section>
  );
};

export default PlayView;

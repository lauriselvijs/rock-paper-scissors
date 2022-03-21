import React from "react";
import "./PlayView.style.scss";
import paper from "../../asset/images/paper.svg";
import scissors from "../../asset/images/scissors.svg";
import rock from "../../asset/images/rock.svg";
import PlayAgainBtn from "../../component/PlayAgainBtn/PlayAgainBtn.component";
import GameMsg from "../../component/GameMsg";
import EmptySelection from "../../asset/images/empty-selection.svg";

const PlayView = () => {
  return (
    <section className="play-view">
      <div className="player">
        <div className="you-picked">YOU PICKED</div>
        <img src={paper} alt="Paper" className="paper" />
        {/* <div className="winner-gradient" /> */}
      </div>
      {/* <div className="game-info">
        <GameMsg />
        <PlayAgainBtn />
      </div> */}
      <div className="house">
        <div className="house-picked">HOUSE PICKED</div>
        <img src={EmptySelection} alt="Scissor" className="scissors" />
        {/* <div className="winner-gradient-house" /> */}
      </div>
      {/* <img src={rock} alt="Rock" className="rock" /> */}
    </section>
  );
};

export default PlayView;

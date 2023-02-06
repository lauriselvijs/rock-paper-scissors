import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import RulesModalBtn from "../RulesModalBtn";
import GameMenu from "../GameMenu";
import Player from "../Player";
import House from "../House";
import GameResultMsg from "../GameResultMsg";
import PlayAgainBtn from "../PlayAgainBtn";
import RulesModal from "../RulesModal";
import { MAIN_SCREEN, MENU_SCREEN } from "../../constant/GameScreen";
import { gameSliceName } from "../../store/features/Game";
import { getWinner } from "../../util/Game";
import Score from "../Score";

import "./Game.style.scss";

function Game() {
  const [winner, setWinner] = useState("");
  const { gameScreen, playerGesture } = useSelector(
    (state) => state[gameSliceName]
  );

  useEffect(() => {
    playerGesture && setWinner(getWinner(playerGesture));
  }, [playerGesture]);

  const renderGameScreen = useMemo(() => {
    if (gameScreen === MENU_SCREEN) {
      return (
        <div className="menu-view">
          <GameMenu />
        </div>
      );
    }

    if (gameScreen === MAIN_SCREEN) {
      return (
        <>
          <div className="play-view">
            <Player winner={winner} />
            <House winner={winner} />
          </div>
          <GameResultMsg winner={winner} />
          <PlayAgainBtn />
        </>
      );
    }
  }, [gameScreen, winner]);

  return (
    <div className="game">
      <Score winner={winner} />
      <RulesModalBtn />
      <RulesModal />
      {renderGameScreen}
    </div>
  );
}

export default Game;

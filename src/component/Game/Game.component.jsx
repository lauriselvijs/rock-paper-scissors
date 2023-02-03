import { useMemo } from "react";
import { useSelector } from "react-redux";

import RulesBtn from "../RulesBtn";
import SelectMenu from "../SelectMenu";
import Player from "../Player";
import House from "../House";
import GameMsg from "../GameMsg";
import PlayAgainBtn from "../PlayAgainBtn";
import RulesModal from "../RulesModal";
import { GAME_SCREEN, MENU_SCREEN } from "../../constant/GameScreen";

import "./Game.style.scss";

function Game() {
  const gameScreen = useSelector((state) => state.gesture.gameScreen);
  const showAnimation = useSelector((state) => state.gesture.showAnimation);

  const renderGameEnded = useMemo(
    () =>
      showAnimation && (
        <>
          <GameMsg />
          <PlayAgainBtn />
        </>
      ),
    [showAnimation]
  );

  const renderGameScreen = useMemo(() => {
    if (gameScreen === MENU_SCREEN) {
      return (
        <div className="menu-view">
          <SelectMenu />
        </div>
      );
    }

    if (gameScreen === GAME_SCREEN) {
      return (
        <div className={showAnimation ? "play-view-animation" : "play-view"}>
          <Player />
          <House />
          <div className="game-result">{renderGameEnded}</div>
        </div>
      );
    }
  }, [gameScreen, renderGameEnded, showAnimation]);

  return (
    <div className="game">
      <RulesBtn />
      <RulesModal />
      {renderGameScreen}
    </div>
  );
}

export default Game;

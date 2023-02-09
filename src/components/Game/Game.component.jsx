import { useMemo } from "react";
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
import Score from "../Score";

import styles from "./Game.style.module.scss";

const Game = () => {
  const { gameScreen } = useSelector((state) => state[gameSliceName]);

  const renderGameScreen = useMemo(() => {
    if (gameScreen === MENU_SCREEN) {
      return <GameMenu />;
    }

    if (gameScreen === MAIN_SCREEN) {
      return (
        <>
          <div className={styles.mainScreen}>
            <div className={styles.players}>
              <Player />
              <div className={styles.controls}>
                <GameResultMsg />
                <PlayAgainBtn />
              </div>
              <House />
            </div>
            <div className={styles.controlsMobile}>
              <GameResultMsg />
              <PlayAgainBtn />
            </div>
          </div>
        </>
      );
    }
  }, [gameScreen]);

  return (
    <div className={styles.game}>
      <Score />
      <RulesModalBtn />
      <RulesModal />
      {renderGameScreen}
    </div>
  );
};

export default Game;

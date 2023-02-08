import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ANIMATION_LENGTH } from "../../config/GameAnimation.config";
import { useDelay } from "../../hook/Delay/Delay.hook";

import { gameSliceName } from "../../store/features/Game";

import { getWinnerMsg } from "./GameResultMsg.config";
import styles from "./GameResultMsg.style.module.scss";

const GameResultMsg = () => {
  const { winner } = useSelector((state) => state[gameSliceName]);
  const timeoutEnded = useDelay(ANIMATION_LENGTH);

  const msg = useMemo(() => getWinnerMsg(winner), [winner]);

  if (timeoutEnded) {
    return <h2 className={styles.gameResultMsg}>{msg}</h2>;
  }

  return null;
};

export default GameResultMsg;

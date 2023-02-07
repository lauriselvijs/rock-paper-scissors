import { useMemo } from "react";
import { useSelector } from "react-redux";

import { gameSliceName } from "../../store/features/Game";

import { getWinnerMsg } from "./GameResultMsg.config";
import styles from "./GameResultMsg.style.module.scss";

const GameResultMsg = () => {
  const { winner } = useSelector((state) => state[gameSliceName]);

  const msg = useMemo(() => getWinnerMsg(winner), [winner]);

  return <div className={styles.gameResultMsg}>{msg}</div>;
};

export default GameResultMsg;

import { useMemo } from "react";
import { useSelector } from "react-redux";

import { gameSliceName } from "../../store/features/Game";

import { getWinnerMsg } from "./GameResultMsg.config";
import styles from "./GameResultMsg.style.module.scss";

const GameResultMsg = () => {
  const { winner, loading } = useSelector((state) => state[gameSliceName]);

  const msg = useMemo(() => getWinnerMsg(winner), [winner]);

  if (loading) {
    return null;
  }

  return <h2 className={styles.gameResultMsg}>{msg}</h2>;
};

export default GameResultMsg;

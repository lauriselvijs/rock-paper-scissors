import styles from "./House.style.module.scss";
import { useHouse } from "./House.hook";
import { useMemo } from "react";

const House = () => {
  const { gestureSrc, gesture, isWinner } = useHouse();

  const renderWinnerGradient = useMemo(
    () => isWinner && <div className={styles.winnerGradient} />,
    [isWinner]
  );

  return (
    <div className={styles.house}>
      <h3 className={styles.pickedTitle}>HOUSE PICKED</h3>
      <img
        src={gestureSrc}
        alt={gesture}
        className={styles.gesture}
        width={107}
        height={110}
      />
      {renderWinnerGradient}
    </div>
  );
};

export default House;

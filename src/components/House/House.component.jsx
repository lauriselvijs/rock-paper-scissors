import styles from "./House.style.module.scss";
import { useHouse } from "./House.hook";

const House = () => {
  const { gestureSrc, gesture } = useHouse();

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
      {/* {winner === HOUSE && <div className="winner-gradient-house" />} */}
    </div>
  );
};

export default House;

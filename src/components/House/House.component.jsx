import styles from "./House.style.module.scss";
import { useGestureImage } from "./House.hook";

const House = () => {
  const { src, houseGesture } = useGestureImage();

  return (
    <div className={styles.house}>
      <h3 className={styles.pickedTitle}>HOUSE PICKED</h3>
      <img
        src={src}
        alt={houseGesture}
        className={styles.gesture}
        width={107}
        height={110}
      />
      {/* {winner === HOUSE && <div className="winner-gradient-house" />} */}
    </div>
  );
};

export default House;

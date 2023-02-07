import styles from "./House.style.module.scss";
import { useGestureImage } from "./House.hook";

const House = () => {
  const { src, houseGesture } = useGestureImage();

  return (
    <div className={styles.house}>
      <div className={styles.pickedTitle}>HOUSE PICKED</div>
      <img src={src} alt={houseGesture} className={styles.gesture} />
      {/* {winner === HOUSE && <div className="winner-gradient-house" />} */}
    </div>
  );
};

export default House;

import { useSelector } from "react-redux";
import { HOUSE } from "../../constant/Participant";
import { gameSliceName } from "../../store/features/Game";

import "./House.style.scss";

function House() {
  const { winner, houseGesture } = useSelector((state) => state[gameSliceName]);

  return (
    <div className="house">
      <div className="house-picked">HOUSE PICKED</div>
      <div className={houseGesture.toLowerCase()} />
      {winner === HOUSE && <div className="winner-gradient-house" />}
    </div>
  );
}

export default House;

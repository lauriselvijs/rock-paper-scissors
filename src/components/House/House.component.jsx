import { HOUSE } from "../../constant/Participant";

import "./House.style.scss";

function House({ winner }) {
  return (
    <div className="house">
      <div className="house-picked">HOUSE PICKED</div>
      <div className="image-loop" />
      {winner === HOUSE && <div className="winner-gradient-house" />}
    </div>
  );
}

export default House;

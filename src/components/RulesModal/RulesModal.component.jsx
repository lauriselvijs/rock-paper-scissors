import "./RulesModal.style.scss";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import closeIcon from "../../asset/icons/icon-close.svg";
import rulesImg from "../../asset/icons/image-rules.svg";
import {
  rulesModalActions,
  rulesModalSliceName,
} from "../../store/features/RulesModal";

function RulesModal() {
  const { modalOpen } = useSelector((state) => state[rulesModalSliceName]);
  const dispatch = useDispatch();

  const { modalClosed } = bindActionCreators(rulesModalActions, dispatch);

  const onCloseBtnClick = () => {
    modalClosed();
  };

  return (
    <div
      className="rules-modal"
      style={{ display: modalOpen ? "flex" : "none" }}
    >
      <div className="rules-modal-content">
        <h1 className="rules-title">RULES</h1>
        <img src={rulesImg} alt="How to play" className="rules-img" />
        <img
          onClick={onCloseBtnClick}
          src={closeIcon}
          alt="Close icon"
          className="close-icon"
        />
      </div>
    </div>
  );
}

export default RulesModal;

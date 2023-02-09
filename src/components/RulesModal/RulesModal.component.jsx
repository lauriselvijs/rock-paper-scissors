import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import closeIcon from "../../asset/icons/icon-close.svg";
import rulesImg from "../../asset/icons/image-rules.svg";
import {
  rulesModalActions,
  rulesModalSliceName,
} from "../../store/features/RulesModal";

import styles from "./RulesModal.style.module.scss";

const RulesModal = () => {
  const { modalOpen } = useSelector((state) => state[rulesModalSliceName]);
  const dispatch = useDispatch();

  const { modalClosed } = bindActionCreators(rulesModalActions, dispatch);

  const onCloseBtnClick = () => {
    modalClosed();
  };

  if (modalOpen) {
    return (
      <div className={styles.rulesModal}>
        <div className={styles.contents}>
          <h2 className={styles.title}>RULES</h2>
          <img
            src={rulesImg}
            alt="How to play"
            className={styles.img}
            width={304}
            height={270}
          />
          <button
            aria-label="Close modal"
            className={styles.btn}
            onClick={onCloseBtnClick}
          >
            <img
              src={closeIcon}
              alt="Close icon"
              className={styles.closeIcon}
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default RulesModal;

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useClickAway } from "react-use";
import { bindActionCreators } from "redux";

import closeIcon from "../../asset/icons/icon-close.svg";
import rulesImg from "../../asset/icons/image-rules.svg";
import {
  rulesModalActions,
  rulesModalSliceName,
} from "../../store/features/RulesModal";
import Animation from "../shared/Animation/Animation.component";
import { RULES_MODAL_ANIMATION_LENGTH } from "./RulesModal.config";

import styles from "./RulesModal.style.module.scss";

const RulesModal = () => {
  const contentsRef = useRef(null);

  useClickAway(contentsRef, () => {
    modalClosed();
  });

  const { modalOpen } = useSelector((state) => state[rulesModalSliceName]);
  const dispatch = useDispatch();

  const { modalClosed } = bindActionCreators(rulesModalActions, dispatch);

  const onCloseBtnClick = () => {
    modalClosed();
  };

  return (
    <Animation
      nodeRef={contentsRef}
      show={modalOpen}
      timeout={500}
      styles={styles}
    >
      <div className={styles.rulesModal}>
        <div className={styles.contents} ref={contentsRef}>
          <h2 className={styles.title}>RULES</h2>
          <button
            aria-label="Close modal"
            className={styles.closeBtn}
            onClick={onCloseBtnClick}
          >
            <img src={closeIcon} alt="Close icon" width={20} height={20} />
          </button>
          <img
            src={rulesImg}
            alt="How to play"
            className={styles.img}
            width={304}
            height={270}
          />
        </div>
      </div>
    </Animation>
  );
};

export default RulesModal;

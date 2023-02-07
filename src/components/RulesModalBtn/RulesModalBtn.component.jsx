import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { rulesModalActions } from "../../store/features/RulesModal";

import styles from "./RulesModalBtn.style.module.scss";

const RulesModalBtn = () => {
  const dispatch = useDispatch();

  const { modalOpened } = bindActionCreators(rulesModalActions, dispatch);

  const onRulesClick = () => {
    modalOpened();
  };

  return (
    <button onClick={onRulesClick} className={styles.rulesBtn}>
      RULES
    </button>
  );
};

export default RulesModalBtn;

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { rulesModalActions } from "../../store/features/RulesModal";

import "./RulesModalBtn.style.scss";

function RulesModalBtn() {
  const dispatch = useDispatch();

  const { modalOpened } = bindActionCreators(rulesModalActions, dispatch);

  const onRulesClick = () => {
    modalOpened();
  };

  return (
    <button onClick={onRulesClick} className="rules-btn">
      RULES
    </button>
  );
}

export default RulesModalBtn;

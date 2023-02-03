import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { helpModalActions } from "../../store/features/HelpModal";

import "./RulesBtn.style.scss";

function RulesBtn() {
  const dispatch = useDispatch();

  const { modalOpened, animationStarted } = bindActionCreators(
    helpModalActions,
    dispatch
  );

  const onRulesClick = () => {
    modalOpened();
    animationStarted();
  };

  return (
    <button onClick={onRulesClick} className="rules-btn">
      RULES
    </button>
  );
}

export default RulesBtn;

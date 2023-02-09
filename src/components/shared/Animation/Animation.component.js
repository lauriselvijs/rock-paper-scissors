import { CSSTransition } from "react-transition-group";

const Animation = ({ nodeRef, show, styles, timeout, children }) => (
  <CSSTransition
    nodeRef={nodeRef}
    in={show}
    timeout={timeout}
    classNames={{
      enter: styles.enter,
      enterActive: styles.enterActive,
      exit: styles.exit,
      exitActive: styles.exitActive,
    }}
    unmountOnExit
  >
    {children}
  </CSSTransition>
);

export default Animation;

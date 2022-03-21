import "./App.scss";
import Footer from "./component/Footer/";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Root from "./route/Root";
import RulesModal from "./component/RulesModal/RulesModal.component";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Root />
              <RulesModal />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import "./App.scss";
import Footer from "./component/Footer/";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Root from "./route/Root";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Root />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

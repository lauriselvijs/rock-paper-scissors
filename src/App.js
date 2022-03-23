import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Root from "./route/Root";
import RulesModal from "./component/RulesModal/RulesModal.component";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Root />
              <RulesModal />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

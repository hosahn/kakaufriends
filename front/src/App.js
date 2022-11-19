import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/mainPage";
import SelectA from "./pages/selectPage1";
import SelectB from "./pages/selectPage2";
import SelectC from "./pages/selectPage3";
import SelectD from "./pages/selectPage4";
import Login from "./pages/loginPage";
import Profiles from "./pages/chooseWho";
import Parent from "./pages/parentPage";
import Recommend from "./pages/recommendPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/selectA" element={<SelectA />} />
          <Route path="/selectB" element={<SelectB />} />
          <Route path="/selectC" element={<SelectC />} />
          <Route path="/selectD" element={<SelectD />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/family/parents" element={<Parent />} />
          <Route path="/family/:nickname" element={<Recommend />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

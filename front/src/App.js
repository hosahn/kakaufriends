import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/mainPage";
import SelectA from "./pages/selectPage1";
import SelectB from "./pages/selectPage2";
import Login from "./pages/loginPage";
import Profiles from "./pages/profiles";
import Parent from "./pages/parentPage";
import Recommend from "./pages/recommendPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:nickname/selectA" element={<SelectA />} />
          <Route path="/:nickname/selectB" element={<SelectB />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/family/parents" element={<Parent />} />
          <Route path="/family/:nickname" element={<Recommend />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

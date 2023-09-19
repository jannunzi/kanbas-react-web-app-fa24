import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Hexagons from "./Hexagons";
import HexagonalCircles from "./HexagonalCircles";
import Scale from "./Scale";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/scale" element={<Scale />} />
        <Route path="/hexrcles" element={<HexagonalCircles />} />
        <Route path="/" element={<Hexagons />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

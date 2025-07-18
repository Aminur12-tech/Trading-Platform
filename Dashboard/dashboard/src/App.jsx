import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/component/Home.jsx";
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import TAAListPage from "pages/TAAListPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/TAA" element={<TAAListPage />} />
      </Routes>
    </div>
  );
}

export default App;

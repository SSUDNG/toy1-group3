import { Route, Routes } from "react-router-dom";
import React from "react";
import TAAListPage from "pages/TAAListPage";
import MainPage from "./pages/MainPage";
import Request from "./pages/RequestPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/TAA" element={<TAAListPage />} />
        <Route path="/R" element={<Request />} />
      </Routes>
    </div>
  );
}

export default App;

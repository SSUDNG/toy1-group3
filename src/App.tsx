import { Route, Routes } from "react-router-dom";
import React from "react";
// import Nav from "components/Nav";
import TAAListPage from "pages/TAAListPage";
import TestPage from "./pages/TestPage/Test";
import LoginPage from "./pages/LoginPage/Login";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/TAA" element={<TAAListPage />} />
        <Route path="/main" element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default App;

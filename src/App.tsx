import { Route, Routes } from "react-router-dom";
import React from "react";
import TAAListPage from "pages/TAAListPage";
import ProfilePage from "./pages/ProfilePage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/TAA" element={<TAAListPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;

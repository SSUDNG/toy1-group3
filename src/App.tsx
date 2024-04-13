import React from "react";
import { Route, Routes } from "react-router-dom";
import TAAListPage from "pages/TAAListPage";
import ProfilePage from "./pages/ProfilePage";
import TestPage from "./pages/TestPage/Test";
import LoginPage from "./pages/LoginPage/Login";
import MainPage from "./pages/MainPage";
import Request from "./pages/Request";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/request" element={<Request />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/TAA" element={<TAAListPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/main" element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default App;

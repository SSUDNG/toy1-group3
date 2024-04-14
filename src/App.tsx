import { Route, Routes } from "react-router-dom";
import React from "react";
// import Nav from "components/Nav";
import SideBar from "components/SideBar";
import TAAListPage from "pages/TAAListPage";
import ProfilePage from "./pages/ProfilePage";
import TestPage from "./pages/TestPage/Test";
import LoginPage from "./pages/LoginPage/Login";
import MainPage from "./pages/MainPage";
import Request from "./pages/RequestPage";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <nav className={styles.sidebar}>
        <SideBar />
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/TAA" element={<TAAListPage />} />
          <Route path="/request" element={<Request />} />
          <Route path="/main" element={<TestPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

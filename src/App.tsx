import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SideBar from "components/SideBar";
import TAAListPage from "pages/TAAListPage";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";

import ProfilePage from "./pages/ProfilePage";
import TestPage from "./pages/TestPage/Test";
import LoginPage from "./pages/LoginPage/Login";
import MainPage from "./pages/MainPage";
import Request from "./pages/RequestPage";
import styles from "./App.module.css";
import app from "./firebase";

console.log(app);

function App() {
  const userDataString = localStorage.getItem("userData");
  const initialUserData = userDataString ? JSON.parse(userDataString) : {};
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userData, setUserData] = useState<User | null>(initialUserData);
  console.log(pathname);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user, "user");
        if (pathname === "/login") {
          navigate("/test");
        }
      } else {
        navigate("/login");
      }
    });
  }, [auth, navigate, pathname]);
  const handleAuth: () => void = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const newData = data.user;
        setUserData(newData);
        localStorage.setItem("userData", JSON.stringify(data.user));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut: () => void = () => {
    signOut(auth)
      .then(() => {
        setUserData(null);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={styles.app}>
      {pathname !== "/login" && (
        <nav className={styles.sidebar}>
          <SideBar />
        </nav>
      )}

      <div className="main-content">
        <Routes>
          <Route
            path="/login"
            element={<LoginPage handleAuth={handleAuth} />}
          />
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/TAA" element={<TAAListPage />} />
          <Route path="/request" element={<Request />} />
          <Route
            path="/test"
            element={<TestPage handleSignOut={handleSignOut} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";

import SideBar from "components/SideBar";
import TAAListPage from "pages/TAAListPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage/Login";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage/News";
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
        if (pathname === "/login") {
          navigate("/");
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
        <nav>
          <SideBar handleSignOut={handleSignOut} />
        </nav>
      )}

      <div className={styles.mainContent}>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage handleAuth={handleAuth} />}
          />
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/TAA" element={<TAAListPage />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

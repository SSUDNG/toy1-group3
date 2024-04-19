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
import FireTest from "pages/FIreCloudTestPage/FireTestPage";
import { DefaultProfile } from "components/TypeDef";
import FireCreate from "components/FireCreate";
import { ReadDoc } from "components/FireRead";
import { VacationProvider } from "contexts/VacationContext";
import { AttendanceProvider } from "contexts/AttendanceContext";
import { ProfileDataProvider } from "contexts/ProfileContext";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage/Login";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage/News";
import Request from "./pages/RequestPage";
import styles from "./App.module.css";

function App() {
  const userDataString = localStorage.getItem("userData");
  const initialUserData = userDataString ? JSON.parse(userDataString) : {};
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userData, setUserData] = useState<User | null>(initialUserData);
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
        const target = data.user.email as string;

        ReadDoc("users", target)
          .then((Readdata) => {
            if (Readdata) {
              const profileData: DefaultProfile = {
                name: Readdata.name,
                email: Readdata.email,
                photoURL: Readdata.photoURL,
                phoneNumber: Readdata.phoneNumber,
                position: Readdata.position,
              };
              console.log(profileData);
              localStorage.setItem("userData", JSON.stringify(profileData));
            } else {
              const profileData: DefaultProfile = {
                name: data.user.displayName
                  ? data.user.displayName
                  : "성함을 입력해주세요",
                email: data.user.email as string,
                photoURL: data.user.photoURL
                  ? data.user.photoURL
                  : "https://i.stack.imgur.com/l60Hf.png",
                phoneNumber: data.user.phoneNumber
                  ? data.user.phoneNumber
                  : "휴대폰 번호를 입력해주세요",
                position: "포지션을 입력해주세요",
              };
              console.log(profileData);
              FireCreate("users", profileData);
              localStorage.setItem("userData", JSON.stringify(profileData));
            }
          })
          .catch((error) => {
            console.error("Error reading document:", error);
          });
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
      {pathname !== "/login" && <SideBar handleSignOut={handleSignOut} />}

      <div className={styles.content}>
        <VacationProvider>
          <ProfileDataProvider>
            <AttendanceProvider>
              <Routes>
                <Route
                  path="/login"
                  element={<LoginPage handleAuth={handleAuth} />}
                />
                <Route path="/" element={<MainPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/news" element={<NewsPage isMain={false} />} />
                <Route path="/TAA" element={<TAAListPage />} />
                <Route path="/request" element={<Request />} />
                <Route path="/fire" element={<FireTest />} />
              </Routes>
            </AttendanceProvider>
          </ProfileDataProvider>
        </VacationProvider>
      </div>
    </div>
  );
}

export default App;

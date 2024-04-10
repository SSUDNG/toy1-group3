import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase";
// unused 에러 일어남 ㅠ
console.log(app);

const Nav = () => {
  const initialUserData = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : {};
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(initialUserData);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (pathname === "/") {
          navigate("/main");
        }
      } else {
        navigate("/");
      }
    });
  }, [auth, navigate, pathname]);

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserData(data.user);
        localStorage.setItem("userData", JSON.stringify(data.user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserData({});
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <button onClick={handleAuth} type="button">
        로그인
      </button>
      <button onClick={handleSignOut} type="button">
        로그아웃
      </button>
      <img src={userData.photoURL} alt="profile" />
      <div>
        {userData
          ? `당신의 이름은 : ${userData.displayName}`
          : "로그인 버튼을 눌러주세요 :)"}
      </div>
    </>
  );
};

export default Nav;

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import app from "../firebase";

const Nav = () => {
  const userDataString = localStorage.getItem("userData");
  const initialUserData = userDataString ? JSON.parse(userDataString) : {};
  // const initialUserData = localStorage.getItem("userData")
  //   ? JSON.parse(localStorage.getItem("userData"))
  //   : {};

  // userData가 string 또는 null일 수 있으므로 Union 타입으로 지정
  // const userDataStringOrNull: string | null = localStorage.getItem("userData");

  // userData가 null이 아니면 JSON.parse()를 이용하여 객체로 변환
  // JSON.parse()의 반환값은 any이므로 타입 단언을 이용하여 처리
  // const initialUserData =
  //   userDataStringOrNull !== null
  //     ? (JSON.parse(userDataStringOrNull) as Record<string, unknown>) // JSON.parse()의 반환값을 Record<string, unknown>으로 지정
  //     : {}; // 기본값은 빈 객체

  // initialUserData의 타입은 Record<string, unknown> 또는 빈 객체 {}가 됩니다.
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<User | null>(initialUserData);

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
        const newData = data.user;
        // console.log(newData);
        setUserData(newData);
        localStorage.setItem("userData", JSON.stringify(data.user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserData(null);
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
      {userData && userData.photoURL && (
        <img src={userData.photoURL} alt="profile" />
      )}
    </>
  );
};

export default Nav;

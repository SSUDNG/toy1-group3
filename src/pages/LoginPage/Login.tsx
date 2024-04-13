import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import GoogleIcon from "@mui/icons-material/Google";
import styles from "./Login.module.css";

const index = () => {
  return (
    <StyledEngineProvider injectFirst>
      <div className={styles.loginWrap}>
        <div className={styles.loginLeft}>
          <p className={styles.head}>Login</p>
          <p className={styles.txt}>구글계정을 이용해 로그인해주세요.</p>
          <button type="button" className={styles.loginBtn}>
            <img src="/images/google-logo.png" alt="google" />
            <span>Continue with Google</span>
          </button>
        </div>
        <div>
          <img src="/images/login.png" alt="login" />
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default index;

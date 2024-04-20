import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./Login.module.css";

interface LoginPageProps {
  handleAuth: () => void;
}

const LoginPage = ({ handleAuth }: LoginPageProps) => {
  return (
    <StyledEngineProvider injectFirst>
      <div className={styles.loginWrap}>
        <div className={styles.loginLeft}>
          <p className={styles.head}>Login</p>
          <p className={styles.txt}>구글계정을 이용해 로그인해주세요.</p>
          <button
            type="button"
            className={styles.loginBtn}
            onClick={handleAuth}
          >
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

export default LoginPage;

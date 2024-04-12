import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
// import styles from "./Login.module.css";

const index = () => {
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <p>Login</p>
        <p>구글계정을 이용해 로그인해주세요.</p>
        <button type="button">Con</button>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </StyledEngineProvider>
  );
};

export default index;

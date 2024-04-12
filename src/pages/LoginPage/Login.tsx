import React from "react";
import Slider from "@mui/material/Slider";
import { StyledEngineProvider } from "@mui/material/styles";
import styles from "./Login.module.css";

const index = () => {
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <Slider defaultValue={30} />
        <Slider defaultValue={30} className={styles.slider} />
      </div>
    </StyledEngineProvider>
  );
};

export default index;

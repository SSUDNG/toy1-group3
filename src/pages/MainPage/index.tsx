import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Clock from "components/Clock";
import styles from "components/Clock.module.css";

function MainPage() {
  const navigate = useNavigate();
  const goToTAAList = () => {
    navigate("/TAA");
  };

  return (
    <div>
      <Button
        onClick={() => {
          goToTAAList();
        }}
      >
        근태신청목록
      </Button>
      <div className={styles.clock}>
        <Clock />
      </div>
    </div>
  );
}

export default MainPage;

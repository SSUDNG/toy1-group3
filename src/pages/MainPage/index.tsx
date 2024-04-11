import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function MainPage() {
  const navigate = useNavigate();
  const goToTAAList = () => {
    navigate("/TAA");
  };

  return (
    <Button
      onClick={() => {
        goToTAAList();
      }}
    >
      근태신청목록
    </Button>
  );
}

export default MainPage;

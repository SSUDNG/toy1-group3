import {
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../pages/TAAListPage/TAA.module.css";

interface TAAHeaderProps {
  current: string;
  onSelect: (type: string) => void;
}

function TAAHeader({ current, onSelect }: TAAHeaderProps) {
  const selectType = (e: SelectChangeEvent) => {
    onSelect(e.target.value);
  };
  const navigate = useNavigate();
  const goToResist = () => {
    navigate("/request");
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>
        <Typography variant="h1">근태신청 목록</Typography>
      </div>
      <div className={styles.right}>
        <FormControl sx={{ m: 0, minWidth: 120 }} size="small">
          <Select
            value={current}
            onChange={selectType}
            className={styles.selection}
          >
            <MenuItem value="전체">전체</MenuItem>
            <MenuItem value="연차">연차</MenuItem>
            <MenuItem value="반차">반차</MenuItem>
            <MenuItem value="병가">병가</MenuItem>
            <MenuItem value="조퇴">조퇴</MenuItem>
            <MenuItem value="기타">기타</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          size="medium"
          className={styles.btn}
          onClick={() => {
            goToResist();
          }}
        >
          근태신청하기
        </Button>
      </div>
    </div>
  );
}

export default TAAHeader;

import {
  Container,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
} from "@mui/material";
import React from "react";
import styles from "../pages/TAAListPage/TAA.module.css";

interface TAAHeaderProps {
  current: string;
  onSelect: (type: string) => void;
}

function TAAHeader({ current, onSelect }: TAAHeaderProps) {
  const selectType = (e: SelectChangeEvent) => {
    onSelect(e.target.value);
  };

  return (
    <Container className={styles.headerContainer}>
      <Container className={styles.title}>
        <h1>근태신청 목록</h1>
      </Container>
      <Container className={styles.right}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select value={current} onChange={selectType}>
            <MenuItem value="전체">전체</MenuItem>
            <MenuItem value="연차">연차</MenuItem>
            <MenuItem value="반차">반차</MenuItem>
            <MenuItem value="병가">병가</MenuItem>
            <MenuItem value="조퇴">조퇴</MenuItem>
            <MenuItem value="기타">기타</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" size="small">
          근태신청하기
        </Button>
      </Container>
    </Container>
  );
}

export default TAAHeader;

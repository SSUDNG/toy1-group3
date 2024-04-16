import React, { useState } from "react";
import { Button, TextField, MenuItem, FormControl, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "./Request.module.css";

const Request: React.FunctionComponent = () => {
  const [vacationType, setVacationType] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleReset = () => {
    setVacationType("");
    setStartDate(null);
    setEndDate(null);
    setReason("");
    setNotes("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Typography variant="h1">부재 신청</Typography>
      <Grid className={styles.grid} container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              select
              label="휴가 종류"
              value={vacationType}
              onChange={(e) => setVacationType(e.target.value as string)}
            >
              <MenuItem value="연차">연차</MenuItem>
              <MenuItem value="반차">반차</MenuItem>
              <MenuItem value="병가">병가</MenuItem>
              <MenuItem value="조퇴">조퇴</MenuItem>
              <MenuItem value="기타">기타</MenuItem>
            </TextField>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="시작일"
            type="date"
            fullWidth
            value={startDate ? startDate.toISOString().split("T")[0] : ""}
            onChange={(e) =>
              setStartDate(e.target.value ? new Date(e.target.value) : null)
            }
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="종료일"
            type="date"
            fullWidth
            value={endDate ? endDate.toISOString().split("T")[0] : ""}
            onChange={(e) =>
              setEndDate(e.target.value ? new Date(e.target.value) : null)
            }
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              select
              label="사유"
              value={reason}
              onChange={(e) => setReason(e.target.value as string)}
            >
              <MenuItem value="휴가">휴가</MenuItem>
              <MenuItem value="병원방문">병원방문</MenuItem>
              <MenuItem value="개인사유">개인사유</MenuItem>
              <MenuItem value="비상">비상</MenuItem>
              <MenuItem value="기타">기타</MenuItem>
            </TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="추가 정보"
            fullWidth
            multiline
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Button type="submit">신청하기</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" color="secondary" onClick={handleReset}>
            취소하기
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Request;

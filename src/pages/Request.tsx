import React, { useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";
import "./Request.css";

const Request: React.FunctionComponent = function Request() {
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
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>부재 신청</h1>
      <Grid className="grid-container" container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>휴가 종류</InputLabel>
            <Select
              value={vacationType}
              onChange={(e) => setVacationType(e.target.value as string)}
            >
              <MenuItem value="연차">연차</MenuItem>
              <MenuItem value="반차">반차</MenuItem>
              <MenuItem value="병가">병가</MenuItem>
              <MenuItem value="조퇴">조퇴</MenuItem>
              <MenuItem value="기타">기타</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="시작일"
            type="date"
            fullWidth
            value={startDate?.toISOString().split("T")[0]}
            onChange={(e) => setStartDate(new Date(e.target.value))}
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
            value={endDate?.toISOString().split("T")[0]}
            onChange={(e) => setEndDate(new Date(e.target.value))}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>사유</InputLabel>
            <Select
              value={reason}
              onChange={(e) => setReason(e.target.value as string)}
            >
              <MenuItem value="휴가">연차</MenuItem>
              <MenuItem value="병원방문">반차</MenuItem>
              <MenuItem value="개인사유">병가</MenuItem>
              <MenuItem value="비상">조퇴</MenuItem>
              <MenuItem value="기타">기타</MenuItem>
            </Select>
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
          <Button variant="contained" color="primary" type="submit">
            신청하기
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="secondary" onClick={handleReset}>
            취소하기
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Request;

import React, { useState } from "react";
import { Button, TextField, MenuItem, FormControl, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import styles from "./Request.module.css";

interface RequestData {
  vacationType: string;
  startDate: string | null;
  endDate: string | null;
  reason: string;
  notes: string;
}

const Request: React.FunctionComponent = () => {
  const [requestData, setRequestData] = useState<RequestData>({
    vacationType: "",
    startDate: null,
    endDate: null,
    reason: "",
    notes: "",
  });

  const isFormValid = () => {
    return (
      requestData.vacationType !== "" &&
      requestData.startDate !== null &&
      requestData.endDate !== null &&
      requestData.reason !== ""
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleReset = () => {
    setRequestData({
      vacationType: "",
      startDate: null,
      endDate: null,
      reason: "",
      notes: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Typography variant="h1">부재 신청</Typography>
      <Grid className={styles.grid} container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              select
              required
              label="휴가 종류"
              value={requestData.vacationType}
              onChange={(e) =>
                setRequestData({
                  ...requestData,
                  vacationType: e.target.value as string,
                })
              }
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
            required
            value={requestData.startDate || ""}
            onChange={(e) =>
              setRequestData({
                ...requestData,
                startDate: e.target.value || null,
              })
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
            required
            value={requestData.endDate || ""}
            onChange={(e) =>
              setRequestData({
                ...requestData,
                endDate: e.target.value || null,
              })
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
              required
              label="사유"
              value={requestData.reason}
              onChange={(e) =>
                setRequestData({
                  ...requestData,
                  reason: e.target.value as string,
                })
              }
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
            value={requestData.notes}
            onChange={(e) =>
              setRequestData({
                ...requestData,
                notes: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <Button type="submit" disabled={!isFormValid()}>
            신청하기
          </Button>
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

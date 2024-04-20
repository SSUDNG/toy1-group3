import React, { useState } from "react";
import { Button, TextField, MenuItem, FormControl, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useVacations, Vacation } from "contexts/VacationContext";
import ConfirmationModal from "../../components/RequestConfirm";
import styles from "./Request.module.css";

const Request: React.FunctionComponent = () => {
  const { addVacation } = useVacations();

  const userDataString = localStorage.getItem("userData");
  const userData = userDataString
    ? JSON.parse(userDataString)
    : "{name: 'none', email: 'none'}";

  const [requestData, setRequestData] = useState<Vacation>({
    name: userData.name,
    email: userData.email,
    vacationType: "",
    startDate: null,
    endDate: null,
    reason: "",
    notes: "",
  });

  const [openConfirm, setOpenConfirm] = useState(false);

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
    setOpenConfirm(true);
  };

  const handleConfirmSubmit = () => {
    addVacation(requestData);
    const savedRequests = JSON.parse(
      localStorage.getItem("vacationRequests") || "[]",
    );
    localStorage.setItem(
      "vacationRequests",
      JSON.stringify([...savedRequests, requestData]),
    );
    setRequestData({
      name: "",
      email: "",
      vacationType: "",
      startDate: null,
      endDate: null,
      reason: "",
      notes: "",
    });
    setOpenConfirm(false);
  };

  const handleCancelSubmit = () => {
    setOpenConfirm(false);
  };

  const handleReset = () => {
    setRequestData({
      name: "",
      email: "",
      vacationType: "",
      startDate: null,
      endDate: null,
      reason: "",
      notes: "",
    });
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Typography variant="h1">휴가 신청</Typography>
        <Grid className={styles.grid} container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                select
                required
                color="secondary"
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
              color="secondary"
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
              color="secondary"
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
                color="secondary"
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
              color="secondary"
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
          <div className={styles.btnContainer}>
            <Button type="submit" disabled={!isFormValid()}>
              휴가 신청
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              disabled={!isFormValid()}
              onClick={handleReset}
            >
              취소
            </Button>
          </div>
        </Grid>
      </form>
      <ConfirmationModal
        open={openConfirm}
        onClose={handleCancelSubmit}
        onConfirm={handleConfirmSubmit}
      />
    </>
  );
};

export default Request;

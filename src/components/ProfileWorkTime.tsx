import React, { useRef, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import useOnClickOutside from "hooks/useOnClickOutside";
import styles from "../pages/ProfilePage/profilePage.module.css";
import { useAttendance } from "../contexts/AttendanceContext";

const ProfileWorkTime = () => {
  const [confirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);
  const { attendanceData, updateAttendanceData } = useAttendance();
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    setConfirmModalOpen(false);
  });

  const handleConfirmStartWork = () => {
    const currentTime = new Date().toLocaleTimeString();
    updateAttendanceData({
      startTime: currentTime,
      working: true,
    });
    setConfirmModalOpen(false);
  };

  const handleConfirmEndWork = () => {
    const currentTime = new Date().toLocaleTimeString();
    updateAttendanceData({
      endTime: currentTime,
      working: false,
      isBtnValid: false,
    });
    setConfirmModalOpen(false);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box className={styles.infoItem}>
            <span>출근 시간</span>
            <span>{attendanceData.startTime || "-"}</span>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={styles.infoItem}>
            <span>퇴근 시간</span>
            <span>{attendanceData.endTime || "-"}</span>
          </Box>
        </Grid>

        <Grid item xs={12} className={styles.workBtn}>
          {!attendanceData.working ? (
            <Button
              onClick={() => setConfirmModalOpen(true)}
              disabled={!attendanceData.isBtnValid}
            >
              출근하기
            </Button>
          ) : (
            <Button onClick={() => setConfirmModalOpen(true)}>퇴근하기</Button>
          )}
        </Grid>
      </Grid>

      {confirmModalOpen && (
        <div className={styles.modalBg}>
          <div ref={ref} className={styles.confirmModal}>
            <HourglassEmptyIcon fontSize="large" />
            {!attendanceData.working ? (
              <p>근무를 시작하시겠습니까?</p>
            ) : (
              <p>근무를 종료하시겠습니까?</p>
            )}
            <div className={styles.modalBot}>
              <Button
                onClick={
                  !attendanceData.working
                    ? handleConfirmStartWork
                    : handleConfirmEndWork
                }
              >
                확인
              </Button>
              <Button onClick={() => setConfirmModalOpen(false)}>취소</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileWorkTime;

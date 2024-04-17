import React, { useRef, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import useOnClickOutside from "hooks/useOnClickOutside";
import { ProfileData } from "./TypeDef";
import styles from "../pages/ProfilePage/profilePage.module.css";

interface WorkTimeProps {
  profileData: Partial<ProfileData>;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
}
const ProfileWorkTime: React.FC<WorkTimeProps> = ({
  profileData,
  setProfileData,
}) => {
  const [confirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);
  const [working, setWorking] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    setConfirmModalOpen(false);
  });

  const handleConfirmStartWork = () => {
    const currentTime = new Date().toLocaleTimeString();
    setProfileData((prevData) => ({
      ...prevData,
      startTime: currentTime,
      working: true,
    }));
    setConfirmModalOpen(false);
    setWorking(true);
  };
  const handleConfirmEndWork = () => {
    const currentTime = new Date().toLocaleTimeString();
    setProfileData((prevData) => ({
      ...prevData,
      endTime: currentTime,
      working: false,
    }));
    setConfirmModalOpen(false);
    setWorking(false);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box className={styles.infoItem}>
            <span>출근 시간</span>
            <span>{profileData.startTime || "-"}</span>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={styles.infoItem}>
            <span>퇴근 시간</span>
            <span>{profileData.endTime || "-"}</span>
          </Box>
        </Grid>

        <Grid item xs={12} className={styles.workBtn}>
          {!working ? (
            <Button onClick={() => setConfirmModalOpen(true)}>출근하기</Button>
          ) : (
            <Button onClick={() => setConfirmModalOpen(true)}>퇴근하기</Button>
          )}
        </Grid>
      </Grid>

      {confirmModalOpen && (
        <div className={styles.modalBg}>
          <div ref={ref} className={styles.confirmModal}>
            <HourglassEmptyIcon fontSize="large" />
            {!working ? (
              <p>근무를 시작하시겠습니까?</p>
            ) : (
              <p>근무를 종료하시겠습니까?</p>
            )}
            <div className={styles.modalBot}>
              <Button
                onClick={
                  !working ? handleConfirmStartWork : handleConfirmEndWork
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

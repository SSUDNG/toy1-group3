import React, { useState, useRef } from "react";
import {
  Grid,
  TextField,
  Box,
  Typography,
  Container,
  Button,
} from "@mui/material";
import useOnClickOutside from "hooks/useOnClickOutside";
import styles from "../pages/ProfilePage/profilePage.module.css";
import { ProfileData } from "./TypeDef";

interface InfoProps {
  profileData: Partial<ProfileData>;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
}

const ProfileInfo: React.FC<InfoProps> = ({ profileData, setProfileData }) => {
  const [confirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);
  const [working, setWorking] = useState<boolean>(false);

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
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    setConfirmModalOpen(false);
  });

  return (
    <Container className={styles.infoContainer}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box className={styles.photoBox}>
            <img
              src={
                profileData.photoURL
                  ? profileData.photoURL
                  : "/images/profileDefault.jpeg"
              }
              alt={profileData.name}
            />
            <Typography variant="h3">{profileData.name}</Typography>
            <Box display="flex" alignItems="center">
              <Box
                width={15}
                height={15}
                borderRadius="50%"
                bgcolor={profileData.working ? "#00d603" : "#BDBDBD"}
                mr={1}
              />
              <Typography variant="body1">
                {profileData.working ? "근무중" : "근무중 아님"}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={styles.infoBox}>
            <Box>
              <Typography variant="h6">Position</Typography>
              <TextField
                disabled
                defaultValue={profileData.position}
                variant="outlined"
                className={styles.textField}
              />
            </Box>
            <Box>
              <Typography variant="h6">Email</Typography>
              <TextField
                disabled
                defaultValue={profileData.email}
                variant="outlined"
                className={styles.textField}
              />
            </Box>
            <Box>
              <Typography variant="h6">Phone</Typography>
              <TextField
                disabled
                defaultValue={profileData.phoneNumber}
                placeholder="-"
                variant="outlined"
                className={styles.textField}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      {!working ? (
        <Button onClick={() => setConfirmModalOpen(true)}>출근하기</Button>
      ) : (
        <Button onClick={() => setConfirmModalOpen(true)}>퇴근하기</Button>
      )}
      {confirmModalOpen && (
        <Box ref={ref} className={styles.confirmModal}>
          {!working ? (
            <p>근무를 시작하시겠습니까?</p>
          ) : (
            <p>근무를 종료하시겠습니까?</p>
          )}
          <div>
            <Button
              onClick={!working ? handleConfirmStartWork : handleConfirmEndWork}
            >
              확인
            </Button>
            <Button onClick={() => setConfirmModalOpen(false)}>취소</Button>
          </div>
        </Box>
      )}
    </Container>
  );
};

export default ProfileInfo;

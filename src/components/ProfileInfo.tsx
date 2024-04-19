import React from "react";
import { Grid, Box, Typography } from "@mui/material";

import styles from "../pages/ProfilePage/profilePage.module.css";
import { useAttendance } from "../contexts/AttendanceContext";
import { useProfileData } from "../contexts/ProfileContext";

interface Props {
  path: string;
}

const ProfileInfo: React.FC<Props> = ({ path }) => {
  const { attendanceData } = useAttendance();
  const { profileData } = useProfileData();
  return (
    <Grid container spacing={2} className={styles.infoContainer}>
      <Grid item xs={path !== "main" ? 6 : 12} className={styles.photoBox}>
        <img
          src={
            profileData.photoURL
              ? profileData.photoURL
              : "/images/profileDefault.jpeg"
          }
          alt={profileData.name}
        />
        <Typography variant="h2">{profileData.name}</Typography>
        <Box display="flex" alignItems="center">
          <Box
            width={15}
            height={15}
            borderRadius="50%"
            bgcolor={attendanceData.working ? "#00d603" : "#BDBDBD"}
            mr={1}
          />
          <Typography variant="body1">
            {attendanceData.working ? "근무중" : "근무중 아님"}
          </Typography>
        </Box>
      </Grid>
      {path !== "main" ? (
        <Grid item xs={6}>
          <Box className={styles.infoBox}>
            <Box className={styles.infoItem}>
              <span>Position</span>
              <Typography variant="body1">{profileData.position}</Typography>
            </Box>
            <Box className={styles.infoItem}>
              <span>Email</span>
              <Typography variant="body1">{profileData.email}</Typography>
            </Box>
            <Box className={styles.infoItem}>
              <span>Phone</span>
              <Typography variant="body1">{profileData.phoneNumber}</Typography>
            </Box>
          </Box>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default ProfileInfo;

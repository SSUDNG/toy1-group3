import React from "react";
import { Grid, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import profileStyles from "../pages/ProfilePage/profilePage.module.css";
import mainStyles from "../pages/MainPage/Main.module.css";
import { useAttendance } from "../contexts/AttendanceContext";
import { useProfileData } from "../contexts/ProfileContext";

interface Props {
  path: string;
}

const ProfileInfo: React.FC<Props> = ({ path }) => {
  const { attendanceData } = useAttendance();
  const { profileData } = useProfileData();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const infoContClass =
    path === "main"
      ? mainStyles.infoContainerMain
      : profileStyles.infoContainer;
  const photoBoxClass =
    path === "main" ? mainStyles.photoBoxMain : profileStyles.photoBox;
  const workTimeClass =
    path === "main" ? mainStyles.workTimeMain : profileStyles.workTime;
  return (
    <Grid
      container
      spacing={2}
      className={infoContClass}
      direction={isSmallScreen ? "column" : "row"}
    >
      <Grid container direction="column" className={photoBoxClass} item xs={6}>
        <img
          src={
            profileData.photoURL
              ? profileData.photoURL
              : "/images/profileDefault.jpeg"
          }
          alt={profileData.name}
        />
        <Typography variant="h2">{profileData.name}</Typography>
        <Box className={workTimeClass} display="flex" alignItems="center">
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
          <Box className={profileStyles.infoBox}>
            <Box className={profileStyles.infoItem}>
              <span>Position</span>
              <Typography variant="body1">{profileData.position}</Typography>
            </Box>
            <Box className={profileStyles.infoItem}>
              <span>Email</span>
              <Typography variant="body1">{profileData.email}</Typography>
            </Box>
            <Box className={profileStyles.infoItem}>
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

import React from "react";
import { Grid, Box, Typography } from "@mui/material";

import styles from "../pages/ProfilePage/profilePage.module.css";
import { ProfileData } from "./TypeDef";

interface InfoProps {
  profileData: Partial<ProfileData>;
}

const ProfileInfo: React.FC<InfoProps> = ({ profileData }) => {
  return (
    <Grid container spacing={2} className={styles.infoContainer}>
      <Grid direction="column" className={styles.photoBox} item xs={6}>
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
            bgcolor={profileData.working ? "#00d603" : "#BDBDBD"}
            mr={1}
          />
          <Typography variant="body1">
            {profileData.working ? "근무중" : "근무중 아님"}
          </Typography>
        </Box>
      </Grid>
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
    </Grid>
  );
};

export default ProfileInfo;

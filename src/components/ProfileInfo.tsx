import React from "react";
import {
  Grid,
  TextField,
  Box,
  Typography,
  Avatar,
  Container,
} from "@mui/material";
import styles from "../pages/ProfilePage/profilePage.module.css";

interface ProfileData {
  name: string;
  phoneNumber: string;
  email: string;
  position: string;
  startTime: string | null;
  endTime: string | null;
  photoURL: string;
  working: boolean;
}

const ProfileInfo: React.FC<{ profileData: ProfileData }> = ({
  profileData,
}) => {
  return (
    <Container className={styles.infoContainer}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box className={styles.photoBox}>
            <Avatar
              src={profileData.photoURL ? profileData.photoURL : ""}
              sx={{
                width: 111,
                height: 111,
                bgcolor: "transparent",
                border: "1px solid black",
              }}
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
        <Grid item xs={4}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box>
              <Typography variant="h6">Position</Typography>
              <TextField
                disabled
                defaultValue={profileData.position}
                variant="outlined"
              />
            </Box>
            <Box>
              <Typography variant="h6">Email</Typography>
              <TextField
                disabled
                defaultValue={profileData.email}
                variant="outlined"
              />
            </Box>
            <Box>
              <Typography variant="h6">Phone</Typography>
              <TextField
                disabled
                defaultValue={profileData.phoneNumber}
                placeholder="-"
                variant="outlined"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileInfo;

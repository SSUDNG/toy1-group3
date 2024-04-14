import React from "react";
import { Grid, TextField, Box, Typography, Avatar } from "@mui/material";

interface ProfileData {
  name: string;
  phoneNumber: string;
  email: string;
  position: string;
  startTime: string | null;
  endTime: string | null;
  profilePicture: string;
  working: boolean;
}

const ProfileInfo: React.FC<{ profileData: ProfileData }> = ({
  profileData,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            src={profileData.profilePicture ? profileData.profilePicture : ""}
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Position"
            defaultValue={profileData.position}
            variant="outlined"
          />
          <TextField
            label="Email"
            defaultValue={profileData.email}
            variant="outlined"
          />
          <TextField
            label="Phone Number"
            defaultValue={profileData.phoneNumber}
            placeholder="-"
            variant="outlined"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfileInfo;

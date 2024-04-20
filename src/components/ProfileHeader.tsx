import { Container, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";

interface HeaderProps {
  setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProfileHeader: React.FC<HeaderProps> = ({ setEditModalOpen }) => {
  const handleEditProfile = () => {
    setEditModalOpen(true);
  };
  return (
    <Container style={{ padding: 0 }}>
      <Typography variant="h1">
        프로필{" "}
        <IconButton onClick={handleEditProfile}>
          <EditIcon />
        </IconButton>
      </Typography>
    </Container>
  );
};

export default ProfileHeader;

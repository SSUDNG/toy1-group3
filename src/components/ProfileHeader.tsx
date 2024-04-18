import { Container, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { ProfileData } from "components/TypeDef";

interface HeaderProps {
  profileData: Partial<ProfileData>;
  setEditProfile: React.Dispatch<React.SetStateAction<Partial<ProfileData>>>;
  setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProfileHeader: React.FC<HeaderProps> = ({
  profileData,
  setEditProfile,
  setEditModalOpen,
}) => {
  const handleEditProfile = () => {
    setEditProfile({
      name: profileData.name,
      phoneNumber: profileData.phoneNumber,
      email: profileData.email,
      position: profileData.position,
      photoURL: profileData.photoURL,
    });
    setEditModalOpen(true);
  };
  return (
    <Container style={{ padding: 0 }}>
      <Typography variant="h1">
        프로필{" "}
        <IconButton>
          <EditIcon onClick={handleEditProfile} />
        </IconButton>
      </Typography>
    </Container>
  );
};

export default ProfileHeader;

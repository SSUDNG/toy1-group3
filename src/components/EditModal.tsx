import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { ProfileData } from "./TypeDef";
import styles from "../pages/ProfilePage/profilePage.module.css";

interface EditModalProps {
  editProfile: Partial<ProfileData>;
  profileData: Partial<ProfileData>;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
  setEditProfile: React.Dispatch<React.SetStateAction<Partial<ProfileData>>>;
  setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditModal: React.FC<EditModalProps> = ({
  editProfile,
  profileData,
  setProfileData,
  setEditProfile,
  setEditModalOpen,
}) => {
  const handleChange = (key: keyof Partial<ProfileData>, value: string) => {
    setEditProfile((prevProfile) => ({
      ...prevProfile,
      [key]: value,
    }));
  };

  const handleSaveEdit = () => {
    setProfileData((prevData) => ({
      ...prevData,
      name: editProfile.name !== undefined ? editProfile.name : prevData.name,
      phoneNumber:
        editProfile.phoneNumber !== undefined
          ? editProfile.phoneNumber
          : prevData.phoneNumber,
      email:
        editProfile.email !== undefined ? editProfile.email : prevData.email,
      position:
        editProfile.position !== undefined
          ? editProfile.position
          : prevData.position,
      photoURL:
        editProfile.photoURL !== undefined
          ? editProfile.photoURL
          : prevData.photoURL,
    }));
    setEditModalOpen(false);
  };

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditProfile((prevProfile) => ({
        ...prevProfile,
        photoURL: reader.result as string,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container className={styles.editModal}>
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
            <input
              type="file"
              accept="image/*"
              onChange={handlePictureChange}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography variant="h6">Name</Typography>
            <TextField
              type="text"
              value={editProfile.name || ""}
              className={styles.textField}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </Box>
          <Box>
            <Typography variant="h6">Phone</Typography>
            <TextField
              type="text"
              value={editProfile.phoneNumber || ""}
              className={styles.textField}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
            />
          </Box>
          <Box>
            <Typography variant="h6">Email</Typography>
            <TextField
              type="text"
              value={editProfile.email || ""}
              className={styles.textField}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </Box>
          <Box>
            <Typography variant="h6">Position</Typography>
            <TextField
              type="text"
              value={editProfile.position || ""}
              className={styles.textField}
              onChange={(e) => handleChange("position", e.target.value)}
            />
          </Box>
        </Grid>
      </Grid>
      <Button onClick={handleSaveEdit}>저 장</Button>
      <Button onClick={() => setEditModalOpen(false)}>취 소</Button>
    </Container>
  );
};

export default EditModal;

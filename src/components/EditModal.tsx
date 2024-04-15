import React from "react";
import { Button, Container, TextField } from "@mui/material";
import { ProfileData } from "./TypeDef";
import styles from "../pages/ProfilePage/profilePage.module.css";

interface EditModalProps {
  editProfile: Partial<ProfileData>;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
  setEditProfile: React.Dispatch<React.SetStateAction<Partial<ProfileData>>>;
  setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditModal: React.FC<EditModalProps> = ({
  editProfile,
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
      <form>
        <TextField
          type="text"
          value={editProfile.name || ""}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <TextField
          type="text"
          value={editProfile.phoneNumber || ""}
          onChange={(e) => handleChange("phoneNumber", e.target.value)}
        />
        <TextField
          type="text"
          value={editProfile.email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <TextField
          type="text"
          value={editProfile.position || ""}
          onChange={(e) => handleChange("position", e.target.value)}
        />
        <input type="file" accept="image/*" onChange={handlePictureChange} />
        <Button onClick={handleSaveEdit}>저 장</Button>
        <Button onClick={() => setEditModalOpen(false)}>취 소</Button>
      </form>
    </Container>
  );
};

export default EditModal;

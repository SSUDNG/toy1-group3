import React, { useRef } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import useOnClickOutside from "hooks/useOnClickOutside";
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

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    setEditModalOpen(false);
  });
  return (
    <div className={styles.modalBg}>
      <div className={styles.editModal} ref={ref}>
        <Typography variant="h1">프로필 편집</Typography>
        <div className={styles.editModalBody}>
          <div className={styles.photoBox}>
            <img
              src={
                editProfile.photoURL
                  ? editProfile.photoURL
                  : "/images/profileDefault.jpeg"
              }
              alt={profileData.name}
            />
            <label htmlFor="uploadInput" className={styles.InputLabel}>
              {" "}
              <UploadFileIcon name="upload" />
              <input
                className={styles.uploadInput}
                id="uploadInput"
                type="file"
                accept="image/*"
                onChange={handlePictureChange}
              />
            </label>
          </div>
          <div className={styles.editModalBodyInput}>
            <div>
              <Typography variant="body2">Name</Typography>
              <TextField
                type="text"
                value={editProfile.name || ""}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div>
              <Typography variant="body2">Phone</Typography>
              <TextField
                type="text"
                value={editProfile.phoneNumber || ""}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
              />
            </div>
            <div>
              <Typography variant="body2">Email</Typography>
              <TextField
                type="text"
                value={editProfile.email || ""}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div>
              <Typography variant="body2">Position</Typography>
              <TextField
                type="text"
                value={editProfile.position || ""}
                onChange={(e) => handleChange("position", e.target.value)}
              />
            </div>
          </div>
        </div>
        <Box className={styles.modalBot}>
          <Button onClick={handleSaveEdit}>저장</Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setEditModalOpen(false)}
          >
            취소
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default EditModal;

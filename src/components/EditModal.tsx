import React, { useRef, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import useOnClickOutside from "hooks/useOnClickOutside";
import { ProfileData } from "./TypeDef";
import styles from "../pages/ProfilePage/profilePage.module.css";
import { useProfileData } from "../contexts/ProfileContext";

interface EditModalProps {
  setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditModal: React.FC<EditModalProps> = ({ setEditModalOpen }) => {
  const { profileData, updateProfileData } = useProfileData();
  const [editProfile, setEditProfile] = useState<ProfileData>(profileData);

  const handleChange = (key: keyof Partial<ProfileData>, value: string) => {
    setEditProfile((prevProfile) => ({
      ...prevProfile,
      [key]: value,
    }));
  };

  const handleSaveEdit = () => {
    updateProfileData(editProfile);
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
              alt={editProfile.name}
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
                color="secondary"
                value={editProfile.name || ""}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div>
              <Typography variant="body2">Phone</Typography>
              <TextField
                type="text"
                color="secondary"
                value={editProfile.phoneNumber || ""}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
              />
            </div>
            <div>
              <Typography variant="body2">Email</Typography>
              <TextField
                disabled
                type="text"
                color="secondary"
                value={editProfile.email || ""}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div>
              <Typography variant="body2">Position</Typography>
              <TextField
                type="text"
                color="secondary"
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

import React, { useState, useRef } from "react";
import ProfileInfo from "components/ProfileInfo";
import { Button, Container } from "@mui/material";
import { ProfileData } from "components/TypeDef";
import EditModal from "components/EditModal";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import styles from "./profilePage.module.css";

const ProfilePage: React.FC = () => {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "김민수",
    phoneNumber: "010-1234-5678",
    email: "ssudng2716@gmail.com",
    position: "FE",
    startTime: null,
    endTime: null,
    photoURL: "",
    working: false,
  });
  const [editProfile, setEditProfile] = useState<Partial<ProfileData>>({
    name: "",
    phoneNumber: "",
    email: "",
    position: "",
    photoURL: "",
  });

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
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    setEditModalOpen(false);
  });

  return (
    <Container className={styles.pageContainer}>
      <h1>Profile</h1>
      <ProfileInfo profileData={profileData} setProfileData={setProfileData} />
      <Button onClick={handleEditProfile}>편집</Button>
      {editModalOpen && (
        <EditModal
          editProfile={editProfile}
          profileData={profileData}
          setProfileData={setProfileData}
          setEditProfile={setEditProfile}
          setEditModalOpen={setEditModalOpen}
        />
      )}
    </Container>
  );
};

export default ProfilePage;

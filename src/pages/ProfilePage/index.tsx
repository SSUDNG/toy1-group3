import React, { useState, useRef } from "react";
import ProfileInfo from "components/ProfileInfo";
import { Box, Button, Container } from "@mui/material";
import { ProfileData } from "components/TypeDef";
import EditModal from "components/EditModal";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import styles from "./profilePage.module.css";

const ProfilePage: React.FC = () => {
  const [confirmModalOpen, setConfirmModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [working, setWorking] = useState<boolean>(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "김민수",
    phoneNumber: "010-1234-5678",
    email: "ssudng2716@gmail.com",
    position: "FE",
    startTime: null,
    endTime: null,
    photoURL: "default.jpg",
    working: false,
  });
  const [editProfile, setEditProfile] = useState<Partial<ProfileData>>({
    name: "",
    phoneNumber: "",
    email: "",
    position: "",
    photoURL: "",
  });

  const handleConfirmStartWork = () => {
    const currentTime = new Date().toLocaleTimeString();
    setProfileData((prevData) => ({
      ...prevData,
      startTime: currentTime,
      working: true,
    }));
    setConfirmModalOpen(false);
    setWorking(true);
  };

  const handleConfirmEndWork = () => {
    const currentTime = new Date().toLocaleTimeString();
    setProfileData((prevData) => ({
      ...prevData,
      endTime: currentTime,
      working: false,
    }));
    setConfirmModalOpen(false);
    setWorking(false);
  };

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
    setConfirmModalOpen(false);
    setEditModalOpen(false);
  });

  return (
    <Container className={styles.profilePage}>
      <h1>Profile</h1>
      <ProfileInfo profileData={profileData} />
      {!working ? (
        <Button onClick={() => setConfirmModalOpen(true)}>근무 시작</Button>
      ) : (
        <Button onClick={() => setConfirmModalOpen(true)}>근무 종료</Button>
      )}

      <Button onClick={handleEditProfile}>편집</Button>

      {confirmModalOpen && (
        <Container>
          <Box ref={ref}>
            {!working ? (
              <p>근무를 시작하시겠습니까?</p>
            ) : (
              <p>근무를 종료하시겠습니까?</p>
            )}
            <Button
              onClick={!working ? handleConfirmStartWork : handleConfirmEndWork}
            >
              확인
            </Button>
            <Button onClick={() => setConfirmModalOpen(false)}>취소</Button>
          </Box>
        </Container>
      )}
      {editModalOpen && (
        <EditModal
          editProfile={editProfile}
          setProfileData={setProfileData}
          setEditProfile={setEditProfile}
          setEditModalOpen={setEditModalOpen}
        />
      )}
    </Container>
  );
};

export default ProfilePage;

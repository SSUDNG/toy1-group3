import React, { useState, useRef } from "react";
import styled from "styled-components";
import ProfileInfo from "components/ProfileInfo";
import { Button } from "@mui/material";
import useOnClickOutside from "../../hooks/useOnClickOutside";

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

const ProfileContainer = styled.div`
  position: relative;
  width: 1000px;
  height: 100%;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

const EditInput = styled.input`
  margin-bottom: 10px;
`;

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

  const handleSaveEdit = () => {
    setProfileData({
      ...profileData,
      name: editProfile.name || profileData.name,
      phoneNumber: editProfile.phoneNumber || profileData.phoneNumber,
      email: editProfile.email || profileData.email,
      position: editProfile.position || profileData.position,
      photoURL: editProfile.photoURL || profileData.photoURL,
    });
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
    setConfirmModalOpen(false);
    setEditModalOpen(false);
  });

  return (
    <ProfileContainer>
      <h1>Profile</h1>
      <ProfileInfo profileData={profileData} />
      {!working ? (
        <Button onClick={() => setConfirmModalOpen(true)}>근무 시작</Button>
      ) : (
        <Button onClick={() => setConfirmModalOpen(true)}>근무 종료</Button>
      )}

      <Button onClick={handleEditProfile}>편집</Button>

      {confirmModalOpen && (
        <ModalContainer>
          <ModalContent ref={ref}>
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
          </ModalContent>
        </ModalContainer>
      )}
      {editModalOpen && (
        <ModalContainer>
          <ModalContent ref={ref}>
            <EditInput
              type="text"
              value={editProfile.name || ""}
              onChange={(e) =>
                setEditProfile((prevProfile) => ({
                  ...prevProfile,
                  name: e.target.value,
                }))
              }
            />
            <EditInput
              type="text"
              value={editProfile.phoneNumber || ""}
              onChange={(e) =>
                setEditProfile((prevProfile) => ({
                  ...prevProfile,
                  phoneNumber: e.target.value,
                }))
              }
            />
            <EditInput
              type="text"
              value={editProfile.email || ""}
              onChange={(e) =>
                setEditProfile((prevProfile) => ({
                  ...prevProfile,
                  email: e.target.value,
                }))
              }
            />
            <EditInput
              type="text"
              value={editProfile.position || ""}
              onChange={(e) =>
                setEditProfile((prevProfile) => ({
                  ...prevProfile,
                  position: e.target.value,
                }))
              }
            />
            <input
              type="file"
              accept="image/*"
              onChange={handlePictureChange}
            />
            <Button onClick={handleSaveEdit}>저 장</Button>
            <Button onClick={() => setEditModalOpen(false)}>취 소</Button>
          </ModalContent>
        </ModalContainer>
      )}
    </ProfileContainer>
  );
};

export default ProfilePage;

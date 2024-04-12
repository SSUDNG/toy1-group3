import React, { useState, useRef } from "react";
import styled from "styled-components";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface ProfileData {
  name: string;
  phoneNumber: string;
  email: string;
  position: string;
  startTime: string | null;
  endTime: string | null;
  status: string;
  profilePicture: string;
}

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 95vw;
  height: 95vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: grey;
  border-radius: 50px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: royalblue;
  color: white;
  border: none;
  cursor: pointer;
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

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ProfilePage: React.FC = () => {
  const [startModalOpen, setStartModalOpen] = useState<boolean>(false);
  const [endModalOpen, setEndModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [working, setWorking] = useState<boolean>(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "김민수",
    phoneNumber: "010-1234-5678",
    email: "ssudng2716@gmail.com",
    position: "FE",
    startTime: null,
    endTime: null,
    status: "근무 중 아님",
    profilePicture: "default.jpg",
  });
  const [editProfile, setEditProfile] = useState<Partial<ProfileData>>({
    name: "",
    phoneNumber: "",
    email: "",
    position: "",
    profilePicture: "",
  });

  const handleStartWork = () => {
    setStartModalOpen(true);
  };

  const handleConfirmStartWork = () => {
    const currentTime = new Date().toLocaleTimeString();
    setProfileData((prevData) => ({
      ...prevData,
      startTime: currentTime,
      status: "근무 중",
    }));
    setStartModalOpen(false);
    setWorking(true);
  };

  const handleEndWork = () => {
    setEndModalOpen(true);
  };

  const handleConfirmEndWork = () => {
    const currentTime = new Date().toLocaleTimeString();
    setProfileData((prevData) => ({
      ...prevData,
      endTime: currentTime,
      status: "Not Working",
    }));
    setEndModalOpen(false);
    setWorking(false);
  };

  const handleEditProfile = () => {
    setEditProfile({
      name: profileData.name,
      phoneNumber: profileData.phoneNumber,
      email: profileData.email,
      position: profileData.position,
      profilePicture: profileData.profilePicture,
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
      profilePicture: editProfile.profilePicture || profileData.profilePicture,
    });
    setEditModalOpen(false);
  };

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditProfile((prevProfile) => ({
        ...prevProfile,
        profilePicture: reader.result as string,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    setStartModalOpen(false);
    setEditModalOpen(false);
    setEndModalOpen(false);
  });

  return (
    <ProfileContainer>
      <h1>Profile</h1>
      <ProfilePicture src={profileData.profilePicture} alt="Profile" />
      <h2>{profileData.name}</h2>
      <p>Phone: {profileData.phoneNumber}</p>
      <p>Email: {profileData.email}</p>
      <p>Position: {profileData.position}</p>
      <p>출근시간: {profileData.startTime ? profileData.startTime : "-"}</p>
      <p>퇴근시간: {profileData.endTime ? profileData.endTime : "-"}</p>
      <p>근무상태: {profileData.status}</p>

      {!working ? (
        <Button onClick={handleStartWork}>근무 시작</Button>
      ) : (
        <Button onClick={handleEndWork}>근무 종료</Button>
      )}

      <Button onClick={handleEditProfile}>편집</Button>

      {startModalOpen && (
        <ModalContainer>
          <ModalContent ref={ref}>
            <p>근무를 시작하시겠습니까?</p>
            <Button onClick={handleConfirmStartWork}>확인</Button>
            <Button onClick={() => setStartModalOpen(false)}>취소</Button>
          </ModalContent>
        </ModalContainer>
      )}

      {endModalOpen && (
        <ModalContainer>
          <ModalContent ref={ref}>
            <p>근무를 종료하시겠습니까?</p>
            <Button onClick={handleConfirmEndWork}>확인</Button>
            <Button onClick={() => setEndModalOpen(false)}>취소</Button>
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

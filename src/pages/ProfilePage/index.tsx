import React, { useState, useRef } from "react";
import ProfileInfo from "components/ProfileInfo";
import { ProfileData } from "components/TypeDef";
import EditModal from "components/EditModal";
import ProfileHeader from "components/ProfileHeader";
import ProfileWorkTime from "components/ProfileWorkTime";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import styles from "./profilePage.module.css";

const ProfilePage: React.FC = () => {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "김민수",
    phoneNumber: "010-1234-5678",
    email: "ssudng2716@gmail.com",
    position: "FE",
    startTime: "",
    endTime: "",
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

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    setEditModalOpen(false);
  });

  return (
    <div className={styles.pageContainer}>
      <ProfileHeader
        profileData={profileData}
        setEditProfile={setEditProfile}
        setEditModalOpen={setEditModalOpen}
      />
      <ProfileInfo profileData={profileData} />
      <ProfileWorkTime />
      {editModalOpen && (
        <EditModal
          editProfile={editProfile}
          profileData={profileData}
          setProfileData={setProfileData}
          setEditProfile={setEditProfile}
          setEditModalOpen={setEditModalOpen}
        />
      )}
    </div>
  );
};

export default ProfilePage;

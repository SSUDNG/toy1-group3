import React, { useState, useRef } from "react";
import ProfileInfo from "components/ProfileInfo";
import EditModal from "components/EditModal";
import ProfileHeader from "components/ProfileHeader";
import ProfileWorkTime from "components/ProfileWorkTime";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import styles from "./profilePage.module.css";

const ProfilePage: React.FC = () => {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    setEditModalOpen(false);
  });

  return (
    <div className={styles.pageContainer}>
      <ProfileHeader setEditModalOpen={setEditModalOpen} />
      <ProfileInfo path="profile" />
      <ProfileWorkTime />
      {editModalOpen && <EditModal setEditModalOpen={setEditModalOpen} />}
    </div>
  );
};

export default ProfilePage;

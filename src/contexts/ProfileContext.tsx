import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { ProfileData } from "../components/TypeDef";

interface ProfileDataContextType {
  profileData: ProfileData;
  updateProfileData: (data: Partial<ProfileData>) => void;
}

const initialProfileDataContext: ProfileDataContextType = {
  profileData: {
    email: "",
    name: "",
    phoneNumber: "",
    photoURL: "",
    position: "",
  },
  updateProfileData: () => {},
};

export const ProfileDataContext = createContext<ProfileDataContextType>(
  initialProfileDataContext,
);

export const useProfileData = () => useContext(ProfileDataContext);

export const ProfileDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [profileData, setProfileData] = useState<ProfileData>(
    initialProfileDataContext.profileData,
  );

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userDataString = localStorage.getItem("userData");
        const userData = userDataString ? JSON.parse(userDataString) : null;
        setProfileData(userData);
        console.log(userData);
      } catch (error) {
        console.error("Error fetching attendance data: ", error);
      }
    };

    fetchProfileData();
  }, []);

  const updateProfileData = async (data: Partial<ProfileData>) => {
    try {
      const userDataString = localStorage.getItem("userData");
      const userData = userDataString ? JSON.parse(userDataString) : null;
      const userEmail = userData.email;
      const userRef = doc(db, "users", userEmail);
      await setDoc(userRef, data, { merge: true });
      localStorage.setItem("userData", JSON.stringify(data));
      setProfileData((prevData) => ({
        ...prevData,
        ...data,
      }));
    } catch (error) {
      console.error("Error updating attendance data: ", error);
    }
  };

  const value = useMemo(
    () => ({ profileData, updateProfileData }),
    [profileData],
  );

  return (
    <ProfileDataContext.Provider value={value}>
      {children}
    </ProfileDataContext.Provider>
  );
};

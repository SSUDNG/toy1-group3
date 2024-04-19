import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export interface AttendanceData {
  startTime: string;
  endTime: string;
  working: boolean;
  isBtnValid: boolean;
}

interface AttendanceContextType {
  attendanceData: AttendanceData;
  updateAttendanceData: (data: Partial<AttendanceData>) => void;
}

const initialAttendanceContext: AttendanceContextType = {
  attendanceData: {
    startTime: "",
    endTime: "",
    working: false,
    isBtnValid: true,
  },
  updateAttendanceData: () => {},
};

export const AttendanceContext = createContext<AttendanceContextType>(
  initialAttendanceContext,
);

export const useAttendance = () => useContext(AttendanceContext);

export const AttendanceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [attendanceData, setAttendanceData] = useState<AttendanceData>(
    initialAttendanceContext.attendanceData,
  );
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().slice(0, 10),
  );
  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const userDataString = localStorage.getItem("userData");
        const userData = userDataString ? JSON.parse(userDataString) : null;
        const userEmail = userData.email;
        const userRef = doc(db, "attendance", userEmail);
        const currentDateRef = doc(userRef, "dates", currentDate);
        const docSnap = await getDoc(currentDateRef);
        if (!docSnap.exists()) {
          const newAttendanceData: AttendanceData = {
            startTime: "",
            endTime: "",
            working: false,
            isBtnValid: true,
          };
          await setDoc(currentDateRef, newAttendanceData);
          setAttendanceData(newAttendanceData);
        } else {
          setAttendanceData(docSnap.data() as AttendanceData);
        }
      } catch (error) {
        console.error("Error fetching attendance data: ", error);
      }
    };

    fetchAttendanceData();
  }, [currentDate]);
  useEffect(() => {
    const updateDate = () => {
      const today = new Date().toISOString().slice(0, 10);
      setCurrentDate(today);
    };

    const now: Date = new Date();
    const msUntilMidnight: number =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() -
      now.getTime();

    const timer = setTimeout(updateDate, msUntilMidnight);

    return () => clearTimeout(timer);
  }, []);

  const Value = useMemo(() => {
    const updateAttendanceData = async (data: Partial<AttendanceData>) => {
      try {
        const userDataString = localStorage.getItem("userData");
        const userData = userDataString ? JSON.parse(userDataString) : null;
        const userEmail = userData.email;
        const userRef = doc(db, "attendance", userEmail);
        const currentDateRef = doc(userRef, "dates", currentDate);

        await setDoc(currentDateRef, data, { merge: true });

        setAttendanceData((prevData) => ({
          ...prevData,
          ...data,
        }));
      } catch (error) {
        console.error("Error updating attendance data: ", error);
      }
    };

    return { attendanceData, updateAttendanceData };
  }, [attendanceData, currentDate]);
  return (
    <AttendanceContext.Provider value={Value}>
      {children}
    </AttendanceContext.Provider>
  );
};

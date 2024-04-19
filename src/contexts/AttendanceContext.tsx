import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { doc, setDoc, collection, getDoc } from "firebase/firestore";
import { db } from "../firebase";

// Attendance 데이터 타입 정의
export interface AttendanceData {
  startTime: string;
  endTime: string;
  working: boolean;
  isBtnValid: boolean;
}

// Attendance 컨텍스트 타입 정의
interface AttendanceContextType {
  attendanceData: AttendanceData;
  updateAttendanceData: (data: Partial<AttendanceData>) => void;
}

// 초기 컨텍스트 값 정의
const initialAttendanceContext: AttendanceContextType = {
  attendanceData: {
    startTime: "",
    endTime: "",
    working: false,
    isBtnValid: true,
  },
  updateAttendanceData: () => {},
};

// attendance 컨텍스트 생성
export const AttendanceContext = createContext<AttendanceContextType>(
  initialAttendanceContext,
);

// attendance 컨텍스트 훅
export const useAttendance = () => useContext(AttendanceContext);

// attendance 컨텍스트 프로바이더
export const AttendanceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [attendanceData, setAttendanceData] = useState<AttendanceData>(
    initialAttendanceContext.attendanceData,
  );

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const userDataString = localStorage.getItem("userData");
        const userData = userDataString ? JSON.parse(userDataString) : null;
        const userEmail = userData.email;
        console.log(userEmail);
        const currentDate = new Date()
          .toISOString()
          .slice(0, 10)
          .replace(/-/g, "");
        const userRef = collection(db, "attendance", userEmail);
        const currentDateRef = doc(userRef, currentDate);
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
  }, []);

  // Attendance 데이터 업데이트 함수
  const updateAttendanceData = async (data: Partial<AttendanceData>) => {
    try {
      const userDataString = localStorage.getItem("userData");
      const userData = userDataString ? JSON.parse(userDataString) : null;
      const userEmail = userData.email;

      const currentDate = new Date()
        .toISOString()
        .slice(0, 10)
        .replace(/-/g, "");
      const userRef = collection(db, "attendance", userEmail);
      const currentDateRef = doc(userRef, currentDate);

      await setDoc(currentDateRef, data, { merge: true });

      setAttendanceData((prevData) => ({
        ...prevData,
        ...data,
      }));
    } catch (error) {
      console.error("Error updating attendance data: ", error);
    }
  };

  // attendance 컨텍스트 값
  const Value = useMemo(
    () => ({ attendanceData, updateAttendanceData }),
    [attendanceData],
  );

  return (
    <AttendanceContext.Provider value={Value}>
      {children}
    </AttendanceContext.Provider>
  );
};

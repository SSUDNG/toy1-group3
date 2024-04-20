import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

export interface Vacation {
  email: string;
  name: string;
  vacationType: string;
  startDate: string | null;
  endDate: string | null;
  reason: string;
  notes: string;
}

type VacationContextType = {
  vacations: Vacation[];
  addVacation: (vacation: Vacation) => void;
};

const initialVacationContext: VacationContextType = {
  vacations: [],
  addVacation: () => {},
};

export const VacationContext = createContext<VacationContextType>(
  initialVacationContext,
);

export const useVacations = () => useContext(VacationContext);

export const VacationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [vacations, setVacations] = useState<Vacation[]>([]);

  const [test, setTest] = useState(false);
  useEffect(() => {
    const fetchVacations = async () => {
      const q = query(collection(db, "vacations"));
      const querySnapshot = await getDocs(q);
      const fetchedVacations: Vacation[] = [];
      querySnapshot.forEach((document: QueryDocumentSnapshot) => {
        fetchedVacations.push({
          ...document.data(),
        } as Vacation);
      });
      setVacations(fetchedVacations);
    };
    fetchVacations();
  }, [test]);

  const addVacation = async (vacation: Vacation) => {
    try {
      await setDoc(
        doc(
          collection(db, "vacations"),
          `${vacation.email}${vacation.startDate}`,
        ),
        vacation,
      );
    } catch (error) {
      console.error("Error adding vacation: ", error);
    } finally {
      setTest((prev) => !prev);
    }
  };

  const value = useMemo(() => ({ vacations, addVacation }), [vacations]);

  return (
    <VacationContext.Provider value={value}>
      {children}
    </VacationContext.Provider>
  );
};

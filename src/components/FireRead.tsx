// import React from "react";
import {
  QueryDocumentSnapshot,
  query,
  where,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";

interface DOC {
  first: string;
  last: string;
  born: number;
}

export default function FireRead(): Promise<void> {
  const fetchData = async () => {
    const q = query(collection(db, "users"), where("name", "==", "ex_user"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
      const data = doc.data() as DOC;
      console.log(data);
    });
  };

  return fetchData()
    .then(() => {
      console.log("Data fetching completed.");
    })
    .catch((error) => {
      console.error("Error fetching documents: ", error);
      return Promise.reject(error);
    });
}

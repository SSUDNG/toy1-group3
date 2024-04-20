import {
  doc,
  getDoc,
  QueryDocumentSnapshot,
  query,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
import { RequestData, DefaultProfile } from "./TypeDef";

// 하나의 문서만 읽을 때!
export function ReadDoc(
  col: string,
  target: string,
): Promise<DefaultProfile | null> {
  const fetchData = async () => {
    const docSnap = doc(db, col, target);
    const docSnapshot = await getDoc(docSnap);
    const data = docSnapshot.data() as DefaultProfile;
    return data;
  };
  return fetchData()
    .then((data) => {
      return data;
    })
    .catch(() => {
      return null;
    });
}

// 여러 문서를 긁어올 때!
export function ReadSelection(col: string): Promise<RequestData[] | null> {
  const fetchData = async () => {
    const q = query(collection(db, col));
    const querySnapshot = await getDocs(q);
    const vacationsData = querySnapshot.docs.map(
      (document: QueryDocumentSnapshot) => document.data() as RequestData,
    );
    return vacationsData;
  };

  return fetchData()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching documents: ", error);
      return null;
    });
}

import {
  doc,
  getDoc,
  QueryDocumentSnapshot,
  query,
  where,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
import { DefaultProfile } from "./TypeDef";

interface DOC {
  first: string;
  last: string;
  born: number;
}

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

export default function FireRead(): Promise<void> {
  const fetchData = async () => {
    const q = query(collection(db, "users"), where("name", "==", "ex_user"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docm: QueryDocumentSnapshot) => {
      const data = docm.data() as DOC;
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

// export default function FireRead(): Promise<void> {
//   return new Promise<void>((resolve, reject) => {
//     try {
//       const fetchData = async () => {
//         const q = query(collection(db, "users"), where("born", "==", 2024));
//         const querySnapshot = await getDocs(q);
//         // users 콜렉션 전체를 불러오고 싶으면, 21~25 라인 대신에 27번 라인만 작성하면 됩니다!
//         // const querySnapshot = await getDocs(collection(db, "users"));
//         querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
//           const data = doc.data() as DOC;
//           console.log(data.first, data.last, data.born);
//         });
//         resolve();
//       };
//       fetchData();
//     } catch (error) {
//       console.error("Error fetching documents: ", error);
//       reject(error);
//     }
//   });
// }

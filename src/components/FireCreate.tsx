import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export default function FireCreate(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    // ID를 임의로하여 생성하고싶다면 addDoc을 활용하고, 파라미터에 변화가 좀 있습니다.
    // addDoc(collection(db, "users"), 넣을 데이터) {addDoc, collection} 임포트해야함
    setDoc(doc(db, "users", "googleID"), {
      first: "gkdua",
      last: "ㅊㅔ력이 있어야..",
      born: 2024,
    })
      .then(() => {
        console.log("written!");
        resolve();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        reject(error);
      });
  });
}

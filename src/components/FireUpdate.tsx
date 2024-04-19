import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function FireUpdate() {
  return new Promise<void>((resolve, reject) => {
    // ID를 임의로하여 생성하고싶다면 addDoc을 활용하고, 파라미터에 변화가 좀 있습니다.
    // addDoc(collection(db, "users"), 넣을 데이터) {addDoc, collection} 임포트해야함
    const target = doc(db, "users", "1");
    updateDoc(target, {
      content: "test",
      age: "20",
      startyear: "2024",
      startmonth: "5",
      startday: "1",
    })
      .then(() => {
        console.log("update!");
        resolve();
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
        reject(error);
      });
  });
}

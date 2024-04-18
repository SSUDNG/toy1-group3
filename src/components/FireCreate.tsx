import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { DefaultProfile } from "./TypeDef";

export default function FireCreate(profileData: DefaultProfile): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    console.log("로그인 파일 생성하기");
    // ID를 임의로하여 생성하고싶다면 addDoc을 활용하고, 파라미터에 변화가 좀 있습니다.
    // addDoc(collection(db, "users"), 넣을 데이터) {addDoc, collection} 임포트해야함
    setDoc(doc(db, "users", profileData.email), {
      name: profileData.name,
      email: profileData.email,
      photoURL: profileData.photoURL,
      phoneNumber: profileData.phoneNumber,
      position: profileData.position,
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

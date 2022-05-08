import { doc, getDoc } from "firebase/firestore";
import { saveData } from "./asyncStorageFuncs";
import fetchServer from "./fetchServer";
import { db } from "./firebase";

export const getAccountInfo = async (uid: string) => {
  if (uid) {
    const response = await fetchServer("/getAccountInfo", "POST", {
      uid: uid,
    });

    getDoc(doc(db, `/connections/${response.username}`)).then((res: any) => {
      saveData("REFRESH_TOKEN", res.data().refreshToken);
    });

    return response;
  }
};

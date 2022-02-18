import fetchServer from "./fetchServer";

export const getAccountInfo = async (uid: string) => {
  if (uid) {
    const response = await fetchServer("/getAccountInfo", "POST", {
      uid: uid,
    });

    console.log(response);

    return response;
  }
};

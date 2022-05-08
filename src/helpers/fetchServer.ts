import { SERVER_URL } from "../../constants";

const fetchServer = async (url: string, method: string, data?: any) => {
  const response = await fetch(`${"http://192.168.1.14:4000" + url}`, {
    method: method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: data ? JSON.stringify(data) : "",
  });

  return response.json();
};

export default fetchServer;

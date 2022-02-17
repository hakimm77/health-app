import { SERVER_URL } from "../../constants";

const fetchServer = async (url: string, method: string, data: any) => {
  const response = await fetch(`${SERVER_URL + url}`, {
    method: method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });

  return response.json();
};

export default fetchServer;

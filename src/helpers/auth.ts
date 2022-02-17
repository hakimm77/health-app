import axios from "axios";
import React, { SetStateAction } from "react";
import { saveData } from "./asyncStorageFuncs";
import fetchServer from "./fetchServer";
import * as Updates from "expo-updates";

export const login = async (
  email: string,
  password: string,
  setLoading: React.Dispatch<SetStateAction<boolean>>,
  setError: React.Dispatch<SetStateAction<string | null>>
) => {
  if (email && password) {
    setLoading(true);

    const response = await fetchServer("/authenticate", "POST", {
      email: email,
      password: password,
      authType: "login",
    });

    if (response.code) {
      setLoading(false);
      setError(response.code);
    } else {
      setLoading(false);
      saveData(response);
      await Updates.reloadAsync();
    }
  }
};

export const signup = async (
  email: string,
  password: string,
  username: string,
  setError: React.Dispatch<SetStateAction<string | null>>,
  setLoading: React.Dispatch<SetStateAction<boolean>>
) => {
  if (email && password && username) {
    setLoading(true);

    const response = await fetchServer("/authenticate", "POST", {
      email: email,
      password: password,
      info: {
        username: username,
      },
      isAdmin: false,
      authType: "signup",
    });

    if (response.code) {
      setLoading(false);
      setError(response.code);
    } else {
      setLoading(false);
      saveData(response);
      await Updates.reloadAsync();
    }
  }
};

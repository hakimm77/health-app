import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (data: any) => {
  try {
    await AsyncStorage.setItem("USER", data);
  } catch (err) {
    return null;
  }
};

export const getData = async () => {
  try {
    const data = await AsyncStorage.getItem("USER");

    if (data !== null) {
      return data;
    } else {
      return false;
    }
  } catch (err) {
    return null;
  }
};

export const removeData = async (item: string) => {
  try {
    await AsyncStorage.removeItem(item);
  } catch (err) {
    return null;
  }
};

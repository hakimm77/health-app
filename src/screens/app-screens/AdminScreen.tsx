import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AccountPageModel from "../../components/AccountPageModel";
import AppLogo from "../../components/AppLogo";
import { removeData } from "../../helpers/asyncStorageFuncs";
import * as Updates from "expo-updates";
import fetchServer from "../../helpers/fetchServer";
import Loading from "../../components/Loading";

const AdminScreen = () => {
  const [users, setUsers] = useState<any>([]);

  const logout = async () => {
    removeData("USER");
    removeData("REFRESH_TOKEN");
    await Updates.reloadAsync();
  };

  useEffect(() => {
    fetchServer("/get-users-data", "GET").then((response) => {
      console.log(response);

      setUsers([
        ...response,
        { username: "someone" },
        { username: "someone else" },
        { username: "stranger" },
      ]);
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.accountText} onPress={logout}>
        Logout
      </Text>
      <AppLogo style={styles.appLogo} width={50} height={50} />

      <Text
        style={{
          color: "white",
          fontSize: 23,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Users
      </Text>

      {users.length ? (
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {users.map((user: any) => (
            <View
              style={{
                flexDirection: "row",
                width: "95%",
                borderRadius: 10,
                backgroundColor: "#fff",
                height: 80,
                justifyContent: "space-between",
                alignItems: "center",
                padding: 20,
                marginBottom: 10,
              }}
            >
              <Text style={{ color: "#000", fontSize: 21, fontWeight: "bold" }}>
                {user.username}
              </Text>

              <Text style={{ color: "#000", fontSize: 17 }}>
                Avg. 4.4 mmol/L
              </Text>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Loading />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#1482fd",
    paddingTop: "30%",
    marginBottom: 35,
  },
  appLogo: {
    position: "absolute",
    top: 40,
    right: 15,
    borderColor: "white",
    borderWidth: 2,
  },
  accountText: {
    position: "absolute",
    top: 40,
    left: 15,
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    padding: 7,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 20,
  },
});

export default AdminScreen;

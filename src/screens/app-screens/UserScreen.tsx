import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { initialStyle } from "../../../constants";
import AppLogo from "../../components/AppLogo";
import NavigationBar from "../../components/NavigationBar";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import AccountPageModel from "../../components/AccountPageModel";
import { getData } from "../../helpers/asyncStorageFuncs";
import { getAccountInfo } from "../../helpers/database";
import { UserType } from "../../types/userType";

const data = [
  { month: "Jan", level: 11.0 },
  { month: "Feb", level: 7.08 },
  { month: "Mar", level: 11.1 },
  { month: "Apr", level: 10.13 },
];

const UserScreen = () => {
  const [modal, setModal] = useState(false);
  const [userInfo, setUserInfo] = useState<UserType>();

  useEffect(() => {
    getData().then((id) => {
      if (id) {
        getAccountInfo(id).then((e) => {
          setUserInfo(e.personalData);
        });
      }
    });
  }, []);

  const closeAccountModal = () => {
    setModal(false);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.upperPart}>
        <Text
          style={styles.accountText}
          onPress={() => {
            setModal(true);
          }}
        >
          Account
        </Text>
        <AppLogo style={styles.appLogo} width={50} height={50} />

        <NavigationBar />
      </View>

      <View style={styles.graphWrapper}>
        <VictoryChart width={280} height={300} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="month" y="level" />
        </VictoryChart>
      </View>

      {userInfo && (
        <AccountPageModel
          modal={modal}
          closeModal={closeAccountModal}
          userData={userInfo}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...(initialStyle as any),
    alignItems: "center",
  },
  upperPart: {
    display: "flex",
    alignItems: "center",
    height: "50%",
    width: "100%",
    backgroundColor: "#1482fd",
    paddingTop: "30%",
    marginBottom: 35,
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
  appLogo: {
    position: "absolute",
    top: 40,
    right: 15,
    borderColor: "white",
    borderWidth: 2,
  },
  graphWrapper: {
    backgroundColor: "white",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});

export default UserScreen;

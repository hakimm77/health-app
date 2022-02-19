import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AccountPageModel from "../../components/AccountPageModel";
import AppLogo from "../../components/AppLogo";

const AdminScreen = () => {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <View style={styles.mainContainer}>
      <Text
        style={styles.accountText}
        onPress={() => {
          setModal(true);
        }}
      >
        Admin
      </Text>
      <AppLogo style={styles.appLogo} width={50} height={50} />

      <AccountPageModel modal={modal} closeModal={closeModal} />
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

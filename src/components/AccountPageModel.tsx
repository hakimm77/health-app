import React from "react";
import { Text, View, Modal, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import GestureRecognizer from "react-native-swipe-gestures";
import { removeData } from "../helpers/asyncStorageFuncs";
import { UserType } from "../types/userType";
import * as Updates from "expo-updates";

const AccountPageModel: React.FC<{
  closeModal: () => void;
  modal: boolean;
  userData: UserType;
}> = ({ closeModal, modal, userData }) => {
  const logout = async () => {
    removeData("USER");
    await Updates.reloadAsync();
  };

  return (
    <GestureRecognizer style={{ flex: 1 }} onSwipeDown={closeModal}>
      <Modal visible={modal} animationType="slide" transparent={true}>
        <View style={styles.mainContainer}>
          <Text style={styles.closeButton} onPress={closeModal}>
            &#x2715;
          </Text>

          <View
            style={{
              alignItems: "center",
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 20, color: "#313131" }}>
              {userData.username}
            </Text>

            <Text style={{ fontSize: 20, color: "#313131" }}>
              {userData.email}
            </Text>
          </View>

          <View
            style={{
              position: "absolute",
              bottom: 0,
            }}
          >
            <Button
              color="white"
              style={{ backgroundColor: "#1482fd", margin: 20, width: 100 }}
              onPress={logout}
            >
              Logout
            </Button>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    height: "90%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#313131",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  closeButton: {
    color: "white",
    fontSize: 50,
    position: "absolute",
    top: 5,
    right: 20,
  },
});

export default AccountPageModel;

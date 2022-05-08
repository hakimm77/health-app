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
  userData?: UserType;
}> = ({ closeModal, modal, userData }) => {
  const logout = async () => {
    removeData("USER");
    removeData("REFRESH_TOKEN");
    await Updates.reloadAsync();
  };

  return (
    <GestureRecognizer style={{ flex: 1 }} onSwipeDown={closeModal}>
      <Modal visible={modal} animationType="slide" transparent={true}>
        <View style={styles.mainContainer}>
          <Text style={styles.closeButton} onPress={closeModal}>
            &#x2715;
          </Text>

          {userData && (
            <View style={styles.userDataContainer}>
              <View
                style={{
                  marginBottom: 30,
                  alignItems: "center",
                }}
              >
                <View style={styles.profilePic}>
                  <Text style={{ color: "white", fontSize: 60 }}>
                    {userData.username.split("")[0]}
                  </Text>
                </View>

                <Text
                  style={{
                    color: "#1482fd",
                    fontSize: 18,
                    margin: 10,
                    fontWeight: "bold",
                  }}
                >
                  Edit (will be available soon)
                </Text>
              </View>

              <Text style={{ fontSize: 20, color: "#fff", marginBottom: 7 }}>
                <Text
                  style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}
                >
                  username:
                </Text>{" "}
                {userData.username}
              </Text>

              <Text style={{ fontSize: 20, color: "#fff" }}>
                <Text
                  style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}
                >
                  email:
                </Text>{" "}
                {userData.email}
              </Text>

              <Button
                color="white"
                style={{
                  backgroundColor: "#1482fd",
                  width: 100,
                  marginTop: 50,
                  alignSelf: "center",
                }}
                onPress={logout}
              >
                Logout
              </Button>
            </View>
          )}
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    height: "85%",
    width: "100%",
    alignItems: "center",
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
  userDataContainer: {
    backgroundColor: "#4b4b4b",
    padding: 10,
    borderRadius: 10,
    marginTop: 100,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderColor: "#fff",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AccountPageModel;

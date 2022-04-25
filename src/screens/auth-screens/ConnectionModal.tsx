import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Modal, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { initialStyle } from "../../../constants";
import { saveData } from "../../helpers/asyncStorageFuncs";
import { signup } from "../../helpers/auth";
import { db } from "../../helpers/firebase";

const ConnectionModal = ({
  visible,
  closeModal,
  userData,
  setError,
  setLoading,
}: {
  visible: boolean;
  closeModal: () => void;
  userData: any;
  setError: any;
  setLoading: any;
}) => {
  const [auth, setAuth] = useState(false);

  const handleSignup = async () => {
    setError(null);

    await signup(
      userData.email.trim(),
      userData.password.trim(),
      userData.username.trim(),
      setError,
      setLoading
    );
  };

  const unsub = onSnapshot(
    doc(db, `connections/${userData.username}`),
    async (doc) => {
      console.log(doc.exists());

      if (doc.exists()) {
        await saveData("REFRESH_TOKEN", doc.data().refreshToken);

        setAuth(true);
      }
    }
  );

  useEffect(() => {
    if (auth) {
      handleSignup();
      unsub();
      closeModal();
    }
  }, [auth]);

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.mainContainer}>
        <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 35 }}>
          Waiting for connection...
        </Text>
        <ActivityIndicator color="#fff" size="large" />

        <TouchableOpacity
          style={{ position: "absolute", top: 20, left: 20 }}
          onPress={closeModal}
        >
          <Text style={{ color: "#fff", fontSize: 23 }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...(initialStyle as any),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ConnectionModal;

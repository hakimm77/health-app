import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import { initialStyle } from "../../../constants";
import AppLogo from "../../components/AppLogo";
import BackArrowButton from "../../components/BackArrowButton";
import { signup } from "../../helpers/auth";

const Signup: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [inputActive, setInputActive] = useState(false);

  const handleSignup = async () => {
    setError(null);

    await signup(
      email.trim(),
      password.trim(),
      username.trim(),
      setError,
      setLoading
    );

    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setInputActive(true);
    });

    Keyboard.addListener("keyboardDidHide", () => {
      setInputActive(false);
    });
  }, []);

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <View style={styles.mainContainer}>
        <BackArrowButton
          navigation={navigation}
          close={() => {
            Keyboard.removeAllListeners("keyboardDidShow");
            Keyboard.removeAllListeners("keyboardDidHide");
          }}
        />

        {!inputActive && (
          <View style={styles.appLogo}>
            <AppLogo />
            <Text
              style={{
                color: "#fff",
                fontSize: 30,
                fontWeight: "bold",
                margin: 5,
              }}
            >
              Sign up
            </Text>
          </View>
        )}

        <TextInput
          placeholder="Username..."
          placeholderTextColor="gray"
          style={{ ...styles.textInput, marginTop: 80 }}
          onChangeText={setUsername}
          value={username}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Email..."
          placeholderTextColor="gray"
          style={{ ...styles.textInput }}
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password..."
          placeholderTextColor="gray"
          style={styles.textInput}
          onChangeText={setPassword}
          value={password}
          autoCapitalize="none"
          secureTextEntry={true}
        />

        <Button
          color="white"
          style={{
            backgroundColor: "#1482fd",
            marginTop: 20,
            marginBottom: 20,
          }}
          loading={loading}
          onPress={handleSignup}
        >
          Create account
        </Button>

        {error && (
          <Text style={{ color: "red", fontSize: 17, fontWeight: "bold" }}>
            {error}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...(initialStyle as any),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  appLogo: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    top: 0,
  },
  textInput: {
    width: "70%",
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1482fd",
    marginBottom: 20,
    color: "white",
    padding: 5,
  },
});

export default Signup;

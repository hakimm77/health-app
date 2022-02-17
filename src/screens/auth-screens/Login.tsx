import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button } from "react-native-paper";
import { initialStyle } from "../../../constants";
import AppLogo from "../../components/AppLogo";
import { login } from "../../helpers/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError(null);

    await login(email.trim(), password.trim(), setLoading, setError);
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <View style={styles.mainContainer}>
        <View style={styles.appLogo}>
          <AppLogo />
        </View>

        <TextInput
          placeholder="Email..."
          placeholderTextColor="gray"
          style={{ ...styles.textInput, marginTop: 80 }}
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
          loading={loading}
          style={{
            backgroundColor: "#1482fd",
            marginTop: 20,
            marginBottom: 20,
          }}
          onPress={handleLogin}
        >
          Sign in
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

export default Login;

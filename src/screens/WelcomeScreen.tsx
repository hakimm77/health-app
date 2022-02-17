import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import { initialStyle } from "../../constants";
import AppLogo from "../components/AppLogo";

const WelcomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.upperPart}>
        <AppLogo />
      </View>

      <Text
        style={{
          color: "white",
          fontSize: 22,
          fontWeight: "bold",
          paddingBottom: 10,
        }}
      >
        Welcome to Health App
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 19,
          textAlign: "center",
          lineHeight: 20,
          paddingBottom: 40,
        }}
      >
        Health App is an app made for people to monitor their blood sugar,
        oxygen saturation, heart rate and more, from today you won't be fat
        again :)
      </Text>

      <Button
        color="#fff"
        style={styles.authButton}
        onPress={() => {
          navigation.navigate("signup");
        }}
      >
        Create account
      </Button>

      <Button
        color="#fff"
        style={styles.authButton}
        onPress={() => {
          navigation.navigate("login");
        }}
      >
        Sign in
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...(initialStyle as any),
    flexDirection: "column",
    alignItems: "center",
  },
  upperPart: {
    display: "flex",
    height: "55%",
    width: "100%",
    backgroundColor: "#1482fd",
    alignItems: "center",
    paddingTop: "30%",
    marginBottom: 35,
  },
  authButton: {
    backgroundColor: "#1482fd",
    borderRadius: 50,
    marginBottom: 15,
  },
});

export default WelcomeScreen;

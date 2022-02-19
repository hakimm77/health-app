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
        <Text style={styles.mainText}>Health App</Text>
      </View>

      <Text
        style={{
          color: "white",
          fontSize: 23,
          fontWeight: "bold",
          paddingBottom: 5,
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
          paddingBottom: 30,
        }}
      >
        Health App is an app made to monitor patient's Glucose levels, Oxygen
        saturation, Heart rate and more, from today you won't be fat again :)
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
        style={{ ...styles.authButton, marginTop: 10 }}
        onPress={() => {
          navigation.navigate("login");
        }}
      >
        Sign in
      </Button>

      <Text
        style={styles.adminText}
        onPress={() => {
          navigation.navigate("admin-login");
        }}
      >
        access Admin account here
      </Text>
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
    marginBottom: 25,
  },
  authButton: {
    backgroundColor: "#1482fd",
    borderRadius: 50,
  },
  adminText: {
    color: "#1482fd",
    fontSize: 18,
    marginTop: 15,
  },
  mainText: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
    margin: 5,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowColor: "#1D1D1D",
    textShadowRadius: 5,
  },
});

export default WelcomeScreen;

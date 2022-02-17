import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { initialStyle } from "../../../constants";

const UserScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text
        style={{
          color: "white",
          fontSize: 25,
          padding: 5,
          margin: 50,
          backgroundColor: "#1482fd",
        }}
      >
        hey am a user
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...(initialStyle as any),
  },
});

export default UserScreen;

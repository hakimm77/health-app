import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

interface NextArrowProps {
  goToNext: any;
}

const NextArrowButton: React.FC<NextArrowProps> = ({ goToNext }) => {
  return (
    <TouchableOpacity style={styles.nextButton} onPress={goToNext}>
      <Image
        source={require("../../assets/left-arrow.png")}
        style={{
          width: 20,
          height: 20,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  nextButton: {
    position: "absolute",
    top: "45%",
    right: 7,
    borderColor: "#1482fd",
    borderWidth: 2,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ scaleX: -1 }],
  },
});

export default NextArrowButton;

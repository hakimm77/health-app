import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavItemType } from "../types/navItemsType";
import NextArrowButton from "./NextArrowButton";

const MedicalData: React.FC<{
  item: NavItemType;
  index: number;
  carouselRef: any;
}> = ({ item, carouselRef, index }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.navItemText}>{item.name}</Text>
      <Text style={styles.navItemText}>{item.value}</Text>

      <NextArrowButton
        goToNext={() => {
          carouselRef.current.snapToItem(index + 1);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "60%",
    height: 200,
    backgroundColor: "#fff",
    paddingTop: 20,
    borderRadius: 10,
  },
  navItemText: {
    color: "#1D1D1D",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default MedicalData;

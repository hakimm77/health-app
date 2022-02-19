import React, { useRef, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { NavItemType } from "../types/navItemsType";
import MedicalData from "./MedicalData";

const NavItem: React.FC<{ item: NavItemType }> = ({ item }) => {
  return <MedicalData item={item} />;
};

const NavigationBar = () => {
  const [navItems, setNavItems] = useState<Array<NavItemType>>([
    { name: "Glucose Monitoring", value: "4 mmol/L" },
    { name: "Heart Rate", value: "75 BPM" },
    { name: "Weight", value: "70 KG" },
    { name: "Oxygen Saturation", value: "97%" },
    { name: "Sleep Quality", value: "86%" },
  ]);
  const carouselRef: any = useRef();

  return (
    <View style={styles.mainContainer}>
      <Carousel
        ref={carouselRef}
        data={navItems as any}
        renderItem={NavItem}
        sliderWidth={580}
        itemWidth={550}
        layout="stack"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  navItem: {
    color: "white",
    fontSize: 17,
    marginRight: 20,
    fontWeight: "bold",
  },
});

export default NavigationBar;

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
import MedicalData from "./MedicalData";

const NavItem: React.FC<{ item: string }> = ({ item }) => {
  return <MedicalData item={item} />;
};

const NavigationBar = () => {
  const [navItems, setNavItems] = useState<Array<string>>([
    "Glucose Monitoring",
    "Heart Rate",
    "Weight",
    "Sleep Pattern",
    "Oxygen Saturation",
  ]);
  const carouselRef: any = useRef();

  return (
    <View style={styles.mainContainer}>
      <Carousel
        ref={carouselRef}
        data={navItems}
        renderItem={NavItem}
        sliderWidth={580}
        itemWidth={550}
        layout="default"
        snapToEnd={true}
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

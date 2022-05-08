import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { getData } from "../helpers/asyncStorageFuncs";
import fetchServer from "../helpers/fetchServer";
import { NavItemType } from "../types/navItemsType";
import MedicalData from "./MedicalData";

const NavigationBar = ({ username }: { username: string | undefined }) => {
  const [navItems, setNavItems] = useState<Array<NavItemType>>([
    { name: "Glucose Monitoring", value: "--- mg/dl" },
    { name: "Heart Rate", value: "75 BPM" },
    { name: "Weight", value: "70 KG" },
    { name: "Oxygen Saturation", value: "97%" },
    { name: "Sleep Quality", value: "86%" },
  ]);
  const [gcmValue, setGcmValue] = useState<any>();
  const carouselRef: any = useRef();
  const [timer, setTimer] = useState(0);

  const NavItem: React.FC<{ item: NavItemType; index: number }> = ({
    item,
    index,
  }) => {
    return <MedicalData item={item} index={index} carouselRef={carouselRef} />;
  };

  const getDexcomMeasure = () => {
    getData("REFRESH_TOKEN").then((id) => {
      getData("USER").then((userID) => {
        if (id && username && userID) {
          const response = fetchServer("/get-glucose", "POST", {
            username: username,
          }).then((res) => {
            if (res.fault) {
              fetchServer("/refresh-token", "POST", {
                username: username,
                refreshToken: id,
              });
              setTimer((p) => p + 1);
            } else {
              fetchServer("/save-results", "POST", {
                uid: userID,
                data: res.egvs.slice(-5),
              });
              console.log(res);
              setGcmValue(`${res.egvs[0].value} ${res.unit}`);
            }
            console.log(res);
          });
        }
      });
    });
  };

  const interval = () => {
    getDexcomMeasure();

    setTimeout(() => {
      getDexcomMeasure();
      setTimer((p) => p + 1);
    }, 300000);
  };

  useEffect(() => {
    interval();
  }, [timer, username]);

  return (
    <View style={styles.mainContainer}>
      {/* <Carousel
        ref={carouselRef}
        data={navItems}
        renderItem={NavItem}
        sliderWidth={580}
        itemWidth={550}
        layout="stack"
      /> */}
      <View style={styles.mainContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 30, marginBottom: 20 }}>
          Glucose Monitoring
        </Text>

        {gcmValue ? (
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>{gcmValue}</Text>
        ) : (
          <ActivityIndicator color="#1D1D1D" size="small" />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    width: "95%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    borderRadius: 10,
  },
  navItem: {
    color: "white",
    fontSize: 17,
    marginRight: 20,
    fontWeight: "bold",
  },
});

export default NavigationBar;

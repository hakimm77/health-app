import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GlucoseMonitoring from "./MedDataComponents/GlucoseMonitoring";
import HeartRate from "./MedDataComponents/HeartRate";
import OxygenSaturation from "./MedDataComponents/OxygenSaturation";
import SleepPattern from "./MedDataComponents/SleepPattern";
import Weight from "./MedDataComponents/Weight";

const MedicalData: React.FC<{ item: string }> = ({ item }) => {
  const switchMedDataTypes = () => {
    switch (item) {
      case "Glucose Monitoring":
        return <GlucoseMonitoring />;
        break;
      case "Heart Rate":
        return <HeartRate />;
        break;
      case "Weight":
        return <Weight />;
        break;
      case "Sleep Pattern":
        return <SleepPattern />;
        break;
      case "Oxygen Saturation":
        return <OxygenSaturation />;
        break;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.navItemText}>{item}</Text>
      {switchMedDataTypes()}
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
    color: "#121212",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default MedicalData;

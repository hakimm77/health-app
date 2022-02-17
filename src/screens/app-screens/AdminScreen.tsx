import { View, Text, StyleSheet } from "react-native";
import { initialStyle } from "../../../constants";

const AdminScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text
        style={{
          color: "white",
          fontSize: 25,
          padding: 5,
          backgroundColor: "#1482fd",
        }}
      >
        hey am an admin
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...(initialStyle as any),
  },
});

export default AdminScreen;

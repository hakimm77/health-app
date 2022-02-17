import { View, StyleSheet } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { initialStyle } from "../../constants";

const Loading = () => {
  return (
    <View style={styles.mainContainer}>
      <ActivityIndicator
        animating={true}
        color={Colors.blue300}
        size={90}
        style={{ marginTop: "70%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    ...(initialStyle as any),
  },
});

export default Loading;

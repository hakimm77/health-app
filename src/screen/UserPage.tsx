import { View, StyleSheet, Text } from "react-native";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

const GET_WEIGHTS = gql`
  query GET_USER_WEIGHTS {
    userWeights {
      value
    }
  }
`;

const UserPage = () => {
  const { loading, error, data } = useQuery(GET_WEIGHTS);

  useEffect(() => {
    console.log(data);
  }, [loading, error, data]);

  return (
    <View style={styles.container}>
      {data &&
        data.userWeights.map((item: any, idx: any) => (
          <Text key={idx}>{item.value}</Text>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffe7e8",
    alignItems: "center",
    padding: 20,
  },
});

export default UserPage;

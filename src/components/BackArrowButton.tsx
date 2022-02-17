import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Appbar, Button } from "react-native-paper";

interface BackArrowProps {
  style: any;
  navigation: any;
}

const BackArrowButton: React.FC<BackArrowProps> = ({ style, navigation }) => {
  return (
    // <TouchableWithoutFeedback
    //       style={style}
    //       onPress={() => navigation.goBack()} >
    //       <Icon name="md-arrow-round-back" size={16} color="#000" />
    //   </TouchableWithoutFeedback>
    <></>
  );
};

export default BackArrowButton;

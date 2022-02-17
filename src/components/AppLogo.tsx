import React from "react";
import { Image } from "react-native";

interface AppLogoProps {
  style?: any;
}

const AppLogo: React.FC<AppLogoProps> = ({ style }) => {
  return (
    <Image
      source={require("../../assets/app-logo.png")}
      style={{ ...style, width: 130, height: 130, borderRadius: 130 / 2 }}
    />
  );
};

export default AppLogo;

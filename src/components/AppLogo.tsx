import React from "react";
import { Image } from "react-native";

interface AppLogoProps {
  style?: any;
  width?: number;
  height?: number;
}

const AppLogo: React.FC<AppLogoProps> = ({
  style,
  width = 130,
  height = 130,
}) => {
  return (
    <Image
      source={require("../../assets/app-logo.png")}
      style={{ ...style, width: width, height: height, borderRadius: 130 / 2 }}
    />
  );
};

export default AppLogo;

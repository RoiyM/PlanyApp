import React from "react";
import { StyleSheet } from "react-native";
import CustomText from "./CustomText";
const planYpink = "#ff005de6";

const Logo = ({ fontSize = 30 }) => {
  return (
    <CustomText style={styles(fontSize).text}>
      Plan<CustomText style={styles(fontSize).pinkY}>Y</CustomText>
    </CustomText>
  );
};

const styles = (fontSize) =>
  StyleSheet.create({
    text: {
      fontSize,
      padding: 10,
    },
    pinkY: {
      color: planYpink,
    },
  });

export default Logo;

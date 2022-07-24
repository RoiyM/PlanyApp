import React from "react";
import { Text, StyleSheet } from "react-native";
const planYpink = "#ff005de6";

const Logo = ({ fontSize = 30 }) => {
  return (
    <Text style={styles(fontSize).text}>
      Plan<Text style={styles(fontSize).pinkY}>Y</Text>
    </Text>
  );
};

const styles = (fontSize) =>
  StyleSheet.create({
    text: {
      fontWeight: "bold",
      textAlign: "center",
      margin: 20,
      fontSize,
    },
    pinkY: {
      color: planYpink,
    },
  });

export default Logo;

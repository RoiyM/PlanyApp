import React from "react";
import { Text, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <Text style={styles.text}>
      Plan<Text style={styles.pinkY}>Y</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
  pinkY: {
    color: "#ff005de6",
  },
});

export default Logo;

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
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  pinkY: {
    color: "#ff005de6",
  },
});

export default Logo;

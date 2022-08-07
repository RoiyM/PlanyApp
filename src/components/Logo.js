import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
const planYpink = "#ff005de6";

const Logo = ({ fontSize = 30 }) => {
  let [fontsLoaded] = useFonts({
    ArielBD: require("../../assets/fonts/Arielbd.ttf"),
  });
  return (
    <Text style={styles(fontSize).text}>
      Plan<Text style={styles(fontSize).pinkY}>Y</Text>
    </Text>
  );
};

const styles = (fontSize) =>
  StyleSheet.create({
    text: {
      fontFamily: "ArielBD",
      textAlign: "center",
      margin: 10,
      fontSize,
    },
    pinkY: {
      color: planYpink,
    },
  });

export default Logo;

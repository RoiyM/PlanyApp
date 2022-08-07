import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
const planYpink = "#ff005de6";

const PlanYButton = ({ buttonText, onPress }) => {
  let [fontsLoaded] = useFonts({
    ArielBD: require("../../assets/fonts/Arielbd.ttf"),
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.pinkText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pinkText: {
    fontFamily: "ArielBD",
    color: planYpink,
    fontSize: 20,
  },
  button: {
    borderColor: planYpink,
    borderRadius: 2,
    borderWidth: 1,
    margin: 20,
    width: 150,
    alignSelf: "center",
    alignItems: "center",
  },
});

export default PlanYButton;

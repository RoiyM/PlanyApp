import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import CustomText from "./CustomText";
const planYpink = "#ff005de6";

const PlanYButton = ({ buttonText, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <CustomText style={styles.pinkText}>{buttonText}</CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pinkText: {
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

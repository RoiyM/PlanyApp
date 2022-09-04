import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomText from "./CustomText";

const IconDetail = ({ name, title, text, color }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name={name} size={80} color={color} />
      </TouchableOpacity>
      <CustomText style={styles.title}>{title}</CustomText>
      <CustomText style={styles.text}>{text}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifycontent: "center",
    margin: 15,
  },
  button: {
    alignSelf: "center",
  },
  title: {
    fontSize: 16,
  },
  text: {
    fontSize: 13,
  },
});

export default IconDetail;

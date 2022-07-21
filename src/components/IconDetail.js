import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const IconDetail = ({ name, title, text, color }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name={name} size={80} color={color} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
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
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
  },
});

export default IconDetail;

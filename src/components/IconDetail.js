import React, { useState, useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Font from "expo-font";

const IconDetail = ({ name, title, text, color }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      ArielBD: require("../../assets/fonts/Arielbd.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

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
    fontFamily: "ArielBD",
    fontSize: 16,
  },
  text: {
    textAlign: "center",
    fontFamily: "ArielBD",
    fontSize: 13,
  },
});

export default IconDetail;

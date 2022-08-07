import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
const planYpink = "#ff005de6";

const Logo = ({ fontSize = 30 }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      ArielBD: require("../../assets/fonts/Arielbd.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) return null;
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
      fontSize,
      padding: 10,
    },
    pinkY: {
      color: planYpink,
    },
  });

export default Logo;

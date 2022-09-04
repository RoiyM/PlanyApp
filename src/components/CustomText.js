import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import * as Font from "expo-font";

export default function CustomText(props) {
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
    <Text style={[styles.defaultStyle, props.style]}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: "ArielBD",
    textAlign: "center",
  },
});

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as Font from "expo-font";

const ImageButton = ({ imageSource, title, goToScreen }) => {
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
      <TouchableOpacity onPress={goToScreen}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    textAlign: "center",
    fontFamily: "ArielBD",
  },
});

export default ImageButton;

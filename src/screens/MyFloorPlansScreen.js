import React, { useState, useEffect } from "react";
import { Text, StyleSheet, ImageBackground } from "react-native";
import Logo from "../components/Logo";
import * as Font from "expo-font";
import backgroundImage from "../../assets/myFloorplans_background.jpg";

const MyFloorPlansScreen = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      ArielBD: require("../../assets/fonts/Arielbd.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <Text style={styles.titleText}>
        My floor <Logo />s
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  titleText: {
    fontSize: 30,
    fontFamily: "ArielBD",
    paddingBottom: 30,
    paddingTop: 10,
    textAlign: "center",
  },
});

export default MyFloorPlansScreen;

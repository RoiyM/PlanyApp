import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import ImageButton from "../components/ImageButton";
import { floorplanOptions } from "../constans/floorplanOptions";
import { ScrollView } from "react-native-gesture-handler";
import * as Font from "expo-font";

const CreateFloorplanScreen = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      ArielBD: require("../../assets/fonts/Arielbd.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  const imageButtons = () => {
    return floorplanOptions.map((option) => {
      return (
        <ImageButton
          key={option.title}
          imageSource={option.imageSource}
          title={option.title}
          goToScreen={() => navigation.navigate(option.screen)}
        />
      );
    });
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleText}>
        What would you like to re-
        <Logo fontSize={20} /> ?
      </Text>
      {imageButtons()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  titleText: {
    fontFamily: "ArielBD",
    fontSize: 20,
    padding: 10,
    textAlign: "center",
  },
});

export default CreateFloorplanScreen;

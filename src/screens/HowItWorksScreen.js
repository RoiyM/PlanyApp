import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import { icons } from "../constans/icons";
import IconDetail from "../components/IconDetail";
import { useFonts } from "expo-font";

const HowItWorksScreen = () => {
  let [fontsLoaded] = useFonts({
    ArielBD: require("../../assets/fonts/Arielbd.ttf"),
  });
  const iconList = () => {
    return icons.map((icon) => {
      return (
        <IconDetail
          key={icon.title}
          name={icon.name}
          title={icon.title}
          text={icon.text}
          color={icon.color}
        />
      );
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Logo fontSize={25} /> will follow the work process of an architect.
        Providing professional floor plans according to your needs
      </Text>
      {iconList()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  text: {
    fontFamily: "ArielBD",
    textAlign: "center",
    fontSize: 20,
    margin: 25,
  },
});

export default HowItWorksScreen;

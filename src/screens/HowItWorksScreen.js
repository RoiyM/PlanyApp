import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Logo from "../components/Logo";
import { icons } from "../constans/icons";
import IconDetail from "../components/IconDetail";
import * as Font from "expo-font";

const HowItWorksScreen = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      ArielBD: require("../../assets/fonts/Arielbd.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

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
      <ScrollView>
        <Text style={styles.text}>
          <Logo fontSize={25} /> will follow the work process of an architect.
          Providing professional floor plans according to your needs
        </Text>
        {iconList()}
      </ScrollView>
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
    margin: 20,
  },
});

export default HowItWorksScreen;

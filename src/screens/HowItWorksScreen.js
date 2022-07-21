import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import { icons } from "../constans/icons";
import IconDetail from "../components/IconDetail";

const HowItWorksScreen = () => {
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
    <View>
      <Text style={styles.text}>
        <Logo />
        will follow the work process of an architect Providing professional
        floor plans according to your needs
      </Text>
      {iconList()}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    margin: 30,
  },
});

export default HowItWorksScreen;

import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Logo from "../components/Logo";
import { icons } from "../constans/icons";
import IconDetail from "../components/IconDetail";
import CustomText from "../components/CustomText";
import commonStyles from "../styles/commonStyles";

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
    <ScrollView contentContainerStyle={commonStyles.container}>
      <CustomText style={styles.text}>
        <Logo fontSize={25} /> will follow the work process of an architect.
        Providing professional floor plans according to your needs
      </CustomText>
      {iconList()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 20,
  },
});

export default HowItWorksScreen;

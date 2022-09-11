import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import Logo from "../components/Logo";
import CustomText from "../components/CustomText";
import commonStyles from "../styles/commonStyles";
import IconDetail from "../components/IconDetail";
import { icons } from "../constans/icons";

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
    <ScrollView contentContainerStyle={commonStyles.scrollViewContainer}>
      <SafeAreaView style={commonStyles.inner}>
        <CustomText style={commonStyles.howItWorksText}>
          <Logo fontSize={25} /> will follow the work process of an architect.
          {"\n"}
          Providing professional floor plans according to your needs
        </CustomText>
        {iconList()}
      </SafeAreaView>
    </ScrollView>
  );
};

export default HowItWorksScreen;

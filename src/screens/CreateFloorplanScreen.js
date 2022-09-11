import React from "react";
import { ScrollView } from "react-native";
import Logo from "../components/Logo";
import ImageButton from "../components/ImageButton";
import CustomText from "../components/CustomText";
import commonStyles from "../styles/commonStyles";
import { floorplanOptions } from "../constans/floorplanOptions";
import { SafeAreaView } from "react-native";

const CreateFloorplanScreen = ({ navigation }) => {
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
    <ScrollView contentContainerStyle={commonStyles.scrollViewContainer}>
      <SafeAreaView style={commonStyles.inner}>
        <CustomText style={commonStyles.text}>
          What would you like to re-
          <Logo fontSize={21} /> ?
        </CustomText>
        {imageButtons()}
      </SafeAreaView>
    </ScrollView>
  );
};

export default CreateFloorplanScreen;

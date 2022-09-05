import React from "react";
import { StyleSheet } from "react-native";
import Logo from "../components/Logo";
import ImageButton from "../components/ImageButton";
import { floorplanOptions } from "../constans/floorplanOptions";
import { ScrollView } from "react-native-gesture-handler";
import CustomText from "../components/CustomText";

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
    <ScrollView style={styles.container}>
      <CustomText style={styles.titleText}>
        What would you like to re-
        <Logo fontSize={20} /> ?
      </CustomText>
      {imageButtons()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  titleText: {
    fontSize: 20,
    padding: 10,
  },
});

export default CreateFloorplanScreen;

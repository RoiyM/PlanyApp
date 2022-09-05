import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import Logo from "../components/Logo";
import backgroundImage from "../../assets/myFloorplans_background.jpg";
import CustomText from "../components/CustomText";

const MyFloorPlansScreen = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <CustomText style={styles.title}>
        My floor <Logo />s
      </CustomText>
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
  title: {
    fontSize: 30,
    paddingBottom: 30,
    paddingTop: 10,
  },
});

export default MyFloorPlansScreen;

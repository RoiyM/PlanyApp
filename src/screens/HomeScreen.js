import React from "react";
import { View, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import ImageSwapper from "../components/ImageSwapper";
import PlanYButton from "../components/PlanYButton";
import CustomText from "../components/CustomText";
import { auth } from "../../config/firebase";
const planYpink = "#ff005de6";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo />
      <CustomText style={styles.text}>
        New{" "}
        <CustomText style={{ color: planYpink }}>
          floor plans options
        </CustomText>{" "}
        <CustomText>in a few steps</CustomText>
      </CustomText>
      <PlanYButton
        buttonText={"GET STARTED"}
        onPress={() => {
          auth.currentUser
            ? navigation.navigate("Create Floor Plan")
            : navigation.navigate("Sign In");
        }}
      />
      <ImageSwapper />
      <CustomText style={styles.text}>
        <Logo fontSize={21} />
        ourself - architecture platform
      </CustomText>
      <CustomText style={styles.smallText}>
        Get architectural services at a click of a button!
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    fontSize: 21,
  },
  smallText: {
    fontSize: 18,
  },
});

export default HomeScreen;

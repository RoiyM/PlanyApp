import React from "react";
import { SafeAreaView } from "react-native";
import Logo from "../components/Logo";
import ImageSwapper from "../components/ImageSwapper";
import PlanYButton from "../components/PlanYButton";
import CustomText from "../components/CustomText";
import { auth } from "../../config/firebase";
import commonStyles from "../styles/commonStyles";
const planYpink = "#ff005de6";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={commonStyles.viewContainer}>
      <Logo />
      <CustomText style={commonStyles.text}>
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
      <CustomText style={commonStyles.text}>
        <Logo fontSize={21} />
        ourself - architecture platform
      </CustomText>
      <CustomText style={commonStyles.smallText}>
        Get architectural services at a click of a button!
      </CustomText>
    </SafeAreaView>
  );
};

export default HomeScreen;

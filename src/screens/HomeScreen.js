import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import ImageSwapper from "../components/ImageSwapper";
import PlanYButton from "../components/PlanYButton";
import { useFonts } from "expo-font";
const planYpink = "#ff005de6";

const HomeScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    ArielBD: require("../../assets/fonts/Arielbd.ttf"),
  });

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>
        New <Text style={styles.pinkText}>floor plans options</Text>{" "}
        <Text>in a few steps</Text>
      </Text>
      <PlanYButton
        buttonText={"GET STARTED"}
        onPress={() => {
          true
            ? navigation.navigate("How It Works")
            : navigation.navigate("Sign In"); //need to check if user logged in
        }}
      />
      <ImageSwapper />
      <Text style={styles.bold_text}>
        <Logo fontSize={20} />
        ourself - architecture platform
      </Text>
      <Text style={styles.text}>
        Get architectural services at a click of a button!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "ArielBD",
  },
  pinkText: {
    color: planYpink,
    fontSize: 20,
  },
  bold_text: {
    fontSize: 20,
    fontFamily: "ArielBD",
    textAlign: "center",
    margin: 10,
  },
});

export default HomeScreen;

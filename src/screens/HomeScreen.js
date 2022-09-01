import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import ImageSwapper from "../components/ImageSwapper";
import PlanYButton from "../components/PlanYButton";
const planYpink = "#ff005de6";
import * as Font from "expo-font";
import { auth } from "../../config/firebase";

const HomeScreen = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      ArielBD: require("../../assets/fonts/Arielbd.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) return null;

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>
        New <Text style={{ color: planYpink }}>floor plans options</Text>{" "}
        <Text>in a few steps</Text>
      </Text>
      <PlanYButton
        buttonText={"GET STARTED"}
        onPress={() => {
          auth.currentUser
            ? navigation.navigate("How It Works")
            : navigation.navigate("Sign In"); //need to check if user logged in
        }}
      />
      <ImageSwapper />
      <Text style={styles.text}>
        <Logo fontSize={21} />
        ourself - architecture platform
      </Text>
      <Text style={styles.smallText}>
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
  },
  text: {
    textAlign: "center",
    fontSize: 21,
    fontFamily: "ArielBD",
  },
  smallText: {
    fontSize: 18,
    fontFamily: "ArielBD",
    textAlign: "center",
  },
});

export default HomeScreen;

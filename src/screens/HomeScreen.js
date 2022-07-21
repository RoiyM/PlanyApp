import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Logo from "../components/Logo";
import ImageSwapper from "../components/ImageSwapper";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Logo />
      <Text style={styles.text}>
        New <Text style={styles.pinkText}>floor plans options</Text>{" "}
        <Text>in a few steps</Text>
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.pinkText} fontSize="30">
          GET STARTED
        </Text>
      </TouchableOpacity>
      <ImageSwapper />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
  },
  pinkText: {
    color: "#ff005de6",
    fontSize: 20,
  },
  button: {
    borderColor: "#ff005de6",
    borderRadius: 2,
    borderWidth: 1,
    margin: 20,
    width: 170,
    alignSelf: "center",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 350,
    alignSelf: "center",
    margin: 50,
  },
});

export default HomeScreen;

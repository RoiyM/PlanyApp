import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Logo from "../components/Logo";
import ImageSwapper from "../components/ImageSwapper";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>
        New <Text style={styles.pinkText}>floor plans options</Text>{" "}
        <Text>in a few steps</Text>
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Sign In")}
      >
        <Text style={styles.pinkText}>GET STARTED</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 30,
  },
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
    width: 150,
    alignSelf: "center",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 350,
    alignSelf: "center",
    margin: 50,
  },
  bold_text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
});

export default HomeScreen;

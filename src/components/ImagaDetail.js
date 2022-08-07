import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useFonts } from "expo-font";

const ImageDetail = ({ imageSource, fullName, position, experience }) => {
  let [fontsLoaded] = useFonts({
    ArielBD: require("../../assets/fonts/Arielbd.ttf"),
  });
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.full_name}>{fullName}</Text>
      <Text style={styles.text}>{position}</Text>
      <Text style={styles.text}>{experience}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifycontent: "center",
  },
  image: {
    alignSelf: "center",
  },
  full_name: {
    fontSize: 20,
    fontFamily: "ArielBD",
    textAlign: "center",
    paddingTop: 10,
  },
  text: {
    textAlign: "center",
    fontFamily: "ArielBD",
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
});

export default ImageDetail;

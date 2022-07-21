import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ imageSource, fullName, position, experience }) => {
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
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10,
  },
  text: {
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
});

export default ImageDetail;

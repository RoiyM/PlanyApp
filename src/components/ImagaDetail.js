import React from "react";
import { View, StyleSheet, Image } from "react-native";
import CustomText from "./CustomText";

const ImageDetail = ({ imageSource, fullName, position, experience }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <CustomText style={styles.full_name}>{fullName}</CustomText>
      <CustomText style={styles.text}>{position}</CustomText>
      <CustomText style={styles.text}>{experience}</CustomText>
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
    paddingTop: 10,
  },
  text: {
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
});

export default ImageDetail;

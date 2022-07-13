import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ imageSource, fullName, position, experience }) => {
  return (
    <View>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.full_name}>{fullName}</Text>
      <Text>{position}</Text>
      <Text>{experience}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
  },
  full_name: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default ImageDetail;

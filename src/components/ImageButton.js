import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import CustomText from "./CustomText";

const ImageButton = ({ imageSource, title, goToScreen }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToScreen}>
        <Image source={imageSource} style={styles.image} />
        <CustomText>{title}</CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export default ImageButton;

import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { CheckBox } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
const planYpink = "#ff005de6";
const imageHeight = Math.round((Dimensions.get("window").width * 9) / 16);
const imageWidth = Dimensions.get("window").width;

const SelectImage = ({ imageSource }) => {
  const [isSelected, setSelection] = useState(false);

  const handleSelection = () => {
    setSelection(!isSelected);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSelection}>
        <Image source={imageSource} style={styles.image} />
      </TouchableOpacity>
      <CheckBox
        checked={isSelected}
        checkedColor={planYpink}
        onPress={handleSelection}
        style={styles.checkbox}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifycontent: "center",
    alignItems: "center",
  },
  image: {
    alignSelf: "center",
    height: imageHeight,
    width: imageWidth,
  },
  checkbox: {
    alignSelf: "center",
  },
});

export default SelectImage;

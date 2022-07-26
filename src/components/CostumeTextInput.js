import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const CostumeTextInput = ({ placeholder, height = 40 }) => {
  const [text, onChangeText] = useState("");

  return (
    <TextInput
      style={styles(height).text}
      onChangeText={onChangeText}
      value={text}
      placeholder={placeholder}
      multiline={true} // ios fix for centering it at the top-left corner
      blurOnSubmit={true}
    />
  );
};

const styles = (height) =>
  StyleSheet.create({
    text: {
      height,
      width: 350,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      textAlignVertical: "top", // android fix for centering it at the top-left corner
    },
  });

export default CostumeTextInput;

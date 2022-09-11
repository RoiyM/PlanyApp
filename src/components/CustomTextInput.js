import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import * as Font from "expo-font";

const CustomeTextInput = ({
  placeholder = "",
  value = "",
  onChangeText = () => {},
  keyboardType = "default",
  editable = true,
  height = 40,
  titleAbove = "",
  onBlur = () => {},
}) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      ArielBD: require("../../assets/fonts/Arielbd.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles(height).title}>{titleAbove}</Text>
      <TextInput
        style={styles(height).text}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        multiline={true} // ios fix for centering it at the top-left corner
        blurOnSubmit={true}
        editable={editable}
        onBlur={onBlur}
      />
    </View>
  );
};

const styles = (height) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 10,
    },
    title: {
      fontSize: 15,
      fontFamily: "ArielBD",
      textAlign: "center",
    },
    text: {
      fontFamily: "ArielBD",
      textAlign: "left",
      height,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      textAlignVertical: "top", // android fix for centering it at the top-left corner
    },
  });

export default CustomeTextInput;

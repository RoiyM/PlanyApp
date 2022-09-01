import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import * as Font from "expo-font";

const CustomeTextInput = ({
  placeholder = "",
  text,
  setText,
  keyboardType = "default",
  editable = true,
  height = 40,
  titleAbove = "",
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
        onChangeText={setText}
        value={text}
        placeholder={placeholder}
        keyboardType={keyboardType}
        multiline={true} // ios fix for centering it at the top-left corner
        blurOnSubmit={true}
        editable={editable}
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
      fontSize: 18,
      fontFamily: "ArielBD",
      textAlign: "center",
    },
    text: {
      fontFamily: "ArielBD",
      height,
      width: 350,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      textAlignVertical: "top", // android fix for centering it at the top-left corner
    },
  });

export default CustomeTextInput;

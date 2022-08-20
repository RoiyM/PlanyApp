import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Font from "expo-font";

const MessagesScreen = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      ArielBD: require("../../assets/fonts/Arielbd.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.titleText}>My messages</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontFamily: "ArielBD",
    paddingBottom: 30,
    paddingTop: 10,
    textAlign: "center",
  },
});

export default MessagesScreen;

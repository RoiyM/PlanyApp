import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.logo}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    alignItems: "center", 
    justifyContent: "center" 
  },
  buttonStyle: {
    width: 200,
    margin: 5,
  }
});

export default HomeScreen;

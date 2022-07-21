import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import background from "../../assets/bck.jpg";

const DemoScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="stretch"
        style={styles.image}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>Load Image</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Demo Screen</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.button_text}>Analyze</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 2,
    borderColor: "#345a83",
    borderWidth: 1,
    padding: 10,
    margin: 30,
    width: 130,
    alignSelf: "center",
  },
  button_text: {
    color: "#345a83",
  },
});

export default DemoScreen;

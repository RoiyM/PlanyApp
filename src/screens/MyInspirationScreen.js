import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import PlanYButton from "../components/PlanYButton";
import SelectImage from "../components/SelectImage";
import { inspirationImages } from "../constans/inspirationImages";
import * as Font from "expo-font";

const MyInspirationScreen = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      ArielBD: require("../../assets/fonts/Arielbd.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  const list = () => {
    return inspirationImages.map((image) => {
      return (
        <SelectImage key={image.imageSource} imageSource={image.imageSource} />
      );
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titleText}>My inspiration</Text>
        <Text style={styles.text}>
          You can share with us what you like from the following pictures
        </Text>
        {list()}
        <PlanYButton buttonText={"Submit"} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 30,
    fontFamily: "ArielBD",
    paddingBottom: 30,
    paddingTop: 10,
    textAlign: "center",
  },
  text: {
    fontFamily: "ArielBD",
    textAlign: "center",
    fontSize: 17,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default MyInspirationScreen;

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import PlanYButton from "../components/PlanYButton";
import CustomTextInput from "../components/CustomTextInput";
import * as Font from "expo-font";

const ContactUsScreen = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      ArielBD: require("../../assets/fonts/Arielbd.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  const submitText = () => {
    Alert.alert("Submit", "Submitted successfully", [
      {
        text: "Ok",
      },
    ]);
    setMessage("");
    setSubject("");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Contact Us</Text>
        <CustomTextInput
          placeholder={"Subject"}
          text={subject}
          setText={setSubject}
        />
        <CustomTextInput
          placeholder={"Message"}
          text={message}
          setText={setMessage}
          height={400}
        />
        <PlanYButton buttonText={"Submit"} onPress={submitText} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "ArielBD",
    fontSize: 30,
    textAlign: "center",
  },
  text: {
    fontFamily: "ArielBD",
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top", // android fix for centering it at the top-left corner
  },
});

export default ContactUsScreen;

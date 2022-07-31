import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import PlanYButton from "../components/PlanYButton";
import CustomeTextInput from "../components/CustomeTextInput";

const ContactUsScreen = () => {
  const submitText = () => {
    Alert.alert("Submit", "Submitted successfully", [
      {
        text: "Ok",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <CustomeTextInput placeholder={"Subject"} />
      <CustomeTextInput placeholder={"Message"} height={400} />
      <PlanYButton buttonText={"Submit"} onPress={submitText} />
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
    fontWeight: "bold",
    fontSize: 30,
  },
  text: {
    height: 40,
    width: 350,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top", // android fix for centering it at the top-left corner
  },
});

export default ContactUsScreen;

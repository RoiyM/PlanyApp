import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import * as Font from "expo-font";
import CustomeTextInput from "../components/CustomTextInput";
import PlanYButton from "../components/PlanYButton";

import { db, auth } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const getUserInfo = async () => {
  const docRef = doc(db, "users", auth.currentUser.uid);
  const userInfo = await getDoc(docRef);
  return userInfo.data();
};

const ProfileScreen = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Private");

  //const userInfo = getUserInfo();

  useEffect(() => {
    Font.loadAsync({
      ArielBD: require("../../assets/fonts/Arielbd.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titleText}>Profile</Text>
        <CustomeTextInput titleAbove="Phone" />
        <CustomeTextInput titleAbove="Firstname" />
        <CustomeTextInput titleAbove="Lastname" />
        <PlanYButton buttonText={"Update"} />
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
});

export default ProfileScreen;

import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import PlanYButton from "../components/PlanYButton";
import CustomText from "../components/CustomText";
import { db, auth } from "../../config/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";

const ProfileScreen = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const docRef = doc(db, "users", auth.currentUser.uid);
  const getUserInfo = async () => {
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFirstName(docSnap.data().firstName);
        setLastName(docSnap.data().lastName);
        setPhoneNumber(docSnap.data().phoneNumber);
        //console.log(docSnap.data());
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  const updateUserInfo = async () => {
    const docData = {
      phoneNumber: phoneNumber,
      firstName: firstName,
      lastName: lastName,
    };
    await updateDoc(docRef, docData);
    Alert.alert("Update", "successfully updated", [
      {
        text: "Ok",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <CustomText style={styles.title}>Profile</CustomText>
        <CustomTextInput
          titleAbove="Email"
          editable={false}
          placeholder={auth.currentUser.email}
        />
        <CustomTextInput
          titleAbove="Phone"
          keyboardType="numeric"
          text={phoneNumber}
          setText={setPhoneNumber}
        />
        <CustomTextInput
          titleAbove="First Name"
          text={firstName}
          setText={setFirstName}
        />
        <CustomTextInput
          titleAbove="Last Name"
          text={lastName}
          setText={setLastName}
        />
        <PlanYButton buttonText={"Update"} onPress={updateUserInfo} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    paddingBottom: 30,
    paddingTop: 10,
  },
});

export default ProfileScreen;

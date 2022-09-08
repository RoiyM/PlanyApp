import React, { useState } from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import PlanYButton from "../components/PlanYButton";
import CustomTextInput from "../components/CustomTextInput";
import { db, auth } from "../../config/firebase";
import {
  doc,
  updateDoc,
  arrayUnion,
  collection,
  addDoc,
} from "firebase/firestore";
import commonStyles from "../styles/commonStyles";

const ContactUsScreen = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitMessage = async () => {
    //const docRef = doc(db, "users", auth.currentUser.uid);
    const docData = {
      subject: subject,
      message: message,
    };
    await addDoc(
      collection(db, "users/" + auth.currentUser.uid + "/messages"),
      docData
    );

    Alert.alert("Submit", "Submitted successfully", [
      {
        text: "Ok",
      },
    ]);
    setMessage("");
    setSubject("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomTextInput
        titleAbove="Email"
        editable={false}
        placeholder={auth.currentUser.email}
      />
      <CustomTextInput
        titleAbove="Subject"
        value={subject}
        onChangeText={setSubject}
      />
      <CustomTextInput
        titleAbove="Message"
        value={message}
        onChangeText={setMessage}
        height={400}
      />
      <PlanYButton buttonText={"Submit"} onPress={submitMessage} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
});

export default ContactUsScreen;

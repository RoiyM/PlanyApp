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
    <View style={styles.container}>
      <ScrollView>
        <CustomTextInput
          titleAbove="Email"
          editable={false}
          text={auth.currentUser.email}
        />
        <CustomTextInput
          titleAbove="Subject"
          text={subject}
          setText={setSubject}
        />
        <CustomTextInput
          titleAbove="Message"
          text={message}
          setText={setMessage}
          height={400}
        />
        <PlanYButton buttonText={"Submit"} onPress={submitMessage} />
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
});

export default ContactUsScreen;

import React, { useState } from "react";
import { SafeAreaView, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PlanYButton from "../components/PlanYButton";
import CustomTextInput from "../components/CustomTextInput";
import { db, auth } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import commonStyles from "../styles/commonStyles";

const ContactUsScreen = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitMessage = async () => {
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
    <KeyboardAwareScrollView
      contentContainerStyle={commonStyles.scrollViewContainer}
    >
      <SafeAreaView style={commonStyles.inner}>
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
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default ContactUsScreen;

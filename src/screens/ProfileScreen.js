import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import CustomTextInput from "../components/CustomTextInput";
import PlanYButton from "../components/PlanYButton";
import CustomText from "../components/CustomText";
import { db, auth } from "../../config/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import commonStyles from "../styles/commonStyles";

const ProfileScreen = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const docRef = doc(db, "users", auth.currentUser.uid);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setProfilePhoto(result.base64);
    }
  };

  const getUserInfo = async () => {
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        if (docSnap.data().profilePhoto != "") {
          setProfilePhoto(docSnap.data().profilePhoto);
        }
        setFirstName(docSnap.data().firstName);
        setLastName(docSnap.data().lastName);
        setPhoneNumber(docSnap.data().phoneNumber);
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
      profilePhoto: profilePhoto,
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
    <View style={commonStyles.container}>
      <ScrollView>
        <CustomText style={styles.title}>Profile</CustomText>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={
              profilePhoto
                ? { uri: `data:image/png;base64, ${profilePhoto}` }
                : require("../../assets/userProfile.jpg")
            }
            style={[commonStyles.avatar, { alignSelf: "center" }]}
          />
        </TouchableOpacity>
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
  title: {
    fontSize: 30,
    paddingBottom: 30,
    paddingTop: 10,
  },
});

export default ProfileScreen;

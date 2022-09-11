import React, { useState, useEffect } from "react";
import { View, ScrollView, Alert, TouchableOpacity, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";
import CustomTextInput from "../components/CustomTextInput";
import PlanYButton from "../components/PlanYButton";
import CustomText from "../components/CustomText";
import { db, auth } from "../../config/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import commonStyles from "../styles/commonStyles";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import Spinner from "react-native-loading-spinner-overlay";

const ProfileScreen = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [validationMessage, setValidationMessage] = useState("");
  const [loading, setLoading] = useState(false);
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
    if (phoneNumber.length == 10 || phoneNumber.length == 0) {
      try {
        const docData = {
          profilePhoto: profilePhoto,
          phoneNumber: phoneNumber,
          firstName: firstName,
          lastName: lastName,
        };
        setLoading(true);
        await updateDoc(docRef, docData);
        setLoading(false);
        Alert.alert("Update", "successfully updated", [
          {
            text: "Ok",
          },
        ]);
      } catch (e) {
        setLoading(false);
        Alert.alert(
          "Error",
          "Couldn't save changes- your profile image is too big.",
          [
            {
              text: "Ok",
            },
          ]
        );
      }
    } else {
      Alert.alert(
        "Invalid field",
        "Please enter a valid 10-digit phone number or not at all",
        [
          {
            text: "Ok",
          },
        ]
      );
    }
  };

  const checkValidPhoneNumber = () => {
    if (phoneNumber.length == 10 || phoneNumber.length == 0) {
      setValidationMessage("");
    } else {
      setValidationMessage("Please enter a valid 10-digit phone number");
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={commonStyles.scrollViewContainer}
    >
      <View style={commonStyles.inner}>
        <CustomText style={commonStyles.mainTitle}>Profile</CustomText>
        <Spinner visible={loading} textStyle={commonStyles.spinnerTextStyle} />
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
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          onBlur={checkValidPhoneNumber}
        />
        <CustomTextInput
          titleAbove="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <CustomTextInput
          titleAbove="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        {
          <CustomText style={commonStyles.error}>
            {validationMessage}
          </CustomText>
        }
        <PlanYButton buttonText={"Update"} onPress={updateUserInfo} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ProfileScreen;

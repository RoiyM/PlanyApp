import React, { useEffect, useState } from "react";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { signOut } from "firebase/auth";
import { db, auth } from "../../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import CustomText from "./CustomText";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import commonStyles from "../styles/commonStyles";
const planYpink = "#ff0056";

const CustomDrawer = (props) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const docRef = doc(db, "users", auth.currentUser.uid);

  const getUserInfo = async () => {
    try {
      onSnapshot(docRef, (doc) => {
        setFirstName(doc.data().firstName);
        setLastName(doc.data().lastName);
        setProfilePhoto(doc.data().profilePhoto);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: planYpink }}
      >
        <ImageBackground
          source={require("../../assets/userBackground.png")}
          style={{ padding: 10 }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Profile")}
          >
            <Image
              source={
                profilePhoto
                  ? { uri: `data:image/png;base64, ${profilePhoto.base64}` }
                  : require("../../assets/userProfile.jpg")
              }
              style={commonStyles.avatar}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <CustomText style={{ color: "#fff", fontSize: 16 }}>
              {firstName + " " + lastName}
            </CustomText>
          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social-outline" size={22} color="black" />
            <CustomText
              style={{
                fontSize: 15,
                marginLeft: 5,
                color: "black",
              }}
            >
              Tell a Friend
            </CustomText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => signOut(auth)}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} color="black" />
            <CustomText
              style={{
                fontSize: 15,
                marginLeft: 5,
                color: "black",
              }}
            >
              Sign Out
            </CustomText>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

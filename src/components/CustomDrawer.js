import React, { useEffect, useState } from "react";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { db, auth, onSnapshotPro, signOutProxy } from "../../config/firebase";
import { doc } from "firebase/firestore";
import CustomText from "./CustomText";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
const planYpink = "#ff0056";

const CustomDrawer = (props) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const docRef = doc(db, "users", auth.currentUser.uid);

  const getUserInfo = async () => {
    try {
      onSnapshotPro(docRef, (doc) => {
        setFirstName(doc.data().firstName);
        setLastName(doc.data().lastName);
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
              source={require("../../assets/userProfile.jpg")}
              style={{
                height: 80,
                width: 80,
                borderRadius: 60,
                marginBottom: 10,
              }}
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
          onPress={() => signOutProxy(auth)}
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

import React, { useEffect, useState } from "react";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import CustomText from "./CustomText";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
const planYpink = "#ff0056";

const CustomDrawer = (props) => {
  const [name, setName] = useState("anonymous user");
  useEffect(() => {
    setName(auth.currentUser.displayName);
  }, [auth.currentUser.displayName]);
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
              {name}
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

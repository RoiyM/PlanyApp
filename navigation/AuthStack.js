import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../src/screens/HomeScreen";
import HowItWorksScreen from "../src/screens/HowItWorksScreen";
import AboutScreen from "../src/screens/AboutScreen";
import SignupScreen from "../src/screens/SignupScreen";
import SigninScreen from "../src/screens/SigninScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Drawer = createDrawerNavigator();
const planYpink = "#ff0056";

export default function AuthStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "black",
        drawerLabelStyle: {
          color: "black",
          marginLeft: -25,
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerActiveTintColor: planYpink,
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="How It Works"
        component={HowItWorksScreen}
        options={{
          drawerActiveTintColor: planYpink,
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerActiveTintColor: planYpink,
          drawerIcon: ({ color }) => (
            <Ionicons
              name="information-circle-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Sign In"
        component={SigninScreen}
        options={{
          drawerActiveTintColor: planYpink,
          drawerIcon: ({ color }) => (
            <Ionicons name="log-in-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sign Up"
        component={SignupScreen}
        options={{
          drawerActiveTintColor: planYpink,
          drawerIcon: ({ color }) => (
            <Ionicons name="person-add-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

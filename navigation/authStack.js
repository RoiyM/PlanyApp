import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../src/screens/HomeScreen";
import HowItWorksScreen from "../src/screens/HowItWorksScreen";
import AboutScreen from "../src/screens/AboutScreen";
import SignupScreen from "../src/screens/SignupScreen";
import SigninScreen from "../src/screens/SigninScreen";

const Drawer = createDrawerNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="How It Works" component={HowItWorksScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Sign In" component={SigninScreen} />
        <Drawer.Screen name="Sign Up" component={SignupScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

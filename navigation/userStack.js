import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../src/screens/HomeScreen";
import AboutScreen from "../src/screens/AboutScreen";
import SigninScreen from "../src/screens/SigninScreen";
import HowItWorksScreen from "../src/screens/HowItWorksScreen";
import ContactUsScreen from "../src/screens/ContactUsScreen";
import CreateFloorplanScreen from "../src/screens/CreateFloorplanScreen";
import DemoScreen from "../src/screens/DemoScreen";

const Drawer = createDrawerNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Demo" component={DemoScreen} />
        <Drawer.Screen name="How It Works" component={HowItWorksScreen} />
        <Drawer.Screen
          name="Create Floor Plan"
          component={CreateFloorplanScreen}
        />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
        <Drawer.Screen name="Sign In" component={SigninScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
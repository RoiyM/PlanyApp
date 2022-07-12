import "react-native-gesture-handler";
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";


import HomeScreen from "./src/screens/HomeScreen";
import SignupScreen from "./src/screens/SignupScreen";
import AboutScreen from "./src/screens/AboutScreen";
import SigninScreen from "./src/screens/SigninScreen";
import HowItWorksScreen from "./src/screens/HowItWorksScreen";
import ContactUsScreen from "./src/screens/ContactUsScreen";
import CreateFloorplanScreen from "./src/screens/CreateFloorplanScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen}/>
        <Drawer.Screen name="HowItWorks" component={HowItWorksScreen} />
        <Drawer.Screen name="CreateFloorplan" component={CreateFloorplanScreen} />
        <Drawer.Screen name="ContactUs" component={ContactUsScreen} />
        <Drawer.Screen name="Signin" component={SigninScreen} />
        <Drawer.Screen name="Signup" component={SignupScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
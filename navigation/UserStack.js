import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../src/screens/HomeScreen";
import AboutScreen from "../src/screens/AboutScreen";
import HowItWorksScreen from "../src/screens/HowItWorksScreen";
import ContactUsScreen from "../src/screens/ContactUsScreen";
import CreateFloorplanScreen from "../src/screens/CreateFloorplanScreen";
import DemoScreen from "../src/screens/DemoScreen";

import BottomTabNavigator from "./ButtomTabNavigator";
import DetailsFirstScreen from "../src/screens/createFloorplanScreens/DetailsFirstScreen";
import DetailsSecondScreen from "../src/screens/createFloorplanScreens/DetailsSecondScreen";
import UploadFloorplanScreen from "../src/screens/createFloorplanScreens/UploadFloorplanScreen";
import CustomDrawer from "../src/components/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const planYpink = "#ff0056";

export default function UserStack() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
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
      <Stack.Screen
        name="Profile"
        component={BottomTabNavigator}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="Demo"
        component={DemoScreen}
        options={{
          drawerActiveTintColor: planYpink,
          drawerIcon: ({ color }) => (
            <Ionicons name="image-outline" size={22} color={color} />
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
        name="Create Floor Plan"
        children={CreateFloorplanScreen}
        options={{
          drawerActiveTintColor: planYpink,
          drawerIcon: ({ color }) => (
            <Ionicons name="create-outline" size={22} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="Details first screen"
        component={DetailsFirstScreen}
        options={{
          drawerItemStyle: { display: "none" },
          title: "Create Floor Plan",
        }}
      />
      <Stack.Screen
        name="Details second screen"
        component={DetailsSecondScreen}
        options={{
          drawerItemStyle: { display: "none" },
          title: "Create Floor Plan",
        }}
      />
      <Stack.Screen
        name="Upload floorplan screen"
        component={UploadFloorplanScreen}
        options={{
          drawerItemStyle: { display: "none" },
          title: "Create Floor Plan",
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
        name="Contact Us"
        component={ContactUsScreen}
        options={{
          drawerActiveTintColor: planYpink,
          drawerIcon: ({ color }) => (
            <Ionicons name="call-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

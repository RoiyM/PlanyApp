import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../src/screens/ProfileScreen";
import MyInspirationScreen from "../src/screens/MyInspirationScreen";
import MyFloorPlansScreen from "../src/screens/MyFloorPlansScreen";
import MessagesScreen from "../src/screens/MessagesScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const planYpink = "#ff0056";

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Profile Screen") {
            return (
              <Ionicons
                name={focused ? "person-circle" : "person-circle-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "My inspiration") {
            return (
              <Ionicons
                name={focused ? "camera" : "camera-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "My floor plans") {
            return (
              <Ionicons
                name={focused ? "cube" : "cube-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Messages") {
            return (
              <Ionicons
                name={focused ? "mail" : "mail-outline"}
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: planYpink,
      })}
    >
      <Tab.Screen name="Profile Screen" component={ProfileScreen} />
      <Tab.Screen name="My inspiration" component={MyInspirationScreen} />
      <Tab.Screen name="My floor plans" component={MyFloorPlansScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

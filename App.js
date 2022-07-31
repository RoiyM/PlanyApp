import "react-native-gesture-handler";
import React from "react";
import "./config/firebase";
import RootNavigation from "./navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

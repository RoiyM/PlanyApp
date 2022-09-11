import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CheckBox = (props) => {
  const iconName = props.checked ? "checkbox-marked" : "checkbox-blank-outline";

  return (
    <View style={styles.container}>
      <Pressable onPress={props.onPress}>
        <MaterialCommunityIcons name={iconName} size={22} color="black" />
      </Pressable>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 15,
    color: "#000",
    // marginLeft: 5,
    fontWeight: "400",
  },
});

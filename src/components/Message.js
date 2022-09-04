import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Card } from "react-native-elements";
import CustomText from "./CustomText";

const Message = ({ subject, message }) => {
  return (
    <SafeAreaView>
      <Card containerStyle={{}} wrapperStyle={{}}>
        <Card.Title style={styles.title}>{subject}</Card.Title>
        <Card.Divider />
        <View
          style={{
            position: "relative",
            alignItems: "center",
          }}
        >
          <CustomText style={styles.text}>{message}</CustomText>
        </View>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "ArielBD",
    fontSize: 18,
  },
  text: {
    fontFamily: "ArielBD",
    fontSize: 15,
  },
});

export default Message;

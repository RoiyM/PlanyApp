import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.logo}>
      <Text>Home Screen</Text>
      <Button
        buttonStyle={{ width: 200 }}
        containerStyle={{ margin: 5 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#ff005de6",
        }}
        disabledTitleStyle={{ color: "#ff005de6" }}
        loadingProps={{ animating: true }}
        onPress={() => navigation.navigate("Signup")}
        title="GET STARTED"
        titleStyle={{ marginHorizontal: 5 }}
        type="outline"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default HomeScreen;

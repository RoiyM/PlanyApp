import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuthentication } from "../../utils/hooks/useAuthentication";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import Logo from "../components/Logo";

const auth = getAuth();

const HomeScreen = ({ navigation }) => {
  const { user } = useAuthentication();

  return (
    <View style={styles.container}>
      <Logo />
      <Text>Welcome {user?.email}!</Text>
      <Button
        title="Sign Out"
        style={{ marginTop: 10 }}
        onPress={() => signOut(auth)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;

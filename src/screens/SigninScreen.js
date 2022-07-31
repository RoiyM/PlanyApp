import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";
import Logo from "../components/Logo";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PlanYButton from "../components/PlanYButton";

const auth = getAuth();
const planYpink = "#ff005de6";

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationMessage, setvalidationMessage] = useState("");

  async function login() {
    if (email === "" || password === "") {
      setvalidationMessage("required filled missing");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setvalidationMessage(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Logo />
        <Input
          placeholder="Email"
          style={styles.input}
          containerStyle={styles.containerInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
          leftIcon={<Icon name="envelope" size={16} />}
        />
        <Input
          placeholder="Password"
          style={styles.input}
          containerStyle={styles.containerInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          leftIcon={<Icon name="key" size={16} />}
        />
        {<Text style={styles.error}>{validationMessage}</Text>}
        <PlanYButton buttonText={"Sign In"} onPress={login} />
        <Text style={{ marginTop: 5, fontSize: 17 }}>
          {" "}
          Don't have an account yet ?
          <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
            <Text style={styles.textButton}> Sign up here</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    bottom: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  containerInput: {
    marginTop: 10,
    width: 300,
  },
  input: {
    width: 9000,
    margin: 12,
    padding: 10,
  },
  error: {
    marginTop: 10,
    color: "red",
  },
  button: {
    borderColor: planYpink,
    borderRadius: 2,
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
    alignSelf: "center",
    alignItems: "center",
  },
  textButton: {
    color: planYpink,
    marginTop: 30,
    textDecorationLine: "underline",
  },
});

export default SigninScreen;

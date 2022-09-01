import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import Logo from "../components/Logo";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import PlanYButton from "../components/PlanYButton";
import * as Font from "expo-font";

const planYpink = "#ff005de6";

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationMessage, setvalidationMessage] = useState("");
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      ArielBD: require("../../assets/fonts/Arielbd.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
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
          <Text style={styles.text}>
            Don't have an account yet ?
            <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
              <Text style={styles.textButton}> Sign up here</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
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
  text: {
    marginTop: 5,
    fontSize: 17,
    fontFamily: "ArielBD",
  },
  textButton: {
    fontFamily: "ArielBD",
    color: planYpink,
    marginTop: 30,
    textDecorationLine: "underline",
  },
});

export default SigninScreen;

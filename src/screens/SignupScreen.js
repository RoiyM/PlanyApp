import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { auth, db, signupAndAddUserToDB } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Logo from "../components/Logo";
import PlanYButton from "../components/PlanYButton";
import * as Font from "expo-font";
// import { collection, addDoc } from "firebase/firestore";

const planYpink = "#ff005de6";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      ArielBD: require("../../assets/fonts/Arielbd.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  let validateAndSet = (value, setValue) => {
    setValue(value);
  };
  function checkPassword(firstpassword, secondpassword) {
    if (firstpassword !== secondpassword) {
      setValidationMessage("Password do not match");
    } else setValidationMessage("");
  }
  async function createAccount() {
    email === "" || password === ""
      ? setValidationMessage("required filled missing")
      : "";
    try {
      await signupAndAddUserToDB(email, password, fullName);
    } catch (error) {
      setValidationMessage(error.message);
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <Logo />
        <Input
          placeholder="Email"
          containerStyle={styles.containerInput}
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          leftIcon={<Icon name="envelope" size={16} />}
        />
        <Input
          placeholder="Password"
          containerStyle={styles.containerInput}
          style={styles.input}
          value={password}
          onChangeText={(value) => validateAndSet(value, setPassword)}
          secureTextEntry
          leftIcon={<Icon name="key" size={16} />}
        />
        <Input
          placeholder="confirm password"
          containerStyle={styles.containerInput}
          style={styles.input}
          value={confirmPassword}
          onChangeText={(value) => validateAndSet(value, setConfirmPassword)}
          leftIcon={<Icon name="key" size={16} />}
          secureTextEntry
          onBlur={() => checkPassword(password, confirmPassword)}
        />
        <Input
          placeholder="full name"
          containerStyle={styles.containerInput}
          style={styles.input}
          value={fullName}
          onChangeText={(text) => setFullName(text)}
          leftIcon={<Icon name="user" size={16} />}
        />
        {<Text style={styles.error}>{validationMessage}</Text>}
        <PlanYButton buttonText={"Sign up"} onPress={createAccount} />
        <View>
          <Text style={styles.text}>
            Already have an account?
            <TouchableOpacity onPress={() => navigation.navigate("Sign In")}>
              <Text style={styles.textButton}> Login here</Text>
            </TouchableOpacity>
          </Text>
        </View>
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
    padding: 10,
  },
  containerInput: {
    marginTop: 10,
    width: 300,
  },
  error: {
    marginTop: 10,
    color: "red",
    textAlign: "center",
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

export default SignUpScreen;

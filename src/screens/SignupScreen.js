import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { signupAndAddUserToDB } from "../../config/firebase";
import Logo from "../components/Logo";
import PlanYButton from "../components/PlanYButton";
import CustomText from "../components/CustomText";
const planYpink = "#ff005de6";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

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
      await signupAndAddUserToDB(email, password);
    } catch (error) {
      setValidationMessage(error.message);
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
          {<CustomText style={styles.error}>{validationMessage}</CustomText>}
          <PlanYButton buttonText={"Sign up"} onPress={createAccount} />
          <View>
            <CustomText style={styles.text}>
              Already have an account?
              <TouchableOpacity onPress={() => navigation.navigate("Sign In")}>
                <CustomText style={styles.textButton}> Login here</CustomText>
              </TouchableOpacity>
            </CustomText>
          </View>
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
  },
  text: {
    marginTop: 5,
    fontSize: 17,
  },
  textButton: {
    color: planYpink,
    marginTop: 30,
    textDecorationLine: "underline",
  },
});

export default SignUpScreen;

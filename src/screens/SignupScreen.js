import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
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
import commonStyles from "../styles/commonStyles";

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
      style={commonStyles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={commonStyles.inner}>
          <Logo />
          <Input
            placeholder="Email"
            containerStyle={commonStyles.containerInput}
            style={commonStyles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            leftIcon={<Icon name="envelope" size={16} />}
          />
          <Input
            placeholder="Password"
            containerStyle={commonStyles.containerInput}
            style={commonStyles.input}
            value={password}
            onChangeText={(value) => validateAndSet(value, setPassword)}
            secureTextEntry
            leftIcon={<Icon name="key" size={16} />}
          />
          <Input
            placeholder="confirm password"
            containerStyle={commonStyles.containerInput}
            style={commonStyles.input}
            value={confirmPassword}
            onChangeText={(value) => validateAndSet(value, setConfirmPassword)}
            leftIcon={<Icon name="key" size={16} />}
            secureTextEntry
            onBlur={() => checkPassword(password, confirmPassword)}
          />
          {
            <CustomText style={commonStyles.error}>
              {validationMessage}
            </CustomText>
          }
          <PlanYButton buttonText={"Sign up"} onPress={createAccount} />
          <View>
            <CustomText style={commonStyles.textSign}>
              Already have an account?
              <TouchableOpacity onPress={() => navigation.navigate("Sign In")}>
                <CustomText style={commonStyles.textButton}>
                  {" "}
                  Login here
                </CustomText>
              </TouchableOpacity>
            </CustomText>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

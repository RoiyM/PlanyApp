import React, { useState } from "react";
import {
  SafeAreaView,
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
import CustomText from "../components/CustomText";
import commonStyles from "../styles/commonStyles";

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={commonStyles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={commonStyles.inner}>
          <Logo />
          <Input
            placeholder="Email"
            style={commonStyles.input}
            containerStyle={commonStyles.containerInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
            leftIcon={<Icon name="envelope" size={16} />}
          />
          <Input
            placeholder="Password"
            style={commonStyles.input}
            containerStyle={commonStyles.containerInput}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            leftIcon={<Icon name="key" size={16} />}
          />
          {
            <CustomText style={commonStyles.error}>
              {validationMessage}
            </CustomText>
          }
          <PlanYButton buttonText={"Sign In"} onPress={login} />
          <CustomText style={commonStyles.textSign}>
            Don't have an account yet ?
            <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
              <CustomText style={commonStyles.textButton}>
                {" "}
                Sign up here
              </CustomText>
            </TouchableOpacity>
          </CustomText>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SigninScreen;

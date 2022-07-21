import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Logo from "../components/Logo";

const auth = getAuth();
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
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate("Signin");
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
          secureTextEntry
          leftIcon={<Icon name="key" size={16} />}
          onBlur={() => checkPassword(password, confirmPassword)}
        />
        {<Text style={styles.error}>{validationMessage}</Text>}
        <Button
          title="Sign up"
          buttonStyle={{ marginTop: 10 }}
          onPress={createAccount}
        />
        <View>
          <Text style={{ marginTop: 5, fontSize: 17 }}>
            Already have an account?
            <TouchableOpacity
              onPress={() => navigation.navigate("Signin")}
              style={{ color: "blue", marginLeft: 10 }}
            >
              <Text>Login here </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    bottom: 50,
  },
  containerInput: {
    marginTop: 10,
    width: 300,
  },
  error: {
    marginTop: 10,
    color: "red",
  },
});

export default SignUpScreen;

import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Logo from "../components/Logo";

const auth = getAuth();
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
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate("Sign In");
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
        <TouchableOpacity style={styles.button} onPress={createAccount}>
          <Text style={styles.textButton}> Sign up</Text>
        </TouchableOpacity>
        <View>
          <Text style={{ marginTop: 5, fontSize: 17 }}>
            Already have an account?
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Text style={styles.textButton2}> Login here</Text>
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
    fontSize: 20,
    textAlign: "center",
  },
  textButton2: {
    color: planYpink,
    marginTop: 30,
    textDecorationLine: "underline",
  },
});

export default SignUpScreen;

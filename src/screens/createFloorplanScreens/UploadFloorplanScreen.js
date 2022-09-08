import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Logo from "../../components/Logo";
import PlanYButton from "../../components/PlanYButton";
import * as ImagePicker from "expo-image-picker";
import { doc, addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../../config/firebase";
import { ScrollView } from "react-native-gesture-handler";
import CustomText from "../../components/CustomText";
const planYpink = "#ff005de6";

const UploadFloorplanScreen = ({ route, navigation }) => {
  const [aditionalInfo, setAditionalInfo] = useState("");
  const [projectName, setProjectName] = useState("");
  const [photo, setPhoto] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setPhoto(result.base64);
    }
  };

  const submitForm = async () => {
    const docData = {
      requirements: createForm(),
      floorplan: { photo: photo },
    };

    addDoc(
      collection(
        db,
        "users/" + auth.currentUser.uid + "/floorplanRequirements"
      ),
      docData
    );

    setAditionalInfo("");
    setProjectName("");
    setPhoto(null);

    Alert.alert("Submit", "Submitted successfully", [
      {
        text: "Ok",
        onPress: () => {
          navigation.navigate("Home");
        },
      },
    ]);
  };

  const createForm = () => {
    let form = route.params;

    if (form != null) {
      form.aditionalInfo = aditionalInfo;
      form.projectName = projectName;
    } else {
      form = { aditionalInfo: aditionalInfo, projectName: projectName };
    }

    return form;
  };

  return (
    <ScrollView>
      <CustomText style={styles.titleText}>
        floor <Logo fontSize={25} /> changes
      </CustomText>

      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setAditionalInfo(text)}
        placeholder="Is there anything else you want us to know?"
        value={aditionalInfo}
      />

      <CustomText style={styles.textHeader}>
        You can choose a name for your project here:
      </CustomText>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setProjectName(text)}
        placeholder="New plan"
        value={projectName}
      />

      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.pinkText}>UPLOAD FLOOR PLAN +</Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 10,
          marginLeft: 30,
          marginTop: 4,
          fontStyle: "italic",
        }}
      >
        {" "}
        Max File Size 5MB
      </Text>

      <Text style={{ width: 230, marginLeft: 5, marginTop: 30 }}>
        NEED HELP WITH THE UPLOAD? DONT HAVE A PLAN?
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Contact Us");
        }}
        style={{ marginBottom: 40 }}
      >
        <Text style={{ color: planYpink, marginLeft: 10, marginTop: 5 }}>
          click here
        </Text>
      </TouchableOpacity>

      <PlanYButton
        buttonText={"SUBMIT"}
        onPress={() => {
          submitForm();
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    paddingBottom: 30,
    paddingTop: 10,
  },
  textInput: {
    padding: 5,
    borderWidth: 0.5,
    margin: 20,
    height: 40,
    marginTop: 10,
    marginBottom: 30,
  },
  textHeader: {
    textAlign: "left",
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 5,
  },
  pinkText: {
    color: planYpink,
    fontSize: 16,
  },
  button: {
    borderColor: "black",
    borderRadius: 2,
    borderWidth: 0.8,
    width: 250,
    marginLeft: 30,
    alignItems: "center",
  },
});

export default UploadFloorplanScreen;

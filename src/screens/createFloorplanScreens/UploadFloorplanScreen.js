import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import Logo from "../../components/Logo";
import PlanYButton from "../../components/PlanYButton";
import * as ImagePicker from "expo-image-picker";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db, auth } from "../../../config/firebase";
import commonStyles from "../../styles/commonStyles";
import CustomText from "../../components/CustomText";
import CustomeTextInput from "../../components/CustomTextInput";
const planYpink = "#ff005de6";

const UploadFloorplanScreen = ({ route, navigation }) => {
  const [aditionalInfo, setAditionalInfo] = useState("");
  const [projectName, setProjectName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState("Max File Size 5MB");
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
      setPhoto(result);
      setMessage("image.png");
    }
  };

  const submitForm = async () => {
    if (photo) {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docData = {
        requirements: createForm(),
        floorplan: { photo: photo },
      };

      await updateDoc(docRef, {
        floorplanRequirements: arrayUnion(docData),
      });
      await updateDoc(docRef, {
        floorplans: arrayUnion(photo),
      });
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
    } else {
      Alert.alert("Error", "Please upload a floor plan", [
        {
          text: "Ok",
        },
      ]);
    }
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
    <ScrollView
      contentContainerStyle={{ flex: 1, justifyContent: "space-around" }}
    >
      <CustomText style={styles.titleText}>
        floor <Logo fontSize={25} /> changes
      </CustomText>
      <CustomeTextInput
        style={styles.textInput}
        onChangeText={(text) => setAditionalInfo(text)}
        placeholder="Is there anything else you want us to know?"
        value={aditionalInfo}
      />
      <CustomeTextInput
        style={styles.textInput}
        onChangeText={(text) => setProjectName(text)}
        placeholder="New plan"
        value={projectName}
        titleAbove="You can choose a name for your project here:"
      />
      <View>
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
          {message}
        </Text>
      </View>
      <View>
        <Text style={{ width: 230, marginLeft: 20, marginTop: 30 }}>
          NEED HELP WITH THE UPLOAD? DONT HAVE A PLAN?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Contact Us");
          }}
          style={{ marginBottom: 40 }}
        >
          <Text style={{ color: planYpink, marginLeft: 20, marginTop: 5 }}>
            click here
          </Text>
        </TouchableOpacity>
      </View>

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
  },
  textInput: {
    padding: 5,
    borderWidth: 0.5,
    margin: 20,
  },
  textHeader: {
    textAlign: "left",
    marginLeft: 20,
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
    marginLeft: 20,
    alignItems: "center",
  },
});

export default UploadFloorplanScreen;

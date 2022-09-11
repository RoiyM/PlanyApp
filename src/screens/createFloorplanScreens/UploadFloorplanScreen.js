import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import Logo from "../../components/Logo";
import PlanYButton from "../../components/PlanYButton";
import * as ImagePicker from "expo-image-picker";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../../config/firebase";
import commonStyles from "../../styles/commonStyles";
import CustomText from "../../components/CustomText";
import CustomeTextInput from "../../components/CustomTextInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Spinner from "react-native-loading-spinner-overlay";

const UploadFloorplanScreen = ({ route, navigation }) => {
  const [aditionalInfo, setAditionalInfo] = useState("");
  const [projectName, setProjectName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState("Max File Size 5MB");
  const [loading, setLoading] = useState(false);

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
      setMessage("image.png");
      setPhoto(result.base64);
    }
  };

  const submitForm = async () => {
    if (photo) {
      try {
        const docData = {
          requirements: createForm(),
          floorplan: { photo: photo },
        };
        setLoading(true);
        await addDoc(
          collection(
            db,
            "users/" + auth.currentUser.uid + "/floorplanRequirements"
          ),
          docData
        );
        setLoading(false);

        setMessage("Max File Size 5MB");
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
      } catch (e) {
        setLoading(false);
        Alert.alert(
          "Error",
          "Couldn't save changes- your floorplan image is too big.",
          [
            {
              text: "Ok",
            },
          ]
        );
      }
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
    <KeyboardAwareScrollView
      contentContainerStyle={commonStyles.scrollViewContainer}
    >
      <SafeAreaView style={commonStyles.inner}>
        <Spinner visible={loading} textStyle={commonStyles.spinnerTextStyle} />
        <CustomText style={commonStyles.mainTitle}>
          floor <Logo /> changes
        </CustomText>
        <CustomeTextInput
          onChangeText={(text) => setAditionalInfo(text)}
          placeholder="Is there anything else you want us to know?"
          value={aditionalInfo}
        />
        <CustomeTextInput
          onChangeText={(text) => setProjectName(text)}
          placeholder="New plan"
          value={projectName}
          titleAbove="You can choose a name for your project here:"
        />
        <View>
          <TouchableOpacity
            onPress={pickImage}
            style={commonStyles.uploadButton}
          >
            <Text style={commonStyles.pinkText}>UPLOAD FLOOR PLAN +</Text>
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
          <Text style={commonStyles.needHelpText}>
            NEED HELP WITH THE UPLOAD?{"\n"}DONT HAVE A PLAN?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Contact Us");
            }}
          >
            <Text style={commonStyles.clickHereButton}>click here</Text>
          </TouchableOpacity>
        </View>

        <PlanYButton
          buttonText={"SUBMIT"}
          onPress={() => {
            submitForm();
          }}
        />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default UploadFloorplanScreen;

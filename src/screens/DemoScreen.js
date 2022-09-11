import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import mime from "mime";
import CustomText from "../components/CustomText";
import background from "../../assets/bck.jpg";

const DemoScreen = () => {
  const [photo, setPhoto] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [message, setMessage] = useState(null);

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
      setImageUri(result.uri);
    }
  };

  async function analyze() {
    if (imageUri) {
      const XHR = new XMLHttpRequest();

      // Set up our request
      XHR.open("POST", "https://planydemo.azurewebsites.net/analyze", true);

      // Define what happens on successful data submission
      XHR.addEventListener("load", function loadTest() {
        const response = JSON.parse(this.responseText);
        const res = `data:image/png;base64, ${response["image_data"]}`;
        setMessage(null);
        setImageUri(res);
      });

      // Define what happens in case of error
      XHR.addEventListener("error", (event) => {
        console.log("==============================");
        console.log("Oops! Something went wrong.");
        console.log({ event });
        console.log({ afaf: XHR.responseText });
        console.log({ asdasd: XHR.response });

        alert(XHR.responseText);
      });

      //set key value object to send
      const formData = new FormData();
      formData.append("file", {
        uri: photo.uri,
        type: mime.getType(photo.uri),
        name: photo.fileName ? photo.fileName : "image123",
      });

      // Finally, send our data.
      XHR.send(formData);
      setMessage("Please Wait...");
    } else {
      alert("no picture to analyze!");
    }
  }
  return (
    <ImageBackground
      source={background}
      resizeMode="stretch"
      style={styles.image}
    >
      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <CustomText style={styles.button_text}>Load Image</CustomText>
      </TouchableOpacity>
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{ width: 330, height: 330, alignSelf: "center" }}
        />
      )}
      {message && (
        <CustomText
          style={{ alignSelf: "center", fontSize: 25, color: "white" }}
        >
          {message}
        </CustomText>
      )}
      <TouchableOpacity onPress={analyze} style={styles.button}>
        <CustomText style={styles.button_text}>Analyze</CustomText>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 2,
    borderColor: "#345a83",
    borderWidth: 1,
    padding: 10,
    margin: 30,
    width: 130,
    alignSelf: "center",
  },
  button_text: {
    color: "#345a83",
  },
});

export default DemoScreen;

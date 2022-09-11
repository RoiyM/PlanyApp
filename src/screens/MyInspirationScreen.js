import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import PlanYButton from "../components/PlanYButton";
import SelectImage from "../components/SelectImage";
import { inspirationImages } from "../constans/inspirationImages";
import CustomText from "../components/CustomText";
import commonStyles from "../styles/commonStyles";
import { db, auth, onSnapshotPro } from "../../config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import CustomImage from "../components/CustomImage";
let userSelection = [];

const MyInspirationScreen = () => {
  const [title, setTitle] = useState("");
  const [userInspirationList, setUserInspirationList] = useState([]);
  const [buttonValue, setButtonValue] = useState("");

  const docRef = doc(db, "users", auth.currentUser.uid);

  const getUserInspirationArray = async () => {
    try {
      onSnapshotPro(docRef, (doc) => {
        const arr = doc.data().myInspiration;
        setUserInspirationList(arr);
        if(arr.length !== 0){
          setButtonValue("Edit");
          setTitle("Your choices:");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const listOfInspirationChoices = () => {
    return inspirationImages.map((image) => {
      return (
        <SelectImage
          key={image.imageSource}
          imageSource={image.imageSource}
          imageName={image.imageName}
          handleChecking={HandleChecking}
        />
      );
    });
  };

  const listOfUserInspiration = () => {
    return userInspirationList.map((imageName) => {
      return (
        <CustomImage
          key={imageName}
          imageName={imageName}
          style={commonStyles.image}
        />
      );
    });
  };

  const HandleChecking = (isSelected, imageName, stateFunc) => {
    if (isSelected == false) {
      userSelection.push(imageName);
    } else {
      let deleteIndx = userSelection.indexOf(imageName);
      userSelection.splice(deleteIndx, 1);
    }
    stateFunc(!isSelected);
  };

  useEffect(() => {
    getUserInspirationArray();
    if (userInspirationList.length === 0) {
      setButtonValue("Submit");
      setTitle(
        "You can share with us what you like from the following pictures"
      );
    } else {
      setButtonValue("Edit");
      setTitle("Your choices:");
    }
  }, []);

  const submitChoices = async () => {
    await updateDoc(docRef, {
      myInspiration: userSelection,
    });
  };

  const getListToShow = () => {
    if (buttonValue === "Submit") {
      return listOfInspirationChoices();
    } else {
      return listOfUserInspiration();
    }
  };

  const HandleButtonPress = () => {
    if(buttonValue === "Submit" && userSelection.length == 0){
      Alert.alert("Error", "Please choose Images.", [
        {
          text: "Ok",
        },
      ]);
    } else if(buttonValue === "Submit") {
      submitChoices();
      userSelection = [];
      setButtonValue("Edit");
      setTitle("Your choices:");
    } else {
      setButtonValue("Submit");
      setTitle(
        "You can share with us what you like from the following pictures"
      );
    }
  };

  return (
    <ScrollView>
      <CustomText style={commonStyles.mainTitle}>My inspiration</CustomText>
      <CustomText style={commonStyles.paragraph}> {title} </CustomText>
      {getListToShow()}
      <PlanYButton
        buttonText={buttonValue}
        onPress={() => {
          HandleButtonPress();
        }}
      />
    </ScrollView>
  );
};

export default MyInspirationScreen;

import React, { useState, useEffect} from "react";
import { ScrollView, View, StyleSheet, Alert } from "react-native";
import PlanYButton from "../components/PlanYButton";
import SelectImage from "../components/SelectImage";
import { inspirationImages } from "../constans/inspirationImages";
import CustomText from "../components/CustomText";
import commonStyles from "../styles/commonStyles";
import { db, auth } from "../../config/firebase";
import { doc, getDoc, updateDoc} from "firebase/firestore";
import CustomImage from "../components/CustomImage";
let userSelection = [];

const MyInspirationScreen = () => {
  const [title, setTitle] = useState("");
  const [userInspirationList, setUserInspirationList] = useState([]);
  const [inspirationListToShow, setInspirationListToShow] = useState([]);
  const [buttonValue, setButtonValue] = useState("");

  const docRef = doc(db, "users", auth.currentUser.uid);

  const getUserInspirationArray = async () => {
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserInspirationList(docSnap.data().myInspiration);
        console.log(docSnap.data());
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.log(error);
    } 
  };

  const listOfInspirationChoices = () => {
    return inspirationImages.map((image) => {
      return (
        <SelectImage key={image.imageSource} imageSource={image.imageSource} imageName={image.imageName} handleChecking={HandleChecking} />
      );
    });
  };

  const listOfUserInspiration = () => {
    return userInspirationList.map((imageName) => {
      return (
        <CustomImage key={imageName} imageName={imageName} style={styles.image} />
      );
    });
  };

  const HandleChecking = (isSelected, imageName ,stateFunc) => {
    if(isSelected == false) { 
      userSelection.push(imageName);
    } else {
      let deleteIndx = userSelection.indexOf(imageName);
      userSelection.splice(deleteIndx,1);
    }
    stateFunc(!isSelected);
  }

  useEffect(() => {
    getUserInspirationArray();
    
    if(userInspirationList.length === 0) {
      setButtonValue("Submit");
      setTitle("You can share with us what you like from the following pictures")
      setInspirationListToShow(listOfInspirationChoices());
    } else {
      setButtonValue("Edit");
      setTitle("Your choices:")
      setInspirationListToShow(listOfUserInspiration());
    }
  }, []);

  const submitChoices = async () => {
    await updateDoc(docRef, {
      myInspiration: userSelection,
    });
  };

  const HandleButtonPress = () => {
    if(buttonValue === "Submit") {
      submitChoices();
      getUserInspirationArray();
      userSelection=[];
      setButtonValue("Edit");
      setTitle("Your choices:")
      setInspirationListToShow(listOfUserInspiration());
    } else  {
      setButtonValue("Submit");
      setTitle("You can share with us what you like from the following pictures")
      setInspirationListToShow(listOfInspirationChoices());
    }
  }

  return (
    <View style={commonStyles.container}>
      <ScrollView>
        <CustomText style={styles.title}>My inspiration</CustomText>
        <CustomText style={styles.text}> {title} </CustomText>
        {inspirationListToShow}
        <PlanYButton 
          buttonText={buttonValue}
          onPress={() => {HandleButtonPress();}}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    paddingBottom: 30,
    paddingTop: 10,
  },
  text: {
    fontSize: 17,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default MyInspirationScreen;

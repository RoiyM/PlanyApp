import React, { useState, } from "react";
import { View, Text, StyleSheet,  } from "react-native";
import Logo from "../../components/Logo";
import PlanYButton from "../../components/PlanYButton";
import RadioButtonRN from 'radio-buttons-react-native';
import { apartmentOptions } from "../../constans/apartmentOptions";
import { ScrollView } from "react-native-gesture-handler";
import CustomText from "../../components/CustomText";
const planYpink = "#ff005de6";

const DetailsSecondScreen = ({route, navigation }) => {
  
  const [numOfResidents, setNumOfResidents] = useState('');
  const [isGoingToRenovate, setIsGoingToRenovate] = useState('');
  const [renovationBudget, setRenovationBudget] = useState('');
 

  const extendForm = () =>
  {
    let formToExtend = route.params; 
    formToExtend.numOfResidents = numOfResidents.label;
    formToExtend.isGoingToRenovate = isGoingToRenovate.label;
    formToExtend.renovationBudget = renovationBudget.label;

    return formToExtend;
  }

  return (
    <ScrollView style={styles.container}>
      <CustomText style={styles.titleText}>
        floor <Logo fontSize={25}/> changes
      </CustomText >
      <View>
        <CustomText style={styles.textHeader}>How many people will be living in the property ?</CustomText>
        <RadioButtonRN
            data={apartmentOptions[0]}
            selectedBtn={(e) => setNumOfResidents(e)}
            box = {false}
            activeColor={planYpink}
            circleSize={10}
        />

        <CustomText style={styles.textHeader}>Do you plan to renovate the property after buying it?</CustomText>
        <RadioButtonRN
            data={apartmentOptions[1]}
            selectedBtn={(e) => setIsGoingToRenovate(e)}
            box = {false}
            activeColor={planYpink}
            circleSize={10}
        />

        <CustomText style={styles.textHeader}>What is your renovatin budget?</CustomText>
        <RadioButtonRN
            data={apartmentOptions[2]}
            selectedBtn={(e) => setRenovationBudget(e)}
            box = {false}
            activeColor={planYpink}
            circleSize={10}
        />
        
      </View>
      <PlanYButton
        buttonText={"NEXT"}
        onPress={() => {
          form = extendForm();
          navigation.navigate("Upload floorplan screen", form)}}
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
  textHeader:{
    textAlign:"left",
    marginTop: 15,
    marginBottom: 15,
    marginLeft:5
  },
  container: {
    backgroundColor: "#fff",
  },
});

export default DetailsSecondScreen;

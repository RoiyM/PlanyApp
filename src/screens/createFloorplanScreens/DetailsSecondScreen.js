import React, { useState, } from "react";
import { View, Text, StyleSheet,  } from "react-native";
import Logo from "../../components/Logo";
import PlanYButton from "../../components/PlanYButton";
import RadioButtonRN from 'radio-buttons-react-native';
import { apartmentOptions } from "../../constans/apartmentOptions";
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
    <View style={{backgroundColor:"white"}}>
      <Text style={styles.titleText}>
        floor <Logo fontSize={25}/> changes
      </Text>
      <View>
        <Text style={styles.textHeader}>How many people will be living in the property ?</Text>
        <RadioButtonRN
            data={apartmentOptions[0]}
            selectedBtn={(e) => setNumOfResidents(e)}
            box = {false}
            activeColor={planYpink}
            circleSize={10}
        />

        <Text style={styles.textHeader}>Do you plan to renovate the property after buying it?</Text>
        <RadioButtonRN
            data={apartmentOptions[1]}
            selectedBtn={(e) => setIsGoingToRenovate(e)}
            box = {false}
            activeColor={planYpink}
            circleSize={10}
        />

        <Text style={styles.textHeader}>What is your renovatin budget?</Text>
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
    </View>
    
  );
};


const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    fontFamily: "ArielBD",
    paddingBottom: 30,
    paddingTop: 10,
    textAlign: "center",
  },
  textHeader:{
    fontFamily: "ArielBD",
    marginTop: 15,
    marginBottom: 15,
    fontWeight: "600",
    marginLeft:5
  },
  radioButton:{

  }
});

export default DetailsSecondScreen;

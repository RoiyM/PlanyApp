import React, { useState, } from "react";
import {TextInput, View, Text, StyleSheet,  } from "react-native";
import Logo from "../../components/Logo";
import CheckBox from "../../components/CheckBox";
import PlanYButton from "../../components/PlanYButton";

var mainChangesArray=[];

const DetailsFirstScreen = ({ navigation }) => {
  const [address, setAddress] = useState("");
  const [otherChanges, setOtherChanges] = useState("");
  
  const [addBedroom, setAddBedroom] = useState(false);
  const [removeBedroom, setRemoveBedroom] = useState(false);
  const [optimizeSpace, setOptimizeSpace] = useState(false);
  const [splitToTwo, setSplitToTwo] = useState(false);
  const [addBathroom, setAddBathroom] = useState(false);
  const [addHalfRoom, setAddHalfRoom] = useState(false);
  const [planyOptimal, setPlanyOptimal] = useState(false);

const HandleChecking = (changedValue, changedAsString ,stateFunc) => {

  if(changedValue == false)
  { 
    mainChangesArray.push(changedAsString);
  }
  else
  {
    var deleteIndx = mainChangesArray.indexOf(changedAsString);
    mainChangesArray.splice(deleteIndx,1);
  }
  
  stateFunc(!changedValue);
}

const CreateJSON = () => {

  return (
    {
      mainChanges: mainChangesArray,
      address: address,
      otherChanges: otherChanges
    }
  );
}
 
  return (
    <View style={{backgroundColor:"white"}}>
      <Text style={styles.titleText}>
        floor <Logo fontSize={25}/> changes
      </Text>
      <View>
        <Text style={styles.textHeader}>What will be the main change you plan to do?</Text>
        <CheckBox 
          title="add a bedroom"
          checked={addBedroom}
          onPress={() => HandleChecking(addBedroom, Object.keys({addBedroom})[0],setAddBedroom)}
        />
        <CheckBox
          title="remove a bedroom"
          checked={removeBedroom}
          onPress= {() => HandleChecking(removeBedroom, Object.keys({removeBedroom})[0], setRemoveBedroom)}
        />
        <CheckBox
          title="optimize the shared space (no rooms changes)"
          checked={optimizeSpace}
          onPress={() => HandleChecking(optimizeSpace, Object.keys({optimizeSpace})[0], setOptimizeSpace)}
        />
        <CheckBox
          title="split the apartment to 2"
          checked={splitToTwo}
          onPress={() => HandleChecking(splitToTwo, Object.keys({splitToTwo})[0], setSplitToTwo)}
        />
        <CheckBox
          title="add a bathroom"
          checked={addBathroom}
          onPress={() => HandleChecking(addBathroom, Object.keys({addBathroom})[0], setAddBathroom)}
        />
        <CheckBox
          title="add 1/2 a room"
          checked={addHalfRoom}
          onPress={() => HandleChecking(addHalfRoom, Object.keys({addHalfRoom})[0], setAddHalfRoom)}
        />
        <CheckBox
          title="plany optimal floor plan for free"
          checked={planyOptimal}
          onPress={() => HandleChecking(planyOptimal, Object.keys({planyOptimal})[0], setPlanyOptimal)}
        />

      </View>
      <View>
        <Text style={styles.textHeader}>Other changes:</Text>
        <TextInput 
          style={styles.textInput}
          containerStyle={{}}
          onChangeText={(text) => setOtherChanges(text)}
        />
        <Text style={styles.textHeader}>Address:</Text>
        <TextInput 
          style={styles.textInput}
          containerStyle={{}}
          onChangeText={(text) => setAddress(text)}
        />
      </View>
      <PlanYButton
        buttonText={"NEXT"}
        onPress={() => {
          form = CreateJSON();
          navigation.navigate("Details second screen",form)}}
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
  textInput: {
    padding: 5,
    borderWidth: 0.5,
    marginLeft: 5,
    marginRight: 5,
  },
  textHeader:{
    fontFamily: "ArielBD",
    marginTop: 15,
    marginBottom: 15,
    fontWeight: "600",
    marginLeft:5,
  },
});

export default DetailsFirstScreen;

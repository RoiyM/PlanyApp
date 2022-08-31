import React, { useState, } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Logo from "../../components/Logo";
import PlanYButton from "../../components/PlanYButton";
const planYpink = "#ff005de6";

const UploadFloorplanScreen = ({route, navigation}) => {
  const [aditionalInfo, setAditionalInfo] = useState("");
  const [projectName, setProjectName] = useState("");


  const createForm = () => {

    let form = route.params;

    if (form!=null){
      form.aditionalInfo = aditionalInfo;
      form.projectName = projectName;
      
    }
    else {
      form = {aditionalInfo:aditionalInfo, projectName: projectName};
    }

    return form;
  }


  return (
    <View style={{backgroundColor:"white"}}>
      <Text style={styles.titleText}>
        floor <Logo fontSize={25}/> changes
      </Text>
      
      <TextInput 
        style={styles.textInput}
        onChangeText={(text) => setAditionalInfo(text)}
        placeholder="Is there anything else you want us to know?"
      />

      <Text style={styles.textHeader}>You can choose a name for your project here:</Text>
      <TextInput 
        style={styles.textInput}
        onChangeText={(text) => setProjectName(text)}
        placeholder="New plan"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.pinkText}>UPLOAD FLOOR PLAN +</Text>
      </TouchableOpacity>
      <Text style={{
        fontSize: 10,
        marginLeft: 30, 
        marginTop: 4,
        fontStyle:"italic"}}> Max File Size 5MB</Text>


      <Text style={{width:230, marginLeft: 5, marginTop:30 }}>NEED HELP WITH THE UPLOAD? DONT HAVE A PLAN?</Text>
      <TouchableOpacity style={{marginBottom: 40}}>
         <Text style={{color:planYpink, marginLeft: 10, marginTop: 5}}>click here</Text>
      </TouchableOpacity>

      <PlanYButton
        buttonText={"SUBMIT"}
        onPress = {() => {
          let tryy= createForm();
          console.log(tryy)
        }}
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
    margin: 20,
    height: 40,
    marginTop: 10,
    marginBottom:30,
  },
  textHeader:{
    fontFamily: "ArielBD",
    marginTop: 15,
    marginBottom: 10,
    fontWeight: "600",
    marginLeft:5
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

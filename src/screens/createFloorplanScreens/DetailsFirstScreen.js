import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Logo from "../../components/Logo";
import CheckBox from "../../components/CheckBox";
import PlanYButton from "../../components/PlanYButton";
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomTextInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import commonStyles from "../../styles/commonStyles";
var mainChangesArray = [];

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

  const HandleChecking = (changedValue, changedAsString, stateFunc) => {
    if (changedValue == false) {
      mainChangesArray.push(changedAsString);
    } else {
      var deleteIndx = mainChangesArray.indexOf(changedAsString);
      mainChangesArray.splice(deleteIndx, 1);
    }
    stateFunc(!changedValue);
  };

  const CreateJSON = () => {
    return {
      mainChanges: mainChangesArray,
      address: address,
      otherChanges: otherChanges,
    };
  };

  const HandleNextPress = () => {
    const form = CreateJSON();
    setAddBedroom(false);
    setRemoveBedroom(false);
    setOptimizeSpace(false);
    setSplitToTwo(false);
    setAddBathroom(false);
    setAddHalfRoom(false);
    setPlanyOptimal(false);
    setAddress("");
    setOtherChanges("");
    navigation.navigate("Details second screen", form);
  };

  return (
    <KeyboardAwareScrollView>
      <View style={commonStyles.inner}>
        <CustomText style={styles.titleText}>
          floor <Logo fontSize={25} /> changes
        </CustomText>
        <View>
          <CustomText style={styles.textHeader}>
            What will be the main change you plan to do?
          </CustomText>
          <CheckBox
            title="add a bedroom"
            checked={addBedroom}
            onPress={() =>
              HandleChecking(
                addBedroom,
                Object.keys({ addBedroom })[0],
                setAddBedroom
              )
            }
          />
          <CheckBox
            title="remove a bedroom"
            checked={removeBedroom}
            onPress={() =>
              HandleChecking(
                removeBedroom,
                Object.keys({ removeBedroom })[0],
                setRemoveBedroom
              )
            }
          />
          <CheckBox
            title="optimize the shared space (no rooms changes)"
            checked={optimizeSpace}
            onPress={() =>
              HandleChecking(
                optimizeSpace,
                Object.keys({ optimizeSpace })[0],
                setOptimizeSpace
              )
            }
          />
          <CheckBox
            title="split the apartment to 2"
            checked={splitToTwo}
            onPress={() =>
              HandleChecking(
                splitToTwo,
                Object.keys({ splitToTwo })[0],
                setSplitToTwo
              )
            }
          />
          <CheckBox
            title="add a bathroom"
            checked={addBathroom}
            onPress={() =>
              HandleChecking(
                addBathroom,
                Object.keys({ addBathroom })[0],
                setAddBathroom
              )
            }
          />
          <CheckBox
            title="add 1/2 a room"
            checked={addHalfRoom}
            onPress={() =>
              HandleChecking(
                addHalfRoom,
                Object.keys({ addHalfRoom })[0],
                setAddHalfRoom
              )
            }
          />
          <CheckBox
            title="plany optimal floor plan for free"
            checked={planyOptimal}
            onPress={() =>
              HandleChecking(
                planyOptimal,
                Object.keys({ planyOptimal })[0],
                setPlanyOptimal
              )
            }
          />
        </View>
        <View>
          <CustomTextInput
            titleAbove="Other changes:"
            value={otherChanges}
            style={styles.textInput}
            onChangeText={(text) => setOtherChanges(text)}
          />
          <CustomTextInput
            titleAbove="Address:"
            value={address}
            style={styles.textInput}
            onChangeText={(text) => setAddress(text)}
          />
        </View>
        <PlanYButton
          buttonText={"NEXT"}
          onPress={() => {
            HandleNextPress();
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
  },
  textInput: {
    textAlign: "left",
    borderWidth: 0.5,
  },
  textHeader: {
    textAlign: "left",
    marginTop: 15,
    marginBottom: 15,
    fontWeight: "600",
    marginLeft: 5,
  },
});

export default DetailsFirstScreen;

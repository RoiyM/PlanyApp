import React, { useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import Logo from "../../components/Logo";
import PlanYButton from "../../components/PlanYButton";
import RadioButtonRN from "radio-buttons-react-native";
import { apartmentOptions } from "../../constans/apartmentOptions";
import CustomText from "../../components/CustomText";
import commonStyles from "../../styles/commonStyles";
import { SafeAreaView } from "react-native";
const planYpink = "#ff005de6";

const DetailsSecondScreen = ({ route, navigation }) => {
  const [numOfResidents, setNumOfResidents] = useState({ label: "" });
  const [isGoingToRenovate, setIsGoingToRenovate] = useState({ label: "" });
  const [renovationBudget, setRenovationBudget] = useState({ label: "" });

  const extendForm = () => {
    let formToExtend = route.params;
    formToExtend.numOfResidents = numOfResidents.label;
    formToExtend.isGoingToRenovate = isGoingToRenovate.label;
    formToExtend.renovationBudget = renovationBudget.label;

    return formToExtend;
  };

  return (
    <ScrollView contentContainerStyle={commonStyles.scrollViewContainer}>
      <SafeAreaView style={commonStyles.inner}>
        <CustomText style={commonStyles.mainTitle}>
          floor <Logo /> changes
        </CustomText>
        <View>
          <CustomText style={commonStyles.textHeader}>
            How many people will be living in the property ?
          </CustomText>
          <RadioButtonRN
            data={apartmentOptions[0]}
            selectedBtn={(e) => setNumOfResidents(e)}
            box={false}
            activeColor={planYpink}
            circleSize={10}
          />
        </View>
        <View>
          <CustomText style={commonStyles.textHeader}>
            Do you plan to renovate the property after buying it?
          </CustomText>
          <RadioButtonRN
            data={apartmentOptions[1]}
            selectedBtn={(e) => setIsGoingToRenovate(e)}
            box={false}
            activeColor={planYpink}
            circleSize={10}
          />
        </View>
        <View>
          <CustomText style={commonStyles.textHeader}>
            What is your renovatin budget?
          </CustomText>
          <RadioButtonRN
            data={apartmentOptions[2]}
            selectedBtn={(e) => setRenovationBudget(e)}
            box={false}
            activeColor={planYpink}
            circleSize={10}
          />
        </View>
        <PlanYButton
          buttonText={"NEXT"}
          onPress={() => {
            if (
              isGoingToRenovate.label == "no" &&
              renovationBudget.label != ""
            ) {
              Alert.alert(
                "Eror",
                "You Chose your renovation budget but marked that you not going to renovate.",
                [
                  {
                    text: "Ok",
                  },
                ]
              );
            } else {
              form = extendForm();
              navigation.navigate("Upload floorplan screen", form);
            }
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default DetailsSecondScreen;

import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageDetail from "../components/ImagaDetail";
import { employees } from "../constans/employees";
import Logo from "../components/Logo";
import CustomText from "../components/CustomText";

const AboutScreen = () => {
  const list = () => {
    return employees.map((employee) => {
      return (
        <ImageDetail
          key={employee.fullName}
          imageSource={employee.imageSource}
          fullName={employee.fullName}
          position={employee.position}
          experience={employee.experience}
        />
      );
    });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <CustomText style={styles.titleText}>
          About <Logo />
        </CustomText>
        <CustomText style={styles.text}>
          PlanY provides architecture products and services. The founding team
          include experienced architect and 2 entrepreneurs with a vision to
          provide a property potential based on existing floor plans in a click
          of a button. The potential will make your real-estate decision easier
          and clear because we understand it is one of the most important
          decisions you will face during your life. PlanY is here to help you
          make better decisions when you sell, buy or start a remodeling
          project.
        </CustomText>
        <CustomText style={styles.titleText}>Meet The Team</CustomText>
        {list()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
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

export default AboutScreen;

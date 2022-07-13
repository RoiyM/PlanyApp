import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ImageDetail from "../components/ImagaDetail";
import { employees } from "../constans/employees";

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
      <ScrollView style={styles.centerContentStyle}>
        <Text style={styles.titleText}>About planY</Text>
        <Text>
          PlanY provides architecture products and services. The founding team
          include experienced architect and 2 entrepreneurs with a vision to
          provide a property potential based on existing floor plans in a click
          of a button. The potential will make your real-estate decision easier
          and clear because we understand it is one of the most important
          decisions you will face during your life. PlanY is here to help you
          make better decisions when you sell, buy or start a remodeling
          project.
        </Text>
        <Text style={styles.titleText}>Meet The Team</Text>
        {list()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
  centerContentStyle: {
    centerContent: true,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
  },
});

export default AboutScreen;

import React from "react";
import { ScrollView } from "react-native";
import ImageDetail from "../components/ImagaDetail";
import { employees } from "../constans/employees";
import Logo from "../components/Logo";
import CustomText from "../components/CustomText";
import commonStyles from "../styles/commonStyles";

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
    <ScrollView>
      <CustomText style={commonStyles.mainTitle}>
        About <Logo />
      </CustomText>
      <CustomText style={commonStyles.paragraph}>
        PlanY provides architecture products and services. The founding team
        include experienced architect and 2 entrepreneurs with a vision to
        provide a property potential based on existing floor plans in a click of
        a button. The potential will make your real-estate decision easier and
        clear because we understand it is one of the most important decisions
        you will face during your life. PlanY is here to help you make better
        decisions when you sell, buy or start a remodeling project.
      </CustomText>
      <CustomText style={commonStyles.subTitle}>Meet The Team</CustomText>
      {list()}
    </ScrollView>
  );
};

export default AboutScreen;

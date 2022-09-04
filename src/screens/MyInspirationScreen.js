import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import PlanYButton from "../components/PlanYButton";
import SelectImage from "../components/SelectImage";
import { inspirationImages } from "../constans/inspirationImages";
import CustomText from "../components/CustomText";

const MyInspirationScreen = () => {
  const list = () => {
    return inspirationImages.map((image) => {
      return (
        <SelectImage key={image.imageSource} imageSource={image.imageSource} />
      );
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <CustomText style={styles.title}>My inspiration</CustomText>
        <CustomText style={styles.text}>
          You can share with us what you like from the following pictures
        </CustomText>
        {list()}
        <PlanYButton buttonText={"Submit"} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

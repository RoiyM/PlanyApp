import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
const imageHeight = Math.round((Dimensions.get("window").width * 9) / 16);
const imageWidth = Dimensions.get("window").width;
import commonStyles from "../styles/commonStyles";

const getImage = (imageName) => {
  switch (imageName) {
    case "space-A": {
      return (
        <Image
          source={require("../../assets/space-A.jpg")}
          style={styles.image}
        />
      );
    }
    case "space-B": {
      return (
        <Image
          source={require("../../assets/space-B.jpg")}
          style={styles.image}
        />
      );
    }
    case "wall-A": {
      return (
        <Image
          source={require("../../assets/wall-A.jpg")}
          style={styles.image}
        />
      );
    }
    case "wall-B": {
      return (
        <Image
          source={require("../../assets/wall-B.jpg")}
          style={styles.image}
        />
      );
    }
    case "living-room-A": {
      return (
        <Image
          source={require("../../assets/living-room-A.jpg")}
          style={styles.image}
        />
      );
    }
    case "living-room-B": {
      return (
        <Image
          source={require("../../assets/living-room-B.jpg")}
          style={styles.image}
        />
      );
    }
    case "home-bookshelf-A": {
      return (
        <Image
          source={require("../../assets/home-bookshelf-A.jpg")}
          style={styles.image}
        />
      );
    }
    case "home-bookshelf-B": {
      return (
        <Image
          source={require("../../assets/home-bookshelf-B.jpg")}
          style={styles.image}
        />
      );
    }
    case "couch-A": {
      return (
        <Image
          source={require("../../assets/couch-A.jpg")}
          style={styles.image}
        />
      );
    }
    case "Couch-B": {
      return (
        <Image
          source={require("../../assets/Couch-B.jpg")}
          style={styles.image}
        />
      );
    }
    case "chairs-A": {
      return (
        <Image
          source={require("../../assets/chairs-A.jpg")}
          style={styles.image}
        />
      );
    }
    case "chairs-B": {
      return (
        <Image
          source={require("../../assets/chairs-B.jpg")}
          style={styles.image}
        />
      );
    }
    case "kitchen-A": {
      return (
        <Image
          source={require("../../assets/kitchen-A.jpg")}
          style={styles.image}
        />
      );
    }
    case "kitchen-B": {
      return (
        <Image
          source={require("../../assets/kitchen-B.jpg")}
          style={styles.image}
        />
      );
    }
    case "bedroom-A": {
      return (
        <Image
          source={require("../../assets/bedroom-A.jpg")}
          style={styles.image}
        />
      );
    }
    case "bedroom-B": {
      return (
        <Image
          source={require("../../assets/bedroom-B.jpg")}
          style={styles.image}
        />
      );
    }
    case "bedroom-C": {
      return (
        <Image
          source={require("../../assets/bedroom-C.jpg")}
          style={styles.image}
        />
      );
    }
    case "bathroom-A": {
      return (
        <Image
          source={require("../../assets/bathroom-A.jpg")}
          style={styles.image}
        />
      );
    }
    case "bathroom-B": {
      return (
        <Image
          source={require("../../assets/bathroom-B.jpg")}
          style={styles.image}
        />
      );
    }
    case "bathroom-C": {
      return (
        <Image
          source={require("../../assets/bathroom-C.jpg")}
          style={styles.image}
        />
      );
    }
  }
};

const CustomImage = ({ imageName }) => {
  return <View style={commonStyles.imageContainer}>{getImage(imageName)}</View>;
};

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    height: imageHeight,
    width: imageWidth,
    marginBottom: 8,
  },
  checkbox: {
    alignSelf: "center",
  },
});

export default CustomImage;

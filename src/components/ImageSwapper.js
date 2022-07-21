import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import img1 from "../../assets/home_slide_show_img1.jpg";
import img2 from "../../assets/home_slide_show_img2.jpg";
import img3 from "../../assets/home_slide_show_img3.jpg";

const ImageSwapper = () => {
  const images = [img1, img2, img3];
  const [currentImage, setCurrentImage] = useState(images[0]);
  var x = 0;

  function getIndexOfImage() {
    x++;
    if (x >= images.length) {
      x = 0;
    }
    return x;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[getIndexOfImage()]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View>
      <Image source={currentImage} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
    alignSelf: "center",
    margin: 50,
  },
});

export default ImageSwapper;

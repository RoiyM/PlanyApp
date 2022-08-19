import React, { useState, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import img1 from "../../assets/home_slide_show_img1.jpg";
import img2 from "../../assets/home_slide_show_img2.jpg";
import img3 from "../../assets/home_slide_show_img3.jpg";

const ImageSwapper = () => {
  const IMAGES = [img1, img2, img3];
  const [currentImage, setCurrentImage] = useState(IMAGES[0]);
  var index = 0;

  function getIndexOfImage() {
    index++;
    if (index >= IMAGES.length) {
      index = 0;
    }
    return index;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(IMAGES[getIndexOfImage()]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Image source={currentImage} style={styles.image} />;
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

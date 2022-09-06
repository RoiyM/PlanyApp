import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { doc } from "firebase/firestore";
import { db, auth, onSnapshotPro } from "../../config/firebase";
import Logo from "../components/Logo";
import CustomText from "../components/CustomText";
import backgroundImage from "../../assets/myFloorplans_background.jpg";

const MyFloorPlansScreen = () => {
  const docRef = doc(db, "users", auth.currentUser.uid);

  const [floorplans, setFloorplans] = useState([]);
  const getMyFloorPlans = async () => {
    try {
      onSnapshotPro(docRef, (doc) => {
        setFloorplans(doc.data().floorplanRequirements);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMyFloorPlans();
  }, []);

  const list = () => {
    if (floorplans) {
      return floorplans.map((obj, index) => {
        const floorplan = obj.floorplan;
        const img = { uri: `data:image/png;base64, ${floorplan.photo.base64}` };
        //const requirements = obj.requirements;
        return (
          <Image
            key={index}
            source={img}
            style={{ width: 320, height: 320, alignSelf: "center" }}
          />
        );
      });
    } else {
      return (
        <View style={styles.imageContainer}>
          <CustomText>No floorplans yet</CustomText>
        </View>
      );
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <CustomText style={styles.title}>
        My floor <Logo />s
      </CustomText>
      <ScrollView>{list()}</ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  title: {
    fontSize: 30,
    paddingBottom: 30,
    paddingTop: 10,
  },
});

export default MyFloorPlansScreen;

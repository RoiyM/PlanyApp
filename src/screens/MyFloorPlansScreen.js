import React, { useState, useEffect } from "react";
import { View, ImageBackground, Image, ScrollView } from "react-native";
import { query, collection, getDocs } from "firebase/firestore";
import { db, auth, onSnapshotPro } from "../../config/firebase";
import Logo from "../components/Logo";
import CustomText from "../components/CustomText";
import backgroundImage from "../../assets/myFloorplans_background.jpg";
import commonStyle from "../styles/commonStyles";
const MyFloorPlansScreen = () => {
  const [floorplans, setFloorplans] = useState([]);

  const getMyFloorPlans = async () => {
    try {
      onSnapshotPro(
        query(
          collection(
            db,
            "users/" + auth.currentUser.uid + "/floorplanRequirements"
          )
        ),
        () => {
          getDocs(
            collection(
              db,
              "users/" + auth.currentUser.uid + "/floorplanRequirements"
            )
          ).then((fllp) => {
            let arr = [];
            fllp.forEach((data) => {
              arr.push(data.data());
            });
            setFloorplans(arr);
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyFloorPlans();
  }, []);

  const list = () => {
    return floorplans.length != 0 ? (
      floorplans.map((obj, index) => {
        const floorplan = obj.floorplan;
        const img = { uri: `data:image/png;base64, ${floorplan.photo}` };
        return <Image key={index} source={img} style={commonStyle.image} />;
      })
    ) : (
      <View>
        <CustomText style={commonStyle.text}>No floorplans yet</CustomText>
      </View>
    );
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={commonStyle.scrollViewContainer}
    >
      <CustomText style={commonStyle.mainTitle}>
        My floor <Logo />s
      </CustomText>
      <ScrollView>{list()}</ScrollView>
    </ImageBackground>
  );
};

export default MyFloorPlansScreen;

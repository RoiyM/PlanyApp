import React, { useState, useEffect } from "react";
import { ScrollView, Image, View } from "react-native";
import { db, auth, onSnapshotPro } from "../../config/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import Message from "../components/Message";
import noMessages from "../../assets/noMessages.png";
import CustomText from "../components/CustomText";
import commonStyles from "../styles/commonStyles";

const MessagesScreen = () => {
  const [messages, setMessages] = useState([]);

  const getUserMessages = async () => {
    try {
      onSnapshotPro(
        query(collection(db, "users/" + auth.currentUser.uid + "/messages")),
        () => {
          getDocs(
            collection(db, "users/" + auth.currentUser.uid + "/messages")
          ).then((mssg) => {
            let arr = [];
            mssg.forEach((data) => {
              arr.push(data.data());
            });
            setMessages(arr);
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserMessages();
  }, []);

  const getMessages = () => {
    return messages.length != 0 ? (
      messages.map((message, index) => {
        return (
          <Message
            key={index}
            subject={message.subject}
            message={message.message}
          />
        );
      })
    ) : (
      <View style={commonStyles.imageContainer}>
        <Image source={noMessages} style={commonStyles.image} />
      </View>
    );
  };

  return (
    <View>
      <CustomText style={commonStyles.mainTitle}>My messages</CustomText>
      <ScrollView>{getMessages()}</ScrollView>
    </View>
  );
};

export default MessagesScreen;

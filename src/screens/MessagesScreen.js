import React, { useState, useEffect } from "react";
import { ScrollView, Image, StyleSheet, View } from "react-native";
import { db, auth, onSnapshotPro } from "../../config/firebase";
import { doc } from "firebase/firestore";
import Message from "../components/Message";
import noMessages from "../../assets/noMessages.png";
import CustomText from "../components/CustomText";
import commonStyles from "../styles/commonStyles";

const MessagesScreen = () => {
  const [messages, setMessages] = useState([]);
  const docRef = doc(db, "users", auth.currentUser.uid);

  const getUserMessages = async () => {
    try {
      onSnapshotPro(docRef, (doc) => {
        setMessages(doc.data().messages);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserMessages();
  }, []);

  const getMessages = () => {
    return messages ? (
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
      <View style={styles.imageContainer}>
        <Image source={noMessages} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={commonStyles.container}>
      <CustomText style={styles.title}>My messages</CustomText>
      <ScrollView>{getMessages()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    paddingBottom: 30,
    paddingTop: 10,
  },
});

export default MessagesScreen;

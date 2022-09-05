import React, { useState, useEffect } from "react";
import { ScrollView, Image, StyleSheet, View } from "react-native";
import { db, auth } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import Message from "../components/Message";
import noMessages from "../../assets/noMessages.png";
import CustomText from "../components/CustomText";

const MessagesScreen = () => {
  const [messages, setMessages] = useState([]);
  const docRef = doc(db, "users", auth.currentUser.uid);

  const getUserMessages = async () => {
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setMessages(docSnap.data().messages);
        console.log(docSnap.data());
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserMessages();
  }, [messages]);

  const getMessages = () => {
    if (messages) {
      return messages.map((message, index) => {
        return (
          <Message
            key={index}
            subject={message.subject}
            message={message.message}
          />
        );
      });
    } else {
      return (
        <View style={styles.imageContainer}>
          <Image source={noMessages} style={styles.image} />
        </View>
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <CustomText style={styles.title}>My messages</CustomText>
      {getMessages()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
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

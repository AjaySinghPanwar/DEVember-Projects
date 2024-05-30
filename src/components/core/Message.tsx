import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MessageProps } from "../utils/types";

const Message = ({ message }: MessageProps) => {
  return (
    <View
      style={[
        styles.message,
        {
          marginLeft: message.role === "user" ? "auto" : 0,
          backgroundColor: message.role === "user" ? "#2A87FF" : "#DCE7FF",
        },
      ]}
    >
      <Text
        style={[
          styles.messageText,
          {
            color: message.role === "user" ? "white" : "black",
          },
        ]}
      >
        {message.content}
      </Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  message: {
    backgroundColor: "gainsboro",
    padding: 10,
    borderRadius: 10,
    width: "90%",
  },

  messageText: {},
});

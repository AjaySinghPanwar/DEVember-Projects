import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
  Keyboard,
} from "react-native";
import Message from "@/components/core/Message";
import { MessageType } from "@/components/utils/types";

const DayDetailScreen = () => {
  const [messages, setMessages] = useState<Array<MessageType>>([
    {
      role: "system",
      content: "You are a helpful assistant",
    },
    {
      role: "user",
      content: "Hello",
    },
    {
      role: "assistant",
      content: "Hello there, How can I help",
    },
  ]);
  const [prompt, setPrompt] = useState("");
  const [keyboardStatus, setKeyboardStatus] = useState("");

  const onSend = () => {
    setMessages((existingMessage) => [
      ...existingMessage,
      { role: "user", content: prompt },
    ]);

    setPrompt("");
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardWillShow", () => {
      setKeyboardStatus("visible");
    });
    const hideSubscription = Keyboard.addListener("keyboardWillHide", () => {
      setKeyboardStatus("hidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{ flex: 1, backgroundColor: "#FFF" }}
    >
      <Stack.Screen options={{ title: "Day 20 : Chat GPT Wrapper" }} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <FlatList
          contentContainerStyle={{ gap: 10, padding: 10 }}
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
        />
        <View
          style={[
            styles.footer,
            { paddingBottom: keyboardStatus === "visible" ? 110 : 0 },
          ]}
        >
          <TextInput
            value={prompt}
            onChangeText={setPrompt}
            placeholder="How can I help you?"
            style={styles.input}
          />
          <Button title="Send" onPress={onSend} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default DayDetailScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    borderRadius: 50,
    flex: 1,
  },

  footer: {
    marginTop: "auto",
    flexDirection: "row",
    padding: 10,
  },
});

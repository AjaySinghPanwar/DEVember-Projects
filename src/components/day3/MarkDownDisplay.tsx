import { StyleSheet, ScrollView } from "react-native";
import React, { PropsWithChildren } from "react";
import Markdown from "react-native-markdown-display";

const MarkDownDisplay = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView style={styles.page} contentInsetAdjustmentBehavior="automatic">
      <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
};

export default MarkDownDisplay;

const markdownStyles = StyleSheet.create({
  heading1: {
    color: "#212020",
    fontFamily: "InterBlack",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 40,
  },

  heading2: {
    fontFamily: "InterBold",
    color: "#404040",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 30,
  },

  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FFFF",
    padding: 10,
    borderRadius: 10,
  },
});

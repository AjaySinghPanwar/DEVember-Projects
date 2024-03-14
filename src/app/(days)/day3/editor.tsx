import React, { useState } from "react";
import MarkDownDisplay from "@/components/day3/MarkDownDisplay";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const template = `# Markdown Editor

Hello **world**!
`;

const EditorScreen = () => {
  const [content, setContent] = useState(template);
  const [tab, setTab] = useState("edit");

  return (
    <View style={styles.page}>
      <View>
        <View style={styles.tabsContainer}>
          <Pressable
            style={[
              styles.tab,
              { borderColor: tab === "edit" ? "salmon" : "gray" },
            ]}
            onPress={() => {
              setTab("edit");
            }}
          >
            <Text style={styles.tabText}>Edit</Text>
          </Pressable>

          <Pressable
            style={[
              styles.tab,
              { borderColor: tab === "preview" ? "salmon" : "gray" },
            ]}
            onPress={() => {
              setTab("preview");
            }}
          >
            <Text style={styles.tabText}>Preview</Text>
          </Pressable>
        </View>
      </View>
      {tab === "edit" ? (
        <TextInput
          value={content}
          onChangeText={setContent}
          multiline
          numberOfLines={100}
          style={styles.input}
        />
      ) : (
        <MarkDownDisplay>{content}</MarkDownDisplay>
      )}
    </View>
  );
};

export default EditorScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "whitesmoke",
    padding: 10,
  },

  input: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
    paddingTop: 20,
    borderRadius: 10,
    fontSize: 14,
  },

  tabsContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },

  tab: {
    flex: 1,
    padding: 10,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
  },

  tabText: {
    fontFamily: "InterBold",
  },
});

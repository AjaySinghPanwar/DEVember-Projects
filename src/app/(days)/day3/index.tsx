import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkDownDisplay from "@/components/day3/MarkDownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Markdown
Integrate markdown content in **React Native**

## Features

- **Lorem Ipsum**: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- **Dolor Sit Amet**: Sed pulvinar, quam eget placerat placerat.
- **Consectetur Adipiscing**: Nulla lacus interdum massa, eu vehicula nisi nulla nec est.
- **Vestibulum Ante Ipsum**: Donec sollicitudin sem eu nulla rutrum, ac lobortis elit pharetra.
`;

const DayDetailScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 3 : Markdown" }} />

      <MarkDownDisplay>{description}</MarkDownDisplay>

      <Link href={"/day3/editor"} asChild>
        <Button title="Go to editor" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailScreen;

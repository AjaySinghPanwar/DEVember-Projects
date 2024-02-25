import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import DayListItem from "./src/components/DayListItem";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

const days = [...Array(24)].map((_value, index) => index + 1);

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item }) => <DayListItem day={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    gap: 10,
    padding: 10,
  },

  column: {
    gap: 10,
  },

  box: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: "#F9EDE3",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9B4521",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#9B4521",
    fontSize: 70,
  },
});

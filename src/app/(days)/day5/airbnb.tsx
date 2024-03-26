import { View, StyleSheet, Text, Pressable } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import apartments from "@assets/data/day5/apartments.json";
import CustomMarker from "@/components/day5/CustomMarker";
import ApartmentListItem from "@/components/day5/ApartmentListItem";
import { Stack, router } from "expo-router";
import { ApartmentProps } from "@/components/utils/types";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";

const AirbnbScreen = () => {
  // States
  const [selectedItem, setSelectedItem] = useState<ApartmentProps | null>(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // Refs
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Variables
  const snapPoints = useMemo(() => [80, "50%", "90%"], []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        // initialRegion={mapRegion}
        region={mapRegion}
      >
        {apartments?.map((apartment) => (
          <CustomMarker
            key={apartment?.id}
            apartment={apartment}
            onPress={() => {
              setSelectedItem(apartment);
            }}
          />
        ))}
      </MapView>

      {/* Cross icon */}
      <Pressable
        style={styles.crossIconContainer}
        onPress={() => router.back()}
      >
        <Ionicons name={"close"} size={24} />
      </Pressable>

      {/* Display selected apartment */}
      {selectedItem && (
        <ApartmentListItem
          apartment={selectedItem}
          containerStyle={{
            position: "absolute",
            bottom:
              typeof snapPoints[0] === "number" ? snapPoints[0] + 10 : 100,
            left: 10,
            right: 10,
          }}
        />
      )}

      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} index={1}>
        <View style={{ flex: 1 }}>
          <Text style={styles.listTitle}>Over {apartments?.length} places</Text>

          <BottomSheetFlatList
            contentContainerStyle={{
              gap: 10,
              padding: 10,
              paddingBottom: 50,
            }}
            keyExtractor={({ id }) => id?.toString()}
            showsVerticalScrollIndicator={false}
            data={apartments}
            renderItem={({ item }) => <ApartmentListItem apartment={item} />}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default AirbnbScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: "100%",
    height: "100%",
  },

  listTitle: {
    textAlign: "center",
    fontFamily: "InterSemi",
    fontSize: 16,
    marginVertical: 5,
    marginBottom: 20,
  },

  crossIconContainer: {
    position: "absolute",
    top: 60,
    left: 30,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 6,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 4,
  },
});

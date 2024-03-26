import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";
import { CustomMarkerProps } from "../utils/types";

const CustomMarker = ({ apartment, onPress }: CustomMarkerProps) => {
  return (
    <Marker
      coordinate={{
        latitude: apartment?.latitude,
        longitude: apartment?.longitude,
      }}
      onPress={onPress}
    >
      <View style={styles.markerContainer}>
        <Text style={{ fontFamily: "InterBold" }}>${apartment?.price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;

const styles = StyleSheet.create({
  markerContainer: {
    backgroundColor: "white",
    padding: 3,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
  },
});

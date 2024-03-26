import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { ApartmentListItemProps } from "../utils/types";

const ApartmentListItem = ({
  apartment,
  containerStyle,
}: ApartmentListItemProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={[styles.card, containerStyle]}>
        <Image source={{ uri: apartment?.image }} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{apartment?.title}</Text>
          <Text style={styles.description}>
            Stay at this beautiful and cozy apartment
          </Text>

          <View style={styles.footer}>
            <Text style={styles.price}>${apartment?.price} night</Text>
            <Text style={styles.price}>
              ★ {apartment?.rating} ({apartment?.numberOfStars})
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ApartmentListItem;

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: "black",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },

  card: {
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
  },

  image: {
    width: 150,
    aspectRatio: 1,
  },

  rightContainer: {
    flex: 1,
    padding: 10,
  },

  title: {
    fontFamily: "InterBold",
    marginBottom: 10,
  },

  description: {
    color: "gray",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },

  price: {
    fontFamily: "InterBold",
  },
});

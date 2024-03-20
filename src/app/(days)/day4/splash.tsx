import { View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { Stack } from "expo-router";

const AnimatedSplash = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Stack.Screen options={{ headerShown: false }} />

      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: "80%",
          maxWidth: 400,
          height: "60%",
          maxHeight: 400,
          // backgroundColor: "#eee",
        }}
        source={require("@assets/lottie/netflix_lottie_file.json")}
      />
    </View>
  );
};

export default AnimatedSplash;

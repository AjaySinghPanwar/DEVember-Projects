import { View, Button } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";

const Animation = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View>
      <LottieView
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        source={require("@assets/lottie/netflix_lottie_file.json")}
      />

      <Button
        title="Play"
        onPress={() => {
          animation.current?.play();
        }}
      />
      <Button
        title="Pause"
        onPress={() => {
          animation.current?.pause();
        }}
      />
      <Button
        title="Reset"
        onPress={() => {
          animation.current?.reset();
        }}
      />
    </View>
  );
};

export default Animation;

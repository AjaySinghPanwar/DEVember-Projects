import { View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import Animated, { ZoomOut } from "react-native-reanimated";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
  onAnimationFinish,
}: {
  onAnimationFinish: (isCancelled: boolean) => void;
}) => {
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
      <AnimatedLottieView
        ref={animation}
        autoPlay
        loop={false}
        exiting={ZoomOut}
        onAnimationFinish={onAnimationFinish}
        style={{
          width: "80%",
          maxWidth: 400,
          height: "60%",
          maxHeight: 400,
        }}
        source={require("@assets/lottie/netflix_lottie_file.json")}
      />
    </View>
  );
};

export default AnimatedSplashScreen;

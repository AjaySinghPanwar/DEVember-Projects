import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, router } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";

// The content for onboarding screens
const onboardingSteps = [
  {
    icon: "people-arrows",
    title: "Welcome to MyApp",
    description:
      "Experience seamless and secure transactions with MyApp. Join us on a journey to hassle-free financial management.",
  },
  {
    icon: "snowflake",
    title: "Effortless Transactions",
    description:
      "Make payments, transfer funds, and manage your finances effortlessly. MyApp simplifies your transactions for a stress-free experience.",
  },
  {
    icon: "book-reader",
    title: "Stay In Control",
    description:
      "Monitor your spending, track transactions, and stay in control of your finances. MyApp empowers you to make informed financial decisions.",
  },
];

const OnboardingScreen = () => {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    if (screenIndex === onboardingSteps.length - 1) {
      onEndOnboarding();
    } else {
      setScreenIndex((prevIndex) => prevIndex + 1);
    }
  };

  const onBack = () => {
    if (screenIndex === 0) {
      onEndOnboarding();
    } else {
      setScreenIndex((prevIndex) => prevIndex - 1);
    }
  };

  const onEndOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((step, index) => (
          <View
            key={index + step.title}
            style={[
              styles.stepIndicator,
              { backgroundColor: index === screenIndex ? "#CEF202" : "grey" },
            ]}
          />
        ))}
      </View>

      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent} key={screenIndex}>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={150}
              color="#CEF202"
            />
          </Animated.View>

          <View style={styles.footer}>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInRight.delay(50)}
              exiting={SlideOutLeft}
              style={styles.description}
            >
              {data.description}
            </Animated.Text>
          </View>

          <View style={styles.buttonRow}>
            <Text style={styles.buttonText} onPress={onEndOnboarding}>
              Skip
            </Text>

            <Pressable style={styles.button} onPress={onContinue}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#15141A",
  },

  pageContent: {
    flex: 1,
    padding: 20,
  },

  stepIndicatorContainer: {
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 20,
    marginTop: 20,
  },

  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: "grey",
    borderRadius: 10,
  },

  image: {
    alignSelf: "center",
    margin: 20,
    marginTop: 70,
  },

  footer: {
    marginTop: "auto",
  },

  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontFamily: "InterBlack",
    letterSpacing: 1.3,
    marginVertical: 10,
  },

  description: {
    color: "grey",
    fontSize: 20,
    fontFamily: "Inter",
    lineHeight: 28,
  },

  buttonRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  button: {
    flex: 1,
    backgroundColor: "#302E38",
    borderRadius: 50,
    alignItems: "center",
  },

  buttonText: {
    color: "#FDFDFD",
    fontFamily: "InterSemi",
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25,
  },
});

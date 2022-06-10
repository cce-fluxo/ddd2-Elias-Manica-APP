import "react-native-gesture-handler";
import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

import Button from "./src/components/Button";
import Input from "./src/components/Input";

import { screenHeight, screenWidth } from "./src/constants/dimensions";
import colors from "./src/constants/colors";

import LoginScrren from "./src/screens/loggedOut/LoginScrren";
import SingUpScreen from "./src/screens/loggedOut/SingUpScreen";
import ForgetPasswordScreen from "./src/screens/loggedOut/ForgetPassword";
import HomeScreen from "./src/screens/loggedIn/HomeScreen";

import SignedOutRoutes from "./src/routes/signedOut.routes";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <HomeScreen />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FA7D21",
    alignItems: "center",
    justifyContent: "center",
  },
});

import "react-native-gesture-handler";
import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import MainRoutes from "./src/routes/main.routes";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <MainRoutes />
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

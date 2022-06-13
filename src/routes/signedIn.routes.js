import React from "react";

import AmendoinScreen from "../screens/loggedIn/AmendoinScreen";
import GuarabolScreen from "../screens/loggedIn/GuarabolScreen";
import HomeScreen from "../screens/loggedIn/HomeScreen";
import SistemaWebScreen from "../screens/loggedIn/SistemaWebScreen";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function SignedInRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScrren"
        component={LoginScrren}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SingUpScreen"
        component={SingUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

import React from "react";

import LoginScrren from "../screens/loggedOut/LoginScrren";
import SingUpScreen from "../screens/loggedOut/SingUpScreen";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function SignedOutRoutes() {
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
    </Stack.Navigator>
  );
}

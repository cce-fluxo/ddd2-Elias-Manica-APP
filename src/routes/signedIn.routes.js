import React from "react";

import AmendoinScreen from "../screens/loggedIn/AmendoinScreen";
import GuarabolScreen from "../screens/loggedIn/GuarabolScreen";
import HomeScreen from "../screens/loggedIn/HomeScreen";
import SistemaWebScreen from "../screens/loggedIn/SistemaWebScreen";
import WhoWeAreScreen from "../screens/loggedIn/WhoWeAreScreen";
import ConteudosScreen from "../screens/loggedIn/ConteudosScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function SignedInRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

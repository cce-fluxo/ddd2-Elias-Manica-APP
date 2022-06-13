import React from "react";

import AmendoinScreen from "../screens/loggedIn/AmendoinScreen";
import GuarabolScreen from "../screens/loggedIn/GuarabolScreen";
import HomeScreen from "../screens/loggedIn/HomeScreen";
import SistemaWebScreen from "../screens/loggedIn/SistemaWebScreen";
import WhoWeAreScreen from "../screens/loggedIn/WhoWeAreScreen";
import ConteudosScreen from "../screens/loggedIn/ConteudosScreen";
import ContactScreen from "../screens/loggedIn/ContactScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function SignedInRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarStyle: { backgroundColor: "#FA7D21" } }}
    >
      <Tab.Screen name="Cases" component={HomeScreen} />
      <Tab.Screen name="Quem somos" component={WhoWeAreScreen} />
      <Tab.Screen name="Conteudos" component={ConteudosScreen} />
      <Tab.Screen name="Contato" component={ContactScreen} />
    </Tab.Navigator>
  );
}

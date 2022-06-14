import React from "react";

import AmendoinScreen from "../screens/loggedIn/AmendoinScreen";
import GuarabolScreen from "../screens/loggedIn/GuarabolScreen";
import HomeScreen from "../screens/loggedIn/HomeScreen";
import SistemaWebScreen from "../screens/loggedIn/SistemaWebScreen";
import WhoWeAreScreen from "../screens/loggedIn/WhoWeAreScreen";
import ConteudosScreen from "../screens/loggedIn/ConteudosScreen";
import ContactScreen from "../screens/loggedIn/ContactScreen";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function SignedInRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#FA7D21",
          borderTopColor: "transparent",
          paddingBottom: 5,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        headerStyle: {
          backgroundColor: "#FA7D21",
        },
        headerTintColor: "white",
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="Cases"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          title: "Cases",
        }}
      />
      <Tab.Screen
        name="Quem somos"
        component={WhoWeAreScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="slideshare" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Conteudos"
        component={ConteudosScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="area-graph" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Contato"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="phone" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

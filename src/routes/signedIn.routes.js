import React from "react";

import AmendoinScreen from "../screens/loggedIn/AmendoinScreen";
import GuarabolScreen from "../screens/loggedIn/GuarabolScreen";
import HomeScreen from "../screens/loggedIn/HomeScreen";
import SistemaWebScreen from "../screens/loggedIn/SistemaWebScreen";
import WhoWeAreScreen from "../screens/loggedIn/WhoWeAreScreen";
import ConteudosScreen from "../screens/loggedIn/ConteudosScreen";
import ContactScreen from "../screens/loggedIn/ContactScreen";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const CasesStack = createStackNavigator();

function CasesStackRoutes() {
  return (
    <CasesStack.Navigator>
      <CasesStack.Screen
        name="Homescreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <CasesStack.Screen
        name="AmendoinScreen"
        component={AmendoinScreen}
        options={{
          title: "Descascador de amendoim",
          headerTitleAlign: "center",
        }}
      />
      <CasesStack.Screen
        name="SistemaWebScreen"
        component={SistemaWebScreen}
        options={{
          title: "Sistema Web",
          headerTitleAlign: "center",
        }}
      />
      <CasesStack.Screen
        name="GuarabolScreen"
        component={GuarabolScreen}
        options={{
          title: "Guarabol",
          headerTitleAlign: "center",
        }}
      />
    </CasesStack.Navigator>
  );
}

function MyTabs() {
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
        component={CasesStackRoutes}
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

export default function SignedInRoutes() {
  return <MyTabs />;
}

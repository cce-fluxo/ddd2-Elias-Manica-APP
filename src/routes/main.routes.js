import react from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignedInRoutes from "./signedIn.routes";
import SignedOutRoutes from "./signedOut.routes";

const Stack = createStackNavigator();

export default function MainRoutes() {
  return (
    <Stack.Navigator initialRouteName="SignedOutRoutes">
      <Stack.Screen
        name="SignedOutRoutes"
        component={SignedOutRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignedInRoutes"
        component={SignedInRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreateBusinessScreen from "./screens/CreateBusinessScreen";
import ListScreen from "./screens/ListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [businesses, setBusinesses] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Create a Business Listing" options={{ headerTitleAlign: "center" }}>
          {(props) => (
            <CreateBusinessScreen
              {...props}
              businesses={businesses}
              setBusinesses={setBusinesses}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Listings" options={{ title: "Business Listings" }}>
          {(props) => <ListScreen {...props} businesses={businesses} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

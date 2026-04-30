import React, { useState } from "react";

// Navigation container is the root wrapper that manages navigation state
import { NavigationContainer } from "@react-navigation/native";

// Creates a stack-based navigation system (screens stack on top of each other)
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importing the two main screens of the app
import CreateBusinessScreen from "./screens/CreateBusinessScreen";
import ListScreen from "./screens/ListScreen";

// Initialize the stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  // Global state to store all business listings
  // This acts as our "in-memory or local state database"
  const [businesses, setBusinesses] = useState([]);

  return (
    // NavigationContainer wraps the entire app and enables navigation
    <NavigationContainer>
      {/* Stack.Navigator manages screen navigation in a stack ( in a push/pop behavior) */}
      <Stack.Navigator>

        {/*CREATE SCREEN also the Home screen*/}

        <Stack.Screen
          name="Create a Business Listing"
          // Centers the header title for better UI presentation
          options={{ headerTitleAlign: "center" }}
        >
          {(props) => (
            // Passing navigation props + global state down to screen
            // This allows CreateBusinessScreen to add new businesses
            <CreateBusinessScreen
              {...props}
              businesses={businesses}
              setBusinesses={setBusinesses}
            />
          )}
        </Stack.Screen>

        {/*LISTINGS SCREEN*/}

        <Stack.Screen
          name="Listings"
          // Custom header title shown in navigation bar
          options={{ title: "Business Listings" }}
        >
          {(props) => (
            // This is Passing only businesses state since this screen is read-only
            <ListScreen {...props} businesses={businesses} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

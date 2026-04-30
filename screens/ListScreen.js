import React, { useState } from "react";

// Core React Native components for layout, input, lists, and text rendering
import { View, TextInput, FlatList, StyleSheet, Text } from "react-native";

// Reusable component used to display each business item
import BusinessCard from "../components/BusinessCard";

export default function ListScreen({ businesses }) {
  // Local state used to store the user's search input
  const [search, setSearch] = useState("");

  // Filters the list of businesses based on the search input
  // Converts both values to lowercase for case-insensitive matching
  const filteredBusinesses = businesses.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    // Main container for the screen layout
    <View style={styles.container}>
      {/* Screen title */}
      <Text style={styles.title}>All Listings</Text>

      {/* Input field used for searching businesses by name */}
      <TextInput
        placeholder="Search business..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      {/* Conditional rendering:
          If no businesses match the search, show an empty state message */}
      {filteredBusinesses.length === 0 ? (
        <Text style={styles.emptyText}>No businesses found</Text>
      ) : (
        // FlatList efficiently renders a vertically scrollable list of items
        <FlatList
          data={filteredBusinesses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            // Each business is rendered using a reusable BusinessCard component
            <BusinessCard business={item} />
          )}
        />
      )}
    </View>
  );
}

// Styles for the ListScreen UI components
const styles = StyleSheet.create({
  // Main screen container styling
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  // Title styling for the screen header
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  // Styling for the search input field
  search: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },

  // Styling for the empty state message when no results are found
  emptyText: {
    marginTop: 20,
    textAlign: "center",
    color: "#888",
  },
});

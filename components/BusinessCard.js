import React from "react";

// Core React Native components used to structure and display UI elements
import { View, Text, StyleSheet } from "react-native";

export default function BusinessCard({ business }) {
  return (
    // Main container representing a single business card
    <View style={styles.card}>
      {/* Business name displayed as the primary heading */}
      <Text style={styles.name}>{business.name}</Text>

      {/* Business category label for classification */}
      <Text style={styles.category}>Category: {business.category}</Text>

      {/* Business description providing additional details */}
      <Text style={styles.description}>{business.description}</Text>
    </View>
  );
}

// Styling for the BusinessCard component
const styles = StyleSheet.create({
  // Main card container styling
  // Defines spacing, border, and background to create a card-like UI
  card: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: "#fafafa",
  },

  // Styling for the business name (main text)
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  // Styling for the category text (secondary information)
  category: {
    color: "#555",
    marginBottom: 5,
  },

  // Styling for the business description (supporting detail text)
  description: {
    color: "#777",
  },
});

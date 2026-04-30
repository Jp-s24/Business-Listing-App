import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BusinessCard({ business }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{business.name}</Text>
      <Text style={styles.category}>Category: {business.category}</Text>
      <Text style={styles.description}>{business.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: "#fafafa",
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  category: {
    color: "#555",
    marginBottom: 5,
  },

  description: {
    color: "#777",
  },
});

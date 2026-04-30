import React, { useState } from "react";
import { View, TextInput, FlatList, StyleSheet, Text } from "react-native";
import BusinessCard from "../components/BusinessCard";

export default function ListScreen({ businesses }) {
  const [search, setSearch] = useState("");

  // Filter businesses by name
  const filteredBusinesses = businesses.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Business Listings</Text>

      {/* 🔍 Search Bar */}
      <TextInput
        placeholder="Search business..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      {/* 📭 Empty state */}
      {filteredBusinesses.length === 0 ? (
        <Text style={styles.emptyText}>No businesses found</Text>
      ) : (
        <FlatList
          data={filteredBusinesses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <BusinessCard business={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  search: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },

  emptyText: {
    marginTop: 20,
    textAlign: "center",
    color: "#888",
  },
});

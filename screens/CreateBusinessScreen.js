import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function CreateBusinessScreen({
  navigation,
  businesses,
  setBusinesses,
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const addBusiness = () => {
    if (!name.trim()) return;

    const newBusiness = {
      id: Date.now().toString(),
      name,
      category,
      description,
    };

    setBusinesses([...businesses, newBusiness]);

    setName("");
    setCategory("");
    setDescription("");

    navigation.navigate("Listings");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Business Details</Text>

      <TextInput
        placeholder="Business Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />

      <TextInput
        placeholder="Short Description"
        value={description}
        onChangeText={setDescription}
        style={[styles.input, styles.textArea]}
        multiline
      />

      {/* 🔴 Add Business Button */}
      <TouchableOpacity style={styles.addButton} onPress={addBusiness}>
        <Text style={styles.buttonText}>Add Business</Text>
      </TouchableOpacity>

      {/* 🔴 View Listings Button */}
      <TouchableOpacity
        style={styles.listButton}
        onPress={() => navigation.navigate("Listings")}
      >
        <Text style={styles.buttonText}>View Listings</Text>
      </TouchableOpacity>
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
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },

  textArea: {
    height: 100,
    textAlignVertical: "top",
  },

  addButton: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  listButton: {
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

import { useState } from "react";

// Core React Native components used to build the UI
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CreateBusinessScreen({
  navigation,
  businesses,
  setBusinesses,
}) {
  // Local state to store the business name input value
  // This allows the input field to be controlled by React state
  const [name, setName] = useState("");

  // Local state to store the business category input value
  const [category, setCategory] = useState("");

  // Local state to store the business description input value
  const [description, setDescription] = useState("");

  // Function responsible for creating and adding a new business entry
  const addBusiness = () => {
    // Basic validation to prevent empty submissions
    if (!name.trim()) return;

    // Create a new business object using current input values
    const newBusiness = {
      id: Date.now().toString(), // unique identifier based on timestamp
      name,
      category,
      description,
    };

    // Update global state by adding the new business to existing array
    // This keeps all business entries in a shared parent state
    setBusinesses([...businesses, newBusiness]);

    // Reset all input fields after successful submission
    setName("");
    setCategory("");
    setDescription("");

    // Navigate user to the Listings screen after creating a business
    navigation.navigate("Listings");
  };

  return (
    // Main container wrapping the entire screen content
    <View style={styles.container}>
      {/* Screen title displayed at the top of the form */}
      <Text style={styles.title}>Enter Business Details</Text>

      {/* Input field for entering the business name */}
      {/* Controlled component tied to "name" state */}
      <TextInput
        placeholder="Business Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      {/* Input field for entering business category */}
      {/* Helps classify the type of business being created */}
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
      />

      {/* Multiline input for detailed business description */}
      {/* Styled separately to allow larger text input area */}
      <TextInput
        placeholder="Short Description"
        value={description}
        onChangeText={setDescription}
        style={[styles.input, styles.textArea]}
        multiline
      />

      {/* Primary action button that triggers business creation logic */}
      {/* Uses TouchableOpacity for better styling control than default Button */}
      <TouchableOpacity style={styles.addButton} onPress={addBusiness}>
        <Text style={styles.buttonText}>Add Business</Text>
      </TouchableOpacity>

      {/* Secondary navigation button to view all business listings */}
      {/* Direct navigation without submitting form */}
      <TouchableOpacity
        style={styles.listButton}
        onPress={() => navigation.navigate("Listings")}
      >
        <Text style={styles.buttonText}>View Listings</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styling definitions for layout and UI components
const styles = StyleSheet.create({
  // Main screen container
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  // Screen title styling
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },

  // Default styling for input fields
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },

  // Extended styling for multiline description input
  textArea: {
    height: 100,
    textAlignVertical: "top", // ensures text starts from top (Android fix)
  },

  // Primary action button styling for (Add Business)
  addButton: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  // Secondary button styling for (View Listings)
  listButton: {
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  // Text styling for both buttons
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput, Button } from "react-native-paper";

export default function UserinfoScreen() {
  // State to manage user information
  const [profilePic, setProfilePic] = useState(require("../assets/user.png")); // Use the correct path or URL
  const [name, setName] = useState("John Doe");
  const [country, setCountry] = useState("Kenya");
  const [email, setEmail] = useState("email@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("1234567890");
  const [password, setPassword] = useState("********"); // Use a secure method to handle passwords

  // State to track if fields are in edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle update button press
  const handleUpdate = () => {
    // Add your logic to update user details
    // For example, call an API to update the user information
    console.log("Updating user details:", {
      name,
      country,
      email,
      phoneNumber,
      password,
    });

    // Set isEditing to false after updating
    setIsEditing(false);
  };

  // Function to handle image update
  const handleImageUpdate = () => {
    // Add your logic to update the profile picture
    // For example, allow the user to pick an image from the device
    console.log("Updating profile picture");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="height">
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/user.png")}
            style={styles.profilePic}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{name}</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.inputView}>
            <TextInput
              label="Name"
              value={name}
              editable={isEditing}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              label="Email address"
              value={email}
              editable={isEditing}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              label="Phone number"
              value={phoneNumber}
              editable={isEditing}
              onChangeText={(text) => setPhoneNumber(text)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              label="Password"
              value={password}
              secureTextEntry
              editable={isEditing}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={handleUpdate} disabled={!isEditing}>
            Update
          </Button>
          <Button mode="outlined" onPress={() => setIsEditing(!isEditing)}>
            {isEditing ? "Cancel" : "Edit"}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileContainer: {
    alignItems: "center",
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameText: {
    fontSize: 18,
    marginLeft: 10,
  },
  infoContainer: {
    marginTop: 20,
  },
  inputView: {
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

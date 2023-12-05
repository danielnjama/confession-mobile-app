import React, { useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";

export default function AddConfessionScreen({navigation}) {
  const [confessionText, setConfessionText] = useState("");
  const [error, setError] = useState("");

  const handleConfessionSubmit = () => {
    // Add your logic to submit the confession text
    if (confessionText.trim() === "") {
      setError("Confession cannot be empty");
    } else {
      // Add your logic to submit the confession
      setError("");
      // Submit the confession, e.g., by calling an API
      console.log("Confession submitted:", confessionText);
      navigation.navigate('Home');

    }
  };

  return (
    <SafeAreaView>
        <ScrollView>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          label="Enter your confession here"
          multiline
          value={confessionText}
          onChangeText={(text) => setConfessionText(text)}
          style={styles.confessionInput}
        />
        <HelperText type="error" visible={error !== ""}>
          {error}
        </HelperText>
        <Button mode="contained" onPress={handleConfessionSubmit}>
          Submit
        </Button>
      </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  confessionInput: {
    margin: 10,
  },
});

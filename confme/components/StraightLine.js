import { View, StyleSheet, TouchableOpacity } from "react-native";

export default function StraightLineComponent() {
  return (
    <View style={styles.line} />
  );
}

const styles = StyleSheet.create({
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginTop: 15,
    marginBottom: 10,
    alignSelf: "center",
  }
});

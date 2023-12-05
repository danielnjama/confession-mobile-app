import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import ConfessionComponent from "../components/ConfessionComponent";
import {} from "react-native";

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView>
      <ConfessionComponent navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

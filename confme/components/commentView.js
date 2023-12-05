import { Text, Image, StyleSheet, View } from "react-native";
import StraightLineComponent from "../components/StraightLine";

export default function CommentViewComponent({text}) {
  return (
    <View style={styles.commentView}>
      <View>
        <Image
          source={require("../assets/user.png")}
          style={styles.userimage}
        />
      </View>
      <View style={styles.commentTextView}>
        <Text>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  userimage: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  commentView: {
    flexDirection: "row",
    alignItems: "center", // Center horizontally
    marginTop: 5,
    
  },
  commentTextView: {
    marginLeft: 10,
    backgroundColor: 'grey',
    flex: 1,
    borderRadius: 20,
    padding: 5,
  },
});

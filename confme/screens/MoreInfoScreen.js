import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import StraightLineComponent from "../components/StraightLine";
import CommentViewComponent from "../components/commentView";

export default function MoreinfoScreen({ route }) {
  const { item } = route.params;
  const renderItem = ({ item }) => <CommentViewComponent text={item.text} />;
  return (
    
      <View style={styles.confessionView}>
        <ScrollView style={{flex: 1}}>
        <View style={styles.userinfoView}>
          <View>
            <Image
              source={{ uri: item.image }}
              style={styles.userimage}
            />
          </View>
          <View style={styles.userinfoNameView}>
            <Text>
            {item.name} | {item.country} | {item.date}
            </Text>
          </View>
        </View>
        <StraightLineComponent />
        <View>
          <Text>{item.confession}</Text>
        </View>

        <StraightLineComponent />
        <View style={styles.userlikesandcomments}>
          <TouchableOpacity>
            <Text>👍{item.likes} Likes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>👎 {item.dislike} Dislikes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>💬 {item.comments.length} Comments</Text>
          </TouchableOpacity>
        </View>
        <StraightLineComponent />
        <View>
          <Text> Comment </Text>
          <View style={styles.commentInput}>
            <TextInput placeholder="Enter comment" multiline />
          </View>
          <TouchableOpacity style={styles.submitComment}>
            <Text> Comment </Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
        <View style={{flex: 1}}>
          <View style={{ marginTop: 5 }}>
            {item.comments.length !== 0 ? (
              <FlatList
                data={item.comments}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
              />
            ) : (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text> Be the first to comment!</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      
  );
}

const styles = StyleSheet.create({
  confessionView: {
    backgroundColor: "green",
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    flex: 1,
  },
  userinfoView: {
    flexDirection: "row",
  },
  userimage: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  userinfoNameView: {
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    marginLeft: 10,
  },
  userlikesandcomments: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  submitComment: {
    alignSelf: "center",
    backgroundColor: "brown",
    width: "80%",
    // textAlign: "center",
    alignContent: "center",
    borderRadius: 30,
    paddingVertical: 10,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  commentInput: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  commentView: {
    flexDirection: "row",
    alignItems: "center", // Center horizontally
  },
  commentTextView: {
    marginLeft: 10,
  },
});

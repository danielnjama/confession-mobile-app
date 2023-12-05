import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import data from "./DataComponent";

export default function ConfessionComponent({navigation}) {
  const renderItem = ({ item }) => (
    <View style={styles.confessionView}>
      <View style={styles.userinfoView}>
        <View>
          <Image source={{ uri: item.image }} style={styles.userimage} />
        </View>
        <View style={styles.userinfoNameView}>
          <Text>
            {item.name} | {item.country} | {item.date}
          </Text>
        </View>
      </View>
      <View style={styles.line} />
      <TouchableOpacity onPress={() => navigation.navigate('Moreinfo', { item })}>
        <Text>{item.confession.length > 200 ?  item.confession.slice(0, 200) + '...' + 'Read more' : item.confession}</Text>
      </TouchableOpacity>

      <View style={styles.line} />
      <View style={styles.userlikesandcomments}>
        <TouchableOpacity>
          <Text>👍{item.likes} Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>👎 {item.dislikes} Dislikes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>💬 {item.comments.length} Comments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <>
    {data.length !==0 ?(
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />):
      (<View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text> No confessions at the moment!</Text>
      </View>)}
    </>
  );
}

const styles = StyleSheet.create({
  confessionView: {
    backgroundColor: "green",
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
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
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginTop: 15,
    marginBottom: 10,
    alignSelf: "center",
  },
  userlikesandcomments: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

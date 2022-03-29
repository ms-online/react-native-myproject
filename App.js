import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';

export default function App() {
  const [blogs, setBlogs] = useState([
    { title: '第一篇', id: '1' },
    { title: '第二篇', id: '2' },
    { title: '第三篇', id: '3' },
    { title: '第四篇', id: '4' },
    { title: '第五篇', id: '5' },
    { title: '第六篇', id: '6' },
    { title: '第七篇', id: '7' },
  ]);
  const pressHandler = (id) => {
    console.log(id);
    setBlogs((prevBlogs) => {
      return prevBlogs.filter((blog) => blog.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={false}
        // numColumns={3}
        inverted={false}
        // keyExtractor={(item, index) => index.toString()}
        data={blogs}
        renderItem={({ item }) => (
          <Pressable
            android_ripple={{ color: '#0ff' }}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            underlayColor='#ddd'
            style={({ pressed }) => [
              { backgroundColor: pressed ? '#ddd' : 'green' },
              styles.button,
            ]}
            onPress={() => pressHandler(item.id)}
            activeOpacity={0.2}
          >
            <Text style={styles.item}>{item.title}</Text>
          </Pressable>
        )}
      />

      {/* <ScrollView>
        {blogs.map((blog) => (
          <View key={blog.key}>
            <Text style={styles.item}>{blog.title}</Text>
          </View>
        ))}
      </ScrollView> */}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 20,
    padding: 30,
    backgroundColor: 'yellow',
    fontSize: 20,
    marginRight: 10,
  },
  button: {
    width: 150,
    height: 120,
    // backgroundColor: 'green',
    margin: 10,
    alignItems: 'center',
  },
});

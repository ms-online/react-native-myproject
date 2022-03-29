import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [blogs, setBlogs] = useState([
    { title: '第一篇' },
    { title: '第二篇' },
    { title: '第三篇' },
    { title: '第四篇' },
    { title: '第五篇' },
    { title: '第六篇' },
    { title: '第七篇' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={false}
        numColumns={3}
        inverted={true}
        keyExtractor={(item, index) => index.toString()}
        data={blogs}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
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
});

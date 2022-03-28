import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [blogs, setBlogs] = useState([
    { title: '第一篇', key: '1' },
    { title: '第二篇', key: '2' },
    { title: '第三篇', key: '3' },
    { title: '第四篇', key: '4' },
    { title: '第五篇', key: '5' },
    { title: '第六篇', key: '6' },
    { title: '第七篇', key: '7' },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {blogs.map((blog) => (
          <View key={blog.key}>
            <Text style={styles.item}>{blog.title}</Text>
          </View>
        ))}
      </ScrollView>
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
  },
});

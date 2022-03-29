import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';

export default function App() {
  const [todos, setTodos] = useState([
    { text: '看书', key: '1' },
    { text: '打扫卫生', key: '2' },
    { text: '运动', key: '3' },
    { text: '买生活用品', key: '4' },
  ]);
  return (
    <View style={styles.container}>
      {/* 头部header */}
      <Header />
      <View style={styles.content}>
        {/* 列表list */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          />
        </View>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

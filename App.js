import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  ToastAndroid,
} from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: '看书', key: '1' },
    { text: '打扫卫生', key: '2' },
    { text: '运动', key: '3' },
    { text: '买生活用品', key: '4' },
  ]);

  const pressedHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  const AddTodoHandler = (text) => {
    if (text.length > 1) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      // ToastAndroid.show('待办事项必须在2个字符以上!', ToastAndroid.LONG);
      // ToastAndroid.showWithGravity(
      //   '待办事项必须在2个字符以上!',
      //   ToastAndroid.LONG,
      //   ToastAndroid.BOTTOM
      // );
      ToastAndroid.showWithGravityAndOffset(
        '待办事项必须在2个字符以上!',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        200,
        0
      );
      // Alert.alert(
      //   '警告',
      //   '待办事项必须在2个字符以上!',
      //   [
      //     { text: '不再显示', onPress: () => console.warn('不再显示') },
      //     { text: '取消', onPress: () => console.warn('取消') },
      //     { text: '确定', onPress: () => console.warn('确定') },
      //   ],
      //   { cancelable: true, onDismiss: () => console.warn('已关闭警告框') }
      // );
    }
  };

  return (
    <View style={styles.container}>
      {/* 头部header */}
      <Header />
      <View style={styles.content}>
        {/* 新增事项Form */}
        <AddTodo AddTodoHandler={AddTodoHandler} />
        {/* 列表list */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressedHandler={pressedHandler} />
            )}
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

import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function AddTodo({ AddTodoHandler }) {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='新事项...'
        onChangeText={(value) => setText(value)}
      />
      <Button
        onPress={() => AddTodoHandler(text)}
        title='添加新事项'
        color='coral'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

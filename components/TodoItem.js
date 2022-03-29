import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, pressedHandler }) {
  return (
    <TouchableOpacity onPress={() => pressedHandler(item.key)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderStyle: 'dashed',
    borderRadius: 10,
    borderWidth: 1,
  },
});

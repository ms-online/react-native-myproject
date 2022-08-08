import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function TodoItem({ item, pressedHandler }) {
  return (
    <TouchableOpacity onPress={() => pressedHandler(item.key)}>
      <View style={styles.item}>
        <AntDesign name='delete' size={18} color='#333' />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderStyle: 'dashed',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
  },
  text: {
    marginLeft: 10,
  },
});

import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>待办事项</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: 'coral',
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});

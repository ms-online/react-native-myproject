import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>欢迎来到我的博客！</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodytext}>
          <Text>我的</Text>第一篇博客
        </Text>
        <Text style={styles.bodytext}>我的第二篇博客</Text>
        <Text style={styles.bodytext}>我的第三篇博客</Text>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  text: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'pink',
    margin: 20,
  },
  bodytext: {
    fontSize: 25,
    padding: 10,
    fontWeight: 'bold',
  },
});

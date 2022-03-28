import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Summer');
  const [age, setAge] = useState('20');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>姓名：</Text>
      <TextInput
        multiline
        style={styles.input}
        onChangeText={(val) => setName(val)}
      />
      <Text style={styles.text}>年龄：</Text>
      <TextInput
        multiline
        style={styles.input}
        onChangeText={(val) => setAge(val)}
        keyboardType='numeric'
      />
      <Text style={styles.text}>
        name:{name}, age:{age}
      </Text>
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Summer');
  const [profile, setProfile] = useState({ hobbies: 'sports', age: 20 });
  const clickHandler = () => {
    setName('Lucy');
    setProfile({ hobbies: 'drawing', age: 25 });
  };
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        I like {profile.hobbies} and my age is {profile.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title='更改信息' onPress={clickHandler} />
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
  buttonContainer: {
    marginTop: 20,
  },
});

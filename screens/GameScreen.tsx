import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Primarybutton } from '../components/PrimaryButton';

export default function GameScreen() {
  const [number, onChangeNumber] = useState<string>('');
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.inputElement}
          placeholder="00"
          keyboardType="number-pad"
          maxLength={2}
          autoCorrect={false}
          onChangeText={(text) => onChangeNumber(text)}
          value={number}
          autoFocus
          placeholderTextColor="#ddb52f"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Primarybutton>Reset</Primarybutton>
        <Primarybutton>Confirm</Primarybutton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 16,
    marginHorizontal: 20,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  inputElement: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    textAlign: 'center',
  },
});

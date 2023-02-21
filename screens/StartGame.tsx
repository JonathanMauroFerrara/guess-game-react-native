import { useState } from 'react';
import { StyleSheet, Alert, View, TextInput } from 'react-native';
import { Primarybutton } from '../components/ui/PrimaryButton';
import { TStartGame } from '../types/index.types';
import { Colors } from '../costants/colors';

export default function StartGame({ onConfirmNumber }: TStartGame) {
  const [number, onChangeNumber] = useState<string>('');

  const resetInputNumber = () => onChangeNumber('');

  const validateInputNumber = () => {
    const parsedNumber = parseInt(number);
    if (parsedNumber <= 0 && parsedNumber > 99) {
      Alert.alert(
        'Invalid number',
        'Number must be a number between 1 and 99.',
        [
          {
            text: 'Understand',
            style: 'destructive',
            onPress: resetInputNumber,
          },
        ],
      );
      return;
    }
    return onConfirmNumber(parsedNumber);
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.inputElement}
          placeholder="00"
          keyboardType="number-pad"
          maxLength={2}
          autoCorrect={false}
          onChangeText={text => onChangeNumber(text)}
          value={number}
          autoFocus
          placeholderTextColor={Colors.primary500}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Primarybutton onPressHandler={resetInputNumber}>Reset</Primarybutton>
        <Primarybutton onPressHandler={validateInputNumber}>
          Confirm
        </Primarybutton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 16,
    marginHorizontal: 20,
    backgroundColor: Colors.secondary900,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 20,
    shadowColor: Colors.secondary900,
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
    borderBottomColor: Colors.primary500,
    borderBottomWidth: 2,
    color: Colors.primary500,
    textAlign: 'center',
  },
});

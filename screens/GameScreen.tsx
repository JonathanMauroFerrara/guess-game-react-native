import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { NumberContainer } from '../components/game/NumberContainer';
import { Primarybutton } from '../components/ui/PrimaryButton';
import { Title } from '../components/ui/Title/Title';
import { Colors } from '../costants/colors';
import { generateRandomNumberBetween } from '../utils';
import { FontAwesome } from '@expo/vector-icons';

let minBoundary = 1;
let maxBoundary = 100;
type TGameScreen = {
  userNumber: number;
  isGameOver: (value: boolean) => void;
};

export default function GameScreen({ userNumber, isGameOver }: TGameScreen) {
  const initialNumber = generateRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialNumber);

  useEffect(() => {
    console.log('entra');
    console.log(currentGuess, userNumber);
    if (currentGuess === userNumber) {
      isGameOver(true);
    }
  }, [currentGuess, userNumber, isGameOver]);

  function nextGuessHandler(direction: string) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.container}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>Higher or lower?</Text>
        <View style={styles.buttonContainer}>
          <Primarybutton onPressHandler={() => nextGuessHandler('lower')}>
            <FontAwesome name="minus" size={24} color="black" />
          </Primarybutton>
          <Primarybutton onPressHandler={() => nextGuessHandler('higher')}>
            <FontAwesome name="plus" size={24} color="black" />
          </Primarybutton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    marginTop: 100,
    padding: 16,
  },
  contentContainer: {
    marginTop: 30,
  },
  contentTitle: {
    fontSize: 24,
    width: '100%',
    color: Colors.secondary900,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '70%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

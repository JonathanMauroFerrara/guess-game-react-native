import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGame from './screens/StartGame';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import { Colors } from './costants/colors';
import GameOver from './screens/GameOver';

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);

  const pickedNumber = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
  };

  const onGameOver = (value: boolean) => {
    setGameIsOver(true);
  };

  console.log(userNumber);
  let screen = <StartGame onConfirmNumber={pickedNumber} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} isGameOver={onGameOver} />;
  }

  if (gameIsOver) {
    screen = <GameOver />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary400, Colors.secondary900]}
      style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        source={require('./assets/images/dices.jpg')}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

import { StyleSheet, Text, ImageBackground } from 'react-native';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#f1c232', '#000000']} style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        source={require('./assets/images/dices.jpg')}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <GameScreen />
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

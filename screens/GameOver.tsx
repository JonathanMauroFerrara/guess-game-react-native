import { Text, View, Image, StyleSheet } from 'react-native';
import { Colors } from '../costants/colors';

export default function GameOver() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game is over</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/trophy.jpg')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  title: {
    fontSize: 40,
    color: Colors.secondary900,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 100,
  },
});

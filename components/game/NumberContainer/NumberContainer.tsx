import { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../../costants/colors';

export function NumberContainer({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: Colors.primary500,
    fontSize: 35,
  },
});

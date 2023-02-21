import { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../../costants/colors';

export function Title({ children }: PropsWithChildren) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    width: '100%',
    color: Colors.secondary900,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

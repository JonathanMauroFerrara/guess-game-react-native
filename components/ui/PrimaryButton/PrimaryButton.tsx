import { PropsWithChildren } from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { Colors } from '../../../costants/colors';
import { TButton } from './PrimaryButton.types';

export function Primarybutton({
  children,
  onPressHandler,
}: PropsWithChildren<TButton>) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressedEffect, styles.textContainer]
            : styles.textContainer
        }
        onPress={onPressHandler}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 35,
    overflow: 'hidden',
  },
  textContainer: {
    backgroundColor: Colors.primary400,
    padding: 5,
    borderRadius: 15,
  },
  text: {
    textAlign: 'center',
  },
  pressedEffect: {
    opacity: 0.75,
  },
});

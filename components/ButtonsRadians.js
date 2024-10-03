import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

const ButtonsRadians = ({ text, onPres, buttonStyle }) => {
  return (
    <Pressable
      style={[styles.circularButton, buttonStyle]}
      onPress={onPres}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  circularButton: {
    backgroundColor: '#008000',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ButtonsRadians;

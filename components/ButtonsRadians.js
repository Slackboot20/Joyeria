import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa el hook

const ButtonsRadians = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.bubble}
      onPress={() => navigation.navigate('FormMovemt')}
    >
      <Text style={styles.bubbleText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    backgroundColor: 'peru',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'peru',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  bubbleText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ButtonsRadians;
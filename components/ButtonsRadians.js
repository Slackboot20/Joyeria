import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa el hook
import style from '../Styles/style';

const ButtonsRadians = ({routename}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
<<<<<<< HEAD
      style={style.bubblebuttom}
      onPress={() => navigation.navigate('FormMovemt')}
=======
      style={styles.bubble}
      onPress={() => navigation.navigate(routename)}
>>>>>>> b1a5d5f91fcc123d0171653c24e660a8256c8493
    >
      <Text style={style.bubbleTextButtom}>+</Text>
    </TouchableOpacity>
  );
};

export default ButtonsRadians;
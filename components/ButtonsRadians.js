import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa el hook
import style from '../Styles/style';

const ButtonsRadians = ({routename}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={style.bubblebuttom}
      onPress={() => navigation.navigate(routename)}
    >
      <Text style={style.bubbleTextButtom}>+</Text>
    </TouchableOpacity>
  );
};

export default ButtonsRadians;
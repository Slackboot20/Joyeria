import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa el hook
import style from '../Styles/style';
import Icon from 'react-native-vector-icons/Ionicons';


const ButtonsRadians = ({routename}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate(routename)}
    >
      <Icon name="add" size={40} color="#000"/>
      </TouchableOpacity>
    </View>
    
  );
};

export default ButtonsRadians;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1abc9c',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,  // Adds shadow on Android
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
    backgroundColor: '#f0f0f0' // Opcional: color de fondo
  },
})
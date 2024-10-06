import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

const Buttons = ({text, onPres}) => {
    return(
        <Pressable
        style={styles.button}
        onPress={onPres}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
      paddingVertical: 15,
      paddingHorizontal: 35,
      backgroundColor: 'peru',
      borderRadius: 25,
      shadowColor: '#000',
      shadowOffset: { width: 10, height: 10 },
      shadowOpacity: 0.8,
      shadowRadius: 5,
      width: 200,
      height: 55,
      },
    buttonText: {
      fontFamily: 'serif',
      color: '#ffffff',           // Color del texto (negro)
      fontSize: 16,               // Tamaño de la letra mediano
      fontWeight: 'bold',
      textAlign: 'center',        // Negrita para resaltar el texto
    },
  });

  export default Buttons;
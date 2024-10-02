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
      backgroundColor: '#006400', // Verde medio oscuro
      paddingVertical: 12,        // Espaciado vertical (mediano)
      paddingHorizontal: 24,      // Espaciado horizontal (mediano)
      borderRadius: 8,            // Bordes redondeados
      alignItems: 'center',       // Centra el texto horizontalmente
    },
    buttonText: {
      color: '#000000',           // Color del texto (negro)
      fontSize: 16,               // Tamaño de la letra mediano
      fontWeight: 'bold',         // Negrita para resaltar el texto
    }
  });

  export default Buttons;
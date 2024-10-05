import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

const ButtonsRadians = ({text, onPres}) => {
    return(
        <Pressable
        style={styles.circularButton}
        onPress={onPres}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    circularButton: {
      backgroundColor: '#008000',  // Color de fondo verde (puedes cambiarlo)
      width: 90,                   // Ancho del botón (ajusta según el tamaño deseado)
      height: 50,                  // Altura del botón, igual al ancho para hacerlo circular
      justifyContent: 'center',    // Centrar el contenido verticalmente
      alignItems: 'center',        // Centrar el contenido horizontalmente
    },
    buttonText: {
      color: '#ffffff',            // Color del texto (blanco)
      fontSize: 18,                // Tamaño de la fuente
      fontWeight: 'bold',          // Texto en negrita
    }
  });

  export default ButtonsRadians;
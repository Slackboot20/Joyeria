import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ButtonsRadians from '../components/ButtonsRadians';

export default function Report({ navigation }) {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>Movimientos</Text>
            <ButtonsRadians 
            routename='FormMovemt'
            text="Crear Joyas"
            />
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontFamily: 'serif',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        padding: 50,
    },
    bubble: {
        position: 'absolute', // Fija la posición de la burbuja
        bottom: 30, // La pone cerca de la parte inferior
        right: 30, // A la derecha de la pantalla
        width: 60, // Tamaño de la burbuja
        height: 60,
        backgroundColor: 'peru', // Color de la burbuja
        borderRadius: 30, // Hace la burbuja completamente redonda
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'peru', // Sombra para darle un efecto flotante
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // Para sombras en Android
    },
    bubbleText: {
        fontSize: 30, // Tamaño del signo "+"
        color: '#fff',
        fontWeight: 'bold',
    },
})

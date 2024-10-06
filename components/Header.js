import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';


const Header = () => {


    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Joyería Green Facets</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'peru',
        padding: 20,
        alignItems: 'center',
        marginTop: 30,
    },
    backButton: {
        position: 'absolute',
        left: 20, // Ubicación del botón a la izquierda
        top: '110%', // Para centrar verticalmente el botón
        transform: [{ translateY: -12.5 }], // Ajuste para centrar mejor el botón
    },
    headerText: {
        fontFamily: 'serif',
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Header;

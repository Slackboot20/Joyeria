import * as React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Buttons from '../components/Buttons';

export default function Profile({ navigation }) {
    const handleLogout = () => {
        Alert.alert(
            "Cerrar sesión",
            "¿Estás seguro de que deseas cerrar sesión?",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancelado"),
                    style: "cancel"
                },
                {
                    text: "Cerrar sesión",
                    onPress: () => {
                        navigation.navigate('InicializerApp');
                    }
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Buttons
                text="Cerrar Sesión"
                onPres={handleLogout}
            />
        </View>
    );
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
});

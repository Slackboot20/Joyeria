import * as React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Buttons from '../components/Buttons';
import style from '../Styles/style';

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
        <View style={style.containerTabs}>
            <Text style={style.titleTabs}>Profile</Text>
            <Buttons
<<<<<<< HEAD
                buttonStyle={style.logoutButton}
=======
>>>>>>> b1a5d5f91fcc123d0171653c24e660a8256c8493
                text="Cerrar Sesión"
                onPres={handleLogout}
            />
        </View>
    );
}
<<<<<<< HEAD
=======

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
>>>>>>> b1a5d5f91fcc123d0171653c24e660a8256c8493

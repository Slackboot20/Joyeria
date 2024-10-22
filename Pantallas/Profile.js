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
                buttonStyle={style.logoutButton}
                text="Cerrar Sesión"
                onPres={handleLogout}
            />
        </View>
    );
}

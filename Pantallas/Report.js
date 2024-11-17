import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import style from '../Styles/style';

export default function Report({ navigation }) {
    return (
        <View style={style.containerTabs}>
            <Text style={style.titleTabs}>Movimientos</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('FormMovemt')}
            >
                <Text style={styles.buttonText}>Crear Joyas</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'peru',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

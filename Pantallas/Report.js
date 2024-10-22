import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ButtonsRadians from '../components/ButtonsRadians';
import style from '../Styles/style';

export default function Report({ navigation }) {
    return (
<<<<<<< HEAD
        <View style={style.containerTabs} >
            <Text style={style.titleTabs}>Movimientos</Text>
            <TouchableOpacity 
                style={style.bubblebuttom}
                onPress={() => navigation.navigate('FormMovemt')}
            >
                <Text style={style.bubbleTextButtom}>+</Text>
            </TouchableOpacity>
=======
        <View style={styles.container} >
            <Text style={styles.title}>Movimientos</Text>
            <ButtonsRadians 
            routename='FormMovemt'
            text="Crear Joyas"
            />
>>>>>>> b1a5d5f91fcc123d0171653c24e660a8256c8493
           
        </View>
    )
}
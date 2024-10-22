import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ButtonsRadians from '../components/ButtonsRadians';
import style from '../Styles/style';

export default function Report({ navigation }) {
    return (
        <View style={style.containerTabs} >
            <Text style={style.titleTabs}>Movimientos</Text>
            <ButtonsRadians 
            routename='FormMovemt'
            text="Crear Joyas"
            />
           
        </View>
    )
}
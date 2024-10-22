import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native'
import CardJewelry from '../components/CardJewelry';
import style from '../Styles/style'

export default function Joyas(){
    return(
        <View style ={style.containerTabs}>
            <Text style = {style.titleTabs}>Ver Mis Joyas</Text>
            <CardJewelry/>
        </View>
    )
}
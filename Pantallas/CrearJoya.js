import * as React from 'react';
import { View, Text} from 'react-native'
import ButtonsRadians from '../components/ButtonsRadians';
import style from '../Styles/style'


export default function CrearJoya({navigation}){
    return(
        <View style ={style.containerTabs}>
            <Text style = {style.titleTabs}>Crear Joyas</Text>
            <ButtonsRadians 
            text="Crear Joyas"
            onPres={() => navigation.navigate('FormJoya')}/>
        </View>
    )
};
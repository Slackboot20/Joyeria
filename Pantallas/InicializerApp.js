import * as React from 'react';
import { View, StyleSheet, ImageBackground} from 'react-native'
import Buttons from '../components/Buttons';
import style from '../Styles/style'

export default function InicializerApp({navigation}){
    return(
        <ImageBackground
        source={require('../assets/opcion3.jpeg')}
        title={style.titleStart}
        style={style.backgroundStart}
        imageStyle={style.backgroundimageStart}
        >
        <View style={style.containerStart}>
            <Buttons 
            style= {style.buttonCustomsStart}
            text="Iniciar"
            onPres={() => navigation.navigate('Tabs')} 
            />
        </View>
        </ImageBackground>
    )
}
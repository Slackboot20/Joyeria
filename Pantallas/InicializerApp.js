import * as React from 'react';
import { View, StyleSheet, ImageBackground} from 'react-native'
import Buttons from '../components/Buttons';

export default function InicializerApp({navigation}){
    return(
        <ImageBackground 
        source={require('../assets/PantallaInicio.png')}
        style={styles.background}
        imageStyle={styles.backgroundimage}
        >
        <View>
            <Buttons 
            text="Iniciar"
            onPres={() => navigation.navigate('Tabs')} 
            />
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white'
    },
    backgroundimage:{
        opacity: 0.5, 
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#127a1b',
    }

})
import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground} from 'react-native'
import Buttons from '../components/Buttons';

export default function InicializerApp({navigation}){
    return(
        <ImageBackground
        source={require('../assets/opcion3.jpeg')}
        title={styles.title}
        style={styles.background}
        imageStyle={styles.backgroundimage}
        >
        <View style={styles.container}>
            <Buttons 
            style= {styles.buttonCustoms}
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
        backgroundColor: 'peachpuff'
    },
    backgroundimage:{
        opacity: 0.5, 
    },
    container: {
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center', // Centra el contenido horizontalmente
        flex: 1,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#127a1b',
    },
    buttonCustoms:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})
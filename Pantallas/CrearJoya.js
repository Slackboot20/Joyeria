import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native'
import ButtonsRadians from '../components/ButtonsRadians';


export default function CrearJoya(){
    return(
        <View style ={styles.container}>
            <Text style = {styles.title}>Crear Joyas</Text>
            <ButtonsRadians 
            routename='FormJoya'
            text="Crear Joyas"
            />
        </View>
    )
};

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
    }
})
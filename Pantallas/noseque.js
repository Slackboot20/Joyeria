import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native'
import ButtonsRadians from '../components/ButtonsRadians';


export default function Noseque({navigation}){
    return(
        <View style ={styles.container}>
            <Text style = {styles.title}>Crear Joyas</Text>
            <ButtonsRadians 
            text="Crear Joyas"
            onPres={() => navigation.navigate('FormJoya')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        padding: 50,
    }
})
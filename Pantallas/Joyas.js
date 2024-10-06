import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native'
import CardJewelry from '../components/CardJewelry';

export default function Joyas(){
    return(
        <View style ={styles.container}>
            <Text style = {styles.title}>Ver Mis Joyas</Text>

            <CardJewelry></CardJewelry>

        </View>
    )
}

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

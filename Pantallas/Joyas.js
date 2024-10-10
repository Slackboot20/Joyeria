import * as React from 'react';
import { ScrollView, Text, StyleSheet} from 'react-native'
import CardJewelry from '../components/CardJewelry';
import { jewel } from '../DateJoyas/JoyasDate';


export default function Joyas(){
    return(
        <ScrollView style ={styles.container}>
            <Text style = {styles.title}>Ver Mis Joyas</Text> 
            {jewel.map((jewel, index) => (
            <CardJewelry
            key = {index}
            description={jewel.description}
            />
            ))}
        </ScrollView>
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

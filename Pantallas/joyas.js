import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native'

export default function Joyas(){
    return(
        <View style ={styles.container}>
            <Text style = {styles.title}>Ver Mis Joyas</Text>
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
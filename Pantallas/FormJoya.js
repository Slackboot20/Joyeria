import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native'
import ButtonsRadians from '../components/ButtonsRadians';


export default function FormJoya({navigation}){
    return (
        <View>
            <Text style={styles.textoPredeterminado} >Formulario de Joya</Text>
            <ButtonsRadians
            text = 'Volver'
            onPres = {() => navigation.goBack()}/>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center',      // Centra el contenido horizontalmente
        backgroundColor: '#f0f0f0', // Fondo claro para contraste
      },
      textoPredeterminado: {
        color: '#006400',          // Verde medio oscuro
        fontWeight: 'bold',        // Texto en negrita
        textAlign: 'center',       // Alineación centrada
        fontSize: 24,              // Tamaño de la fuente
      },
      textoSecundario: {
        color: '#000000',          // Negro
        textAlign: 'center',       // Alineación centrada
        fontSize: 18,              // Tamaño de la fuente
      }
});
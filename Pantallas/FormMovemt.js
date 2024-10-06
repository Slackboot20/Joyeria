import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native'


export default function FormMovemt(){
    return (
        <View>
            <Text style={styles.textoPredeterminado} >Formulário de Movimientos</Text>
            
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center',      // Centra el contenido horizontalmente
        backgroundColor: 'peru', // Fondo claro para contraste
      },
      textoPredeterminado: {
        fontFamily: 'serif',       //Tipo de letra
        color: 'peru',          // Color pastel
        fontWeight: 'bold',        // Texto en negrita
        textAlign: 'center',       // Alineación centrada
        fontSize: 24,              // Tamaño de la fuente
      },
      textoSecundario: {
        fontFamily: 'serif',
        color: 'peru',          // Negro
        textAlign: 'center',       // Alineación centrada
        fontSize: 18,              // Tamaño de la fuente
      }
});
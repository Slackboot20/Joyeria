import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, View, ActivityIndicator, TouchableOpacity, SafeAreaView} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CardJewelry from '../components/CardJewelry';
import { getProducts } from '../utils/db';
import ButtonsRadians from '../components/ButtonsRadians';


export default function CrearJoya(){
    const navigation = useNavigation();
    const [fetchedProducts, setFetchedProduct] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga

  
    useEffect(() => {
      async function fetchProducts() { // <-- llamar como quieran
        const jewels = await getProducts();
        setFetchedProduct(jewels);
        setLoading(false);
      }
      fetchProducts(); // <-- llamar como quieran
    }, []);
  
  
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading joyas...</Text>
        </View>
      );
    }
  
    return(
      <SafeAreaView
      style={styles.container}>
        <ScrollView >
        {fetchedProducts.length === 0 ? (
          <Text>No hay joyas</Text> // 
        ):( 
          fetchedProducts.map((jewel, index) => (
          <TouchableOpacity
          key={index}
          onPress={() => 
            navigation.navigate('FormUpdate', { 
              codigo_Product: jewel.cod_Product,
              description: jewel.description,
              material: jewel.material,
              precioInicial: jewel.precioInicial,
              precioFinal: jewel.precioFinal,
              material: jewel.material,
              peso: jewel.peso,
              provedor: jewel.provedor,
              id: jewel.id_joya
            })
          }
          >
            <CardJewelry
            codigo_Product={jewel.cod_Product}
            description={jewel.description}
            material={jewel.material}>
            </CardJewelry>
          </TouchableOpacity>
        ))
      )}
    <View >
    <ButtonsRadians 
        routename='FormJoya'
        text="Crear Joyas"
    />
    </View>
    </ScrollView>

      </SafeAreaView>
        
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16, // Márgenes a los lados (izquierda y derecha)
    marginVertical: 40,   // Márgenes en la parte superior e inferior
    padding: 10,          // Opcional: Espaciado interior para el contenido
    backgroundColor: '#f0f0f0' // Color de fondo opcional
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
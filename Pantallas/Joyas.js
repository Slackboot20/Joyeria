import { ScrollView, Text, StyleSheet, View, ActivityIndicator, TouchableOpacity} from 'react-native'
import CardJewelry from '../components/CardJewelry';
import { getProducts } from '../utils/db';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';

const Joyas = () => {

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
      //Agregar un SafeView
      <ScrollView style={styles.container}>
        {fetchedProducts.length === 0 ? (
          <Text>No hay joyas</Text> // 
        ):( 
          fetchedProducts.map((jewel, index) => (
          <TouchableOpacity
          key={index}
          onPress={() => 
            navigation.navigate('JewelryDetail', { 
              codigo_Product: jewel.cod_Product,
              description: jewel.description,
              material: jewel.material,
              id_joya: jewel.id_joya,
              precioInicial: jewel.precioInicial,
              precioFinal: jewel.precioFinal,
              material: jewel.material,
              peso: jewel.peso,
              provedor: jewel.provedor
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
    </ScrollView>
    )
};


export default Joyas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f4f6f6',  // Light grey background
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

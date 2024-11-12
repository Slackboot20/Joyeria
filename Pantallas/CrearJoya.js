import React, { useState, useEffect , useCallback } from 'react';
import { ScrollView, Text, StyleSheet, View, ActivityIndicator, TouchableOpacity, SafeAreaView, RefreshControl} from 'react-native'
import { useNavigation, useIsFocused } from '@react-navigation/native';
import CardJewelry from '../components/CardJewelry';
import { getProducts } from '../utils/db';
import ButtonsRadians from '../components/ButtonsRadians';


export default function CrearJoya(){
    const navigation = useNavigation();
    const [fetchedProducts, setFetchedProduct] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga
    const isFocused = useIsFocused(); // Verifica si la pantalla está en foco
    const [refreshing, setRefreshing] = useState(false); //Permite refrescar con interaccion del usuario


  
    const fetchproductos = async () => {
      setLoading(true);
        const jewels = await getProducts();
        setFetchedProduct(jewels);
        setLoading(false);
    }

    useEffect(() => {
      if(isFocused)
        fetchproductos(); // <-- llamar como quieran
    }, [isFocused]);
  
    const onRefresh = useCallback(async () => {
      setRefreshing(true);
      await fetchproductos();
      setRefreshing(false);
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
        <ScrollView 
        refreshControl={
          <RefreshControl refreshing={refreshing}  onRefresh={onRefresh}/>
        }
        >
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
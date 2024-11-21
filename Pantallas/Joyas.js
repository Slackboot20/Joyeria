import { ScrollView, Text, StyleSheet, View, ActivityIndicator, TouchableOpacity, SafeAreaView, RefreshControl } from 'react-native';
import CardJewelry from '../components/CardJewelry';
import { getProducts } from '../utils/db';
import { useNavigation } from '@react-navigation/native';
<<<<<<< HEAD
import React, { useState, useEffect, useCallback} from 'react';
=======
import React, { useState, useEffect, useCallback } from 'react';
>>>>>>> 7483aa44068d6d247fc237573dcd26fb3ee99b74

const Joyas = () => {
    const navigation = useNavigation();
    const [fetchedProducts, setFetchedProduct] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga
    const [refreshing, setRefreshing] = useState(false); // Estado para controlar el refresco manual

    const fetchProducts = async () => {
        setLoading(true);
        const jewels = await getProducts();
        setFetchedProduct(jewels);
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await fetchProducts();
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

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                {fetchedProducts.length === 0 ? (
                    <Text>No hay joyas</Text>
                ) : (
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
                                    peso: jewel.peso,
                                    provedor: jewel.provedor,
                                    imageUrl: jewel.imageUrl, // Asegúrate de que este campo exista en tu base de datos
                                })
                            }
                        >
                            <CardJewelry
                                codigo_Product={jewel.cod_Product}
                                description={jewel.description}
                                material={jewel.material}
                            />
                        </TouchableOpacity>
                    ))
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Joyas;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16, // Márgenes a los lados (izquierda y derecha)
        marginVertical: 40, // Márgenes en la parte superior e inferior
        padding: 10, // Opcional: Espaciado interior para el contenido
        backgroundColor: '#f0f0f0', // Color de fondo opcional
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
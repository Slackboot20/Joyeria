import { ScrollView, Text, StyleSheet, View, TouchableOpacity, SafeAreaView, RefreshControl, Animated } from 'react-native';
import CardJewelry from '../components/CardJewelry';
import { getProducts } from '../utils/db';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useCallback } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Joyas = () => {
    const navigation = useNavigation();
    const [fetchedProducts, setFetchedProduct] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga inicial
    const [refreshing, setRefreshing] = useState(false); // Estado para controlar el refresco manual
    const [rotateAnim] = useState(new Animated.Value(0)); // Valor inicial para la animación de rotación

    // Función para obtener los productos con un retraso simulado
    const fetchProducts = async () => {
        setLoading(true); // Solo se activa al cargar los datos iniciales
        try {
            // Simulando una carga de 3 segundos
            setTimeout(async () => {
                const jewels = await getProducts();
                setFetchedProduct(jewels);
                setLoading(false); // Termina la carga después de 3 segundos
            }, 3000); // Retraso de 3 segundos
        } catch (error) {
            console.error(error);
            setLoading(false); // Termina la carga incluso si ocurre un error
        }
    };

    useEffect(() => {
        fetchProducts(); // Carga inicial
    }, []);

    useEffect(() => {
        // Animación de rotación para el ícono
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            })
        ).start();
    }, [rotateAnim]);

    // Función para manejar el refresco manual
    const onRefresh = useCallback(async () => {
        setRefreshing(true); // Inicia el refresco
        await fetchProducts(); // Vuelve a cargar los productos
        setRefreshing(false); // Termina el refresco
    }, []);

    if (loading) {
        const rotateInterpolate = rotateAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });

        return (
            <View style={styles.loadingContainer}>
                <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
                    {/* Usa un ícono en lugar de una imagen */}
                    <Icon name="gem" size={60} color="black" />
                </Animated.View>
                <Text style={styles.loadingText}>Loading joyas...</Text>
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
                    <View style={styles.noJewelsContainer}>
                        <Text style={styles.noJewelsText}>No hay joyas</Text>
                    </View>
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
                                    imageUrl: jewel.imageUrl,
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
        marginHorizontal: 16,
        marginVertical: 40,
        padding: 10,
        backgroundColor: '#f0f0f0', // Fondo suave
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    noJewelsContainer: {
        flex: 1, // Ocupa toda la pantalla
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center', // Centra el contenido horizontalmente
    },
    noJewelsText: {
        fontSize: 24, // Tamaño grande para el mensaje
        fontWeight: 'bold', // Texto en negrita
        color: '#555', // Color gris oscuro para el texto
        textAlign: 'center', // Asegura que el texto se alinee al centro
        marginBottom: 10, // Espacio debajo del mensaje
    },
    subtext: {
        fontSize: 16, // Tamaño de fuente más pequeño para el subtexto
        color: '#777', // Color gris suave
        textAlign: 'center', // Centra el texto
    },
});

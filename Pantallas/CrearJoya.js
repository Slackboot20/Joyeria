import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, Text, StyleSheet, View, ActivityIndicator, TouchableOpacity, SafeAreaView, RefreshControl, Animated } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import CardJewelry from '../components/CardJewelry';
import { getProducts } from '../utils/db';
import ButtonsRadians from '../components/ButtonsRadians';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function CrearJoya() {
    const navigation = useNavigation();
    const [fetchedProducts, setFetchedProduct] = useState([]);
    const [loading, setLoading] = useState(true); 
    const isFocused = useIsFocused(); 
    const [refreshing, setRefreshing] = useState(false); 
    const [rotateAnim] = useState(new Animated.Value(0)); 

    const fetchproductos = async () => {
        setLoading(true);
        // Simulando un retraso de 3 segundos
        setTimeout(async () => {
            const jewels = await getProducts();
            setFetchedProduct(jewels);
            setLoading(false); 
        }, 1); // Retraso de 3 segundos
    }

    useEffect(() => {
        if (isFocused) fetchproductos(); // Carga los productos cuando la pantalla está en foco
    }, [isFocused]);

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            })
        ).start();
    }, [rotateAnim]);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await fetchproductos();
        setRefreshing(false);
    }, []);

    if (loading) {
        const rotateInterpolate = rotateAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });

        return (
            <View style={styles.loadingContainer}>
                <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
                    <Icon name="gem" size={60} color="black" />
                </Animated.View>
                <Text style={styles.loadingText}>Loading jewels...</Text>
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
                    <Text style={styles.subtext}>Crea una Joya</Text>
                </View>
                ) : (
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
                                material={jewel.material}
                            />
                        </TouchableOpacity>
                    ))
                )}
                <View>
                    <ButtonsRadians 
                        routename="FormJoya"
                        text="Crear Joyas"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

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

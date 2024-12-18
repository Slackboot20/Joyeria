import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, Text, StyleSheet, View, SafeAreaView, RefreshControl, Animated, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import CardJewelry from '../components/CardJewelry';
import { getProducts } from '../utils/db';
import ButtonsRadians from '../components/ButtonsRadians';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function CreateJewel() {
    const navigation = useNavigation();
    const [fetchedProducts, setFetchedProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const isFocused = useIsFocused();
    const [refreshing, setRefreshing] = useState(false);
    const [rotateAnim] = useState(new Animated.Value(0));

    const fetchProductos = async () => {
        setLoading(true);
        setTimeout(async () => {
            const jewels = await getProducts();
            setFetchedProduct(jewels);
            setLoading(false);
        }, 1400); // Cambiado a 1 segundo por razones prácticas
    };

    useEffect(() => {
        if (isFocused) fetchProductos();
    }, [isFocused]);

    const startRotation = () => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            })
        ).start();
    };

    const stopRotation = () => {
        rotateAnim.stopAnimation();
        rotateAnim.setValue(0);
    };

    useEffect(() => {
        if (loading || refreshing) {
            startRotation();
        } else {
            stopRotation();
        }
    }, [loading, refreshing]);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await fetchProductos();
        setRefreshing(false);
    }, []);

    const rotateInterpolate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    if (loading) {
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
                <View style={styles.iconContainer}>
                    {refreshing && (
                        <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
                            <Icon name="gem" size={40} color="black" />
                        </Animated.View>
                    )}
                </View>
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
                                    peso: jewel.peso,
                                    provedor: jewel.provedor,
                                    id: jewel.id_joya,
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
                    <ButtonsRadians routename="FormJoya" text="Crear Joyas" />
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

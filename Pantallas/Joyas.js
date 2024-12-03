import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, Text, StyleSheet, View, TouchableOpacity, SafeAreaView, RefreshControl, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CardJewelry from '../components/CardJewelry';
import { getProducts } from '../utils/db';
import { useNavigation } from '@react-navigation/native';

const Joyas = () => {
    const navigation = useNavigation();
    const [fetchedProducts, setFetchedProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [rotateAnim] = useState(new Animated.Value(0));

    const fetchProducts = async () => {
        setLoading(true);
        try {
            setTimeout(async () => {
                const jewels = await getProducts();
                setFetchedProduct(jewels);
                setLoading(false);
            }, 1400);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

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
        rotateAnim.setValue(0); // Restablece el valor para evitar saltos
    };

    useEffect(() => {
        if (refreshing || loading) {
            startRotation();
        } else {
            stopRotation();
        }
    }, [refreshing, loading]);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await fetchProducts();
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
                <View style={styles.iconContainer}>
                    {refreshing && (
                        <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
                            <Icon name="gem" size={40} color="black" />
                        </Animated.View>
                    )}
                </View>
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
        backgroundColor: '#f0f0f0',
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
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
});
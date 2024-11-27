import { ScrollView, Text, StyleSheet, View, TouchableOpacity, SafeAreaView, RefreshControl, Animated } from 'react-native';
import { getMotion } from '../utils/db';
import CardMotion from '../components/CardMotion';
import React, { useState, useEffect, useCallback } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';  // Para usar el ícono de la gema

const Report = () => {
    const [fetchedMotions, setFetchedMotions] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true); // Estado de carga inicial
    const [rotateAnim] = useState(new Animated.Value(0)); // Valor inicial para la animación de rotación

    const fetchMotions = async () => {
        setLoading(true);
        const motions = await getMotion();
        setFetchedMotions(motions);
        setLoading(false);
    };

    useEffect(() => {
        fetchMotions();
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

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await fetchMotions();
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
                    {/* Usa un ícono en lugar del ActivityIndicator */}
                    <Icon name="gem" size={60} color="black" />
                </Animated.View>
                <Text>Loading motions...</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView 
                refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> 
                } 
            > 
                {fetchedMotions.length === 0 ? (
                    <Text>
                        No hay movimientos
                    </Text>
                ) : (
                    fetchedMotions.map((motion, index) => (
                        <TouchableOpacity
                            key={index}
                    >
                        <CardMotion
                            id_producto={motion.id_producto}
                            info_movimiento={motion.info_movimiento}
                            tipo_movimiento={motion.tipo_movimiento}
                        />
                    
                    </TouchableOpacity>
                ))
            )}

            </ScrollView>
        </SafeAreaView>
    );
};

export default Report;

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
        color: '#0000ff',
    },
});

import { ScrollView, Text, StyleSheet, View, TouchableOpacity, SafeAreaView, RefreshControl, Animated } from 'react-native';
import { getmovements } from '../utils/db';
import CardMovements from '../components/CardMovements';
import React, { useState, useEffect, useCallback } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Report = () => {
    const [fetchedmovements, setFetchedmovements] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [rotateAnim] = useState(new Animated.Value(0));

    const fetchmovements = async () => {
        setLoading(true);
        const movement = await getmovements();
        setFetchedmovements(movement);
        setLoading(false);
    };

    useEffect(() => {
        fetchmovements();
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
        await fetchmovements();
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
                <Text>Loading motions...</Text>
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
        color: 'black',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
});
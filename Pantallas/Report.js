import { ScrollView, Text, StyleSheet, View, ActivityIndicator, TouchableOpacity, SafeAreaView, RefreshControl } from 'react-native';
import { getMotion } from '../utils/db';
import CardMotion from '../components/CardJewelry';
import React, { useState, useEffect, useCallback} from 'react';



const Report = () => {
    const [fetchedMotions, setFetchedMotions] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchMotions = async () => {
        setLoading(true);
        const motions = await getMotion();
        setFetchedMotions(motions);
        setLoading(false);
    };

    useEffect(() => {
        fetchMotions();
    }, []);



    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        await fetchMotions();
        setRefreshing(false);
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading joyas...</Text>
            </View>
        );
    };
  
    return(
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



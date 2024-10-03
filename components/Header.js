import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Joyería Green Facets</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#008000',
        padding: 20,
        alignItems: 'center',
        marginTop: 30,
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Header;

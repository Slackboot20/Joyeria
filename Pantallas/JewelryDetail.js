import React, { useState, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getRestaurantById } from '../utils/db';



const JewelryDetail = ({route, navigation}) => { 

    const { codigo_Product, peso, description, material, precioInicial, precioFinal, provedor } = route.params

    return (
        <View style={styles.container}>
          {/* Restaurant Image */}
    
          {/* Restaurant Name */}
          <Text style={styles.name}>{codigo_Product}</Text>
    
          {/* Category */}
          <Text style={styles.category}>{material}</Text>
    
          {/* Description */}
          <Text style={styles.description}>{description}</Text>
    
          {/* Additional Information */}
          <View style={styles.additionalInfo}>
            <Text style={styles.infoTitle}>Peso:</Text>
            <Text style={styles.infoText}>{peso}</Text>
    
            <Text style={styles.infoTitle}>Precio Inicial:</Text>
            <Text style={styles.infoText}>{precioInicial}</Text>
    
            <Text style={styles.infoTitle}>Precio Final:</Text>
            <Text style={styles.infoText}>{precioFinal}</Text>

            <Text style={styles.infoTitle}>Proveedor:</Text>
            <Text style={styles.infoText}>{provedor}</Text>
          </View>
        </View>
      );
};

export default JewelryDetail;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f4f6f6',
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      marginBottom: 20,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#1abc9c',
      marginBottom: 10,
    },
    starsContainer: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    category: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#e67e22',
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: '#333',
      marginBottom: 20,
    },
    additionalInfo: {
      marginTop: 20,
    },
    infoTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      marginTop: 10,
    },
    infoText: {
      fontSize: 14,
      color: '#555',
      marginBottom: 5,
    },
  });



import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';

const CardJewelry = () => {
  const jewel = [
    {
      codProduct: '01',
      description: 'Anillo de Oro entorchado con una piedra preciosa',
      peso: '10 gramos',
      material: 'Oro',
      precioInicial: '500.000',
      precioFinal: '600.000',
      provedor: 'Ecopetrol',
    },
    {
      codProduct: '02',
      description: 'Anillo de Plata entorchado con una piedra preciosa',
      peso: '20 gramos',
      material: 'Plata',
      precioInicial: '100.000',
      precioFinal: '150.000',
      provedor: 'Ecopetrol',
    },
  ];

  return (
    <View style={styles.container}>
      {jewel.map((item, index) => (
        <Card key={index} style={styles.card}>
          <Card.Title title={`Joya ${item.codProduct}`} subtitle={item.description} />
          <Card.Content>
            <Paragraph>Peso: {item.peso}</Paragraph>
            <Paragraph>Material: {item.material}</Paragraph>
            <Paragraph>Precio Inicial: {item.precioInicial}</Paragraph>
            <Paragraph>Precio Final: {item.precioFinal}</Paragraph>
            <Paragraph>Proveedor: {item.provedor}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    marginBottom: 10,
  },
});

export default CardJewelry;
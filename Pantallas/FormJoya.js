import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { postProduct } from '../utils/db';
import { useNavigation } from '@react-navigation/native';


const FormJoya = () => {
    const navigation = useNavigation();

  const [jewel, setJewel] = useState({
    cod_Product: '',
    peso: '',
    description: '',
    material: '',
    precioInicial: '',
    precioFinal: '',
    provedor: '',
    id: ''
  });

  const handleChange = (name, value) => {
    setJewel({
        ...jewel,
        [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
        const response = await postProduct(jewel);
        console.log('Producto agregado:', response);
        // Aquí puedes realizar acciones adicionales como mostrar una notificación
        navigation.goBack();
    } catch (error) {
        console.error('Error al agregar el producto:', error);
    }
  };
  

  


  return (
        <View style={styles.container}>
            <Text style={styles.label}>Código del Producto:</Text>
            <TextInput
                style={styles.input}
                value={jewel.cod_Product}
                onChangeText={(value) => handleChange('cod_Product', value)}
                placeholder="Código"
            />
            <Text style={styles.label}>Peso:</Text>
            <TextInput
                style={styles.input}
                value={jewel.peso}
                onChangeText={(value) => handleChange('peso', value)}
                placeholder="Peso"
                keyboardType="numeric"
            />
            <Text style={styles.label}>Descripción:</Text>
            <TextInput
                style={styles.input}
                value={jewel.description}
                onChangeText={(value) => handleChange('description', value)}
                placeholder="Descripción"
            />
            <Text style={styles.label}>Material:</Text>
            <TextInput
                style={styles.input}
                value={jewel.material}
                onChangeText={(value) => handleChange('material', value)}
                placeholder="Material"
            />
            <Text style={styles.label}>Precio Inicial:</Text>
            <TextInput
                style={styles.input}
                value={jewel.precioInicial}
                onChangeText={(value) => handleChange('precioInicial', value)}
                placeholder="Precio Inicial"
                keyboardType="decimal-pad"
            />
            <Text style={styles.label}>Precio Final:</Text>
            <TextInput
                style={styles.input}
                value={jewel.precioFinal}
                onChangeText={(value) => handleChange('precioFinal', value)}
                placeholder="Precio Final"
                keyboardType="decimal-pad"
            />
            <Text style={styles.label}>Proveedor:</Text>
            <TextInput
                style={styles.input}
                value={jewel.provedor}
                onChangeText={(value) => handleChange('provedor', value)}
                placeholder="Proveedor"
            />
            <Button title="Agregar Producto" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
});

export default FormJoya;
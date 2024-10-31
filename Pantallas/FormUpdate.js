import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { updateData } from '../utils/db';

const FormUpdate = ({ route }) => {
    const { codigo_Product, peso, description, material, precioInicial, precioFinal, provedor, id } = route.params;

    const [jewel, setJewel] = useState({
        codigo_Product: '',
        peso: '',
        description: '',
        material: '',
        precioInicial: '',
        precioFinal: '',
        provedor: ''
    });

    useEffect(() => {
        // Asigna los valores de route.params al estado
        setJewel({
            code_Product: codigo_Product || '',
            peso: peso || '',
            description: description || '',
            material: material || '',
            precioInicial: precioInicial || '',
            precioFinal: precioFinal || '',
            provedor: provedor || ''
        });
    }, [codigo_Product, peso, description, material, precioInicial, precioFinal, provedor]);

    const handleChange = (name, value) => {
        setJewel({
            ...jewel,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await updateData( jewel, id);
            console.log('Producto actualizado:', response);
            return response.data;
            // Aquí puedes realizar acciones adicionales como mostrar una notificación
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Código del Producto:</Text>
            <TextInput
                style={styles.input}
                value={jewel.codigo_Product}
                onChangeText={(value) => handleChange('codigo_Product', value)}
                placeholder="Código"
                editable={false} // Desactivado si no quieres que el código se modifique
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
            <Button title="Actualizar Producto" onPress={handleSubmit} />
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

export default FormUpdate;
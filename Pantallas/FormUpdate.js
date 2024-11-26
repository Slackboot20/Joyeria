import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importa íconos de Material Icons
import { postMotion, updateData, deleteProduct } from '../utils/db';
import { uploadImageToCloudinary } from '../utils/uploadImageToCloudinary';
import { useNavigation } from '@react-navigation/native';

const FormUpdate = ({ route }) => {
    const navigation = useNavigation();
    const { codigo_Product, peso, description, material, precioInicial, precioFinal, provedor, id, imageUrl } = route.params;

    const [jewel, setJewel] = useState({
        codigo_Product: '',
        peso: '',
        description: '',
        material: '',
        precioInicial: '',
        precioFinal: '',
        provedor: '',
        imageUrl: '', // Campo para la URL de la imagen
    });

    const movent = {
        id_producto: jewel.codigo_Product,
        tipo_movimiento: 'Update',
        info_movimiento: new Date().toISOString(),
    };

    const [newImageUri, setNewImageUri] = useState(null); // Imagen seleccionada localmente

    useEffect(() => {
        setJewel({
            codigo_Product: codigo_Product || '',
            peso: peso || '',
            description: description || '',
            material: material || '',
            precioInicial: precioInicial || '',
            precioFinal: precioFinal || '',
            provedor: provedor || '',
            imageUrl: imageUrl || '', // URL inicial de la imagen
        });
    }, [codigo_Product, peso, description, material, precioInicial, precioFinal, provedor, imageUrl]);

    const handleChange = (name, value) => {
        setJewel({
            ...jewel,
            [name]: value,
        });
    };

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaType: 'photo',
                includeBase64: false,
            });
            if (result.assets && result.assets.length > 0) {
                const selectedImage = result.assets[0];
                setNewImageUri(selectedImage.uri);
                Alert.alert('Imagen seleccionada', 'La imagen será subida al actualizar el producto.');
            }
        } catch (error) {
            Alert.alert('Error', 'Hubo un problema al seleccionar la imagen.');
        }
    };

    const handleSubmit = async () => {
        try {
            let updatedImageUrl = jewel.imageUrl;
            if (newImageUri) {
                updatedImageUrl = await uploadImageToCloudinary(newImageUri);
            }
            const updatedJewel = { ...jewel, imageUrl: updatedImageUrl };
            await updateData(updatedJewel, id);
            await postMotion(movent);
            Alert.alert('Éxito', 'Producto actualizado correctamente.');
            navigation.goBack();
        } catch (error) {
            Alert.alert('Error', 'Hubo un problema al actualizar el producto.');
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
                editable={false}
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

            <Text style = {styles.label}>Imagen: </Text>
            <TouchableOpacity style={styles.imageButton} onPress={selectImage}>
                <Icon name="photo-library" size={20} color="#fff" />
                <Text style={styles.imageButtonText}>Seleccionar Nueva Imagen</Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <Button title="Actualizar Producto" onPress={handleSubmit} color="#4CAF50" />
                <Button title="Eliminar Producto" onPress={deleteProduct} color="red" />
            </View>
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
    imageButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
    },
    imageButtonText: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});

export default FormUpdate;
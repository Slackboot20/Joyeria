import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importa íconos de Material Icons
import { uploadImageToCloudinary } from '../utils/uploadImageToCloudinary';
import { postProduct, postMotion } from '../utils/db';
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
        imageUrl: '', // Campo para la URL de la imagen subida
    });

    const movent = {
        id_producto: jewel.cod_Product,
        tipo_movimiento: 'Add',
        info_movimiento: new Date().toISOString(),
    };

    const [imageUri, setImageUri] = useState(null); // Imagen seleccionada localmente

    useEffect(() => {
        const getPermissions = async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permiso denegado', 'Necesitamos acceso a la galería para seleccionar una imagen.');
            }
        };
        getPermissions();
    }, []);

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
                setImageUri(selectedImage.uri); // Guardar la URI de la imagen seleccionada
                Alert.alert('Imagen seleccionada', 'La imagen será subida al agregar el producto.');
            }
        } catch (error) {
            Alert.alert('Error', 'Hubo un problema al seleccionar la imagen.');
        }
    };

    const handleSubmit = async () => {
        try {
            let imageUrl = jewel.imageUrl;

            if (imageUri) {
                imageUrl = await uploadImageToCloudinary(imageUri);
            }

            const jewelWithImage = { ...jewel, imageUrl };

            await postProduct(jewelWithImage);
            await postMotion(movent);
            Alert.alert('Éxito', 'Producto agregado correctamente.');
            navigation.goBack();
        } catch (error) {
            Alert.alert('Error', 'Hubo un problema al agregar el producto.');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContent}>
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

                <Text style={styles.label}>Imagen de la joya: </Text>
                <TouchableOpacity style={styles.imageButton} onPress={selectImage}>
                    <Icon name="photo-library" size={20} color="#fff" />
                    <Text style={styles.imageButtonText}>Seleccionar Imagen</Text>
                </TouchableOpacity>

                {/* Botón para agregar producto */}
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Agregar Producto</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingVertical: 20,
    },
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
    submitButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default FormJoya;
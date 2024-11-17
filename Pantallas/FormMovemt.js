import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { uploadImageToCloudinary } from '../utils/uploadImageToCloudinary';

export default function FormMovemt() {
  const [imageUri, setImageUri] = useState(null); // Almacena la imagen seleccionada localmente
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null); // Almacena la URL de Cloudinary


  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso denegado', 'Necesitamos acceso a la galería para seleccionar una imagen.');
      }
    };
    getPermissions();
  }, []);


  // Función para seleccionar una imagen desde la galería
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaType: 'photo',
        includeBase64: false,
      });
      if (result.assets && result.assets.length > 0) {
        const selectedImage = result.assets[0];
        console.log(result);
        setImageUri(selectedImage.uri); // Mostrar la imagen seleccionada localmente
        handleImageUpload(selectedImage.uri); // Llamar a la función de subida
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al seleccionar la imagen .');
    }
  };

  // Función para subir la imagen usando tu función personalizada
  const handleImageUpload = async (uri) => {
    try {
      const url = await uploadImageToCloudinary(uri);
      setUploadedImageUrl(url); // Almacenar la URL de la imagen subida
      Alert.alert('Éxito', 'Imagen subida correctamente.');
      console.log('URL de la imagen subida:', url);
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al subir la imagen.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textoPredeterminado}>Formulario de Movimientos</Text>
      <Button title="Seleccionar Imagen" onPress={selectImage} />
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
          resizeMode="contain"
        />
      )}
      {uploadedImageUrl && (
        <Text style={styles.uploadedText}>
          URL subida: {uploadedImageUrl}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'peru',
  },
  textoPredeterminado: {
    fontFamily: 'serif',
    color: 'peru',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  uploadedText: {
    marginTop: 10,
    color: 'green',
    textAlign: 'center',
  },
});

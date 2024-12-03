import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { uploadUserProfileImage, getUserProfile } from '../utils/db';
import { AuthContext } from '../context/auth-context';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const { logout } = useContext(AuthContext); // Usar useContext para obtener logout
    const [profile, setProfile] = useState({ email: '', imageUrl: '' });
    const navigation = useNavigation();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userProfile = await getUserProfile();
                if (userProfile) {
                    setProfile(userProfile);
                }
            } catch (error) {
                console.error('Error al obtener el perfil:', error);
            }
        };
        fetchProfile();
    }, []);

    const handleImagePick = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaType: 'photo',
                includeBase64: false,
            });

            if (result.assets && result.assets.length > 0) {
                const selectedImage = result.assets[0].uri;
                const updatedProfile = await uploadUserProfileImage(selectedImage);
                setProfile(updatedProfile);
            }
        } catch (error) {
            console.error('Error al seleccionar imagen:', error);
        }
    };

    const handleLogout = async () => {
        try {
            logout(); // Aquí usas la función logout que viene del contexto
            Alert.alert('Has cerrado sesión correctamente');
            navigation.navigate('InicializerApp');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            Alert.alert('Error al cerrar sesión', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.email}>{profile.email || 'Correo no disponible'}</Text>
            {profile.imageUrl ? (
                <Image source={{ uri: profile.imageUrl }} style={styles.profileImage} />
            ) : (
                <Text>No hay imagen de perfil</Text>
            )}
            <Button title="Seleccionar Imagen" onPress={handleImagePick} />
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Cerrar sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    email: {
        fontSize: 18,
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    logoutButton: {
        marginTop: 30,
        backgroundColor: '#ff6347',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    logoutText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Profile;

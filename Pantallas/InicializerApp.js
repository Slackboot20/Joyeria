import { useState, useContext } from 'react';
import { View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AuthContext } from '../context/auth-context'; // Importa el contexto de autenticación
import { login, register } from '../utils/auth'; // Importar las funciones de autenticación

export default function InicializerApp({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authCtx = useContext(AuthContext); // Usar el contexto de autenticación


    const [isLogin, setIsLogin] = useState(true);
    const [emailRegister, setEmailRegister] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    

    // Función para manejar el login
    async function handleLogin() {
        console.log('Intentando iniciar sesión con:', email, password);  // Para depuración
        if (!email || !password) {
            Alert.alert('Error', 'Please enter both email and password', [{ text: 'OK' }]);
            return;
        }
        try {
            const token = await login(email, password);
            authCtx.login(token);
            navigation.navigate('Tabs');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            Alert.alert('Error', 'Login failed. Please try again.');
        }
    };

    // Función para manejar el registro
    async function handleRegister() {
        if (!emailRegister || !registerPassword) {
            Alert.alert('Error', 'Please enter both email and password', [{ text: 'OK' }]);
            return;
        }

        try {
            const token = await register(emailRegister, registerPassword); // Llamamos a la función de registro
            authCtx.register(token); // Si el registro tiene éxito, se guarda el token en el contexto
            navigation.navigate('Tabs'); // Navegar a la pantalla principal
        } catch (error) {
            Alert.alert('Error', 'Registration failed. Please try again.');
        }
    }

    return (
        <ImageBackground
            source={require('../assets/opcion4.jpeg')}
            style={styles.background}
            imageStyle={styles.backgroundimage}
        >
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    {isLogin ? (
                        <>
                            <Text style={styles.title}>Iniciar Sesión</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Nombre de Usuario"
                                value={email}
                                onChangeText={setEmail}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Contraseña"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                                <Text style={styles.buttonText}>Iniciar Sesión</Text>
                            </TouchableOpacity>
                            <View style={styles.textContainer}>
                                <Text> No estoy registrado </Text>
                                <TouchableOpacity onPress={() => setIsLogin(false)}>
                                    <Text style={styles.linkText}>Regístrate aquí</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    ) : (
                        <>
                            <Text style={styles.title}>Registro</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Correo Electronico"
                                value={emailRegister}
                                onChangeText={setEmailRegister}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Contraseña"
                                secureTextEntry
                                value={registerPassword}
                                onChangeText={setRegisterPassword}
                            />
                            <View style={styles.textContainer}>
                                <TouchableOpacity style={styles.backButton} onPress={() => setIsLogin(true)}>
                                    <Text style={styles.buttonText}>Volver</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                                    <Text style={styles.buttonText}>Guardar</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'peachpuff'
    },
    backgroundimage: {
        opacity: 0.5,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#127a1b',
    },
    buttonCustoms: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        backgroundColor: '#FF0000', // Color rojo para el botón
        padding: 15,
        borderRadius: 5,
        marginTop: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    formContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    linkText: {
        color: '#1E90FF',
        fontWeight: 'bold',
    },
});

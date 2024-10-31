import { useState, useContext } from 'react';
import { View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import Buttons from '../components/Buttons';
import style from '../Styles/style'
import { login } from '../utils/auth'; // Importar la utilidad de autenticación
import { AuthContext } from '../context/auth-context'; // importamos el contexto de autenticacion
import { register } from '../utils/auth';


export default function InicializerApp({ navigation }) {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const authCtx = useContext(AuthContext); // Usar el contexto de autenticación. con esta linea carga el contexto de autenticacion

    const [isLogin, setIsLogin] = useState(true);
    const [emailRegister, setemailRegister] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    async function handleLogin  ()  {
        if (!email || !password) {
            // si no hay email o password mostramos un alerta
            Alert.alert('Error', 'Please enter both email and password', [{ text: 'OK' }]);
            return;
          }
      
          try {
            const token = await login(email, password); // llamamos la utilidad de autenticacion
            // si esta autenticacion tiene exito devuelve un token. El que devuelve esto es firebase
            //el cual le pasamos al contexto
      
            authCtx.login(token); // el token se pasa al contexto de autenticacion y lo cargamos con la funcion de login
            // (por dentro de un setAuthToken(token))
      
            navigation.navigate('Tabs'); //si todo sale bien navegamos a la pantalla de MainTabs
          } catch (error) {
            Alert.alert('Error', 'Login failed. Please try again.');
          }
    };

    async function handleRegister  ()  {
        if (!emailRegister || !registerPassword) {
            // si no hay email o password mostramos un alerta
            Alert.alert('Error', 'Please enter both email and password', [{ text: 'OK' }]);
            return;
          }
      
          try {
            const token = await register(emailRegister, registerPassword); // llamamos la utilidad de autenticacion
            // si esta autenticacion tiene exito devuelve un token. El que devuelve esto es firebase
            //el cual le pasamos al contexto
      
            authCtx.register(token); // el token se pasa al contexto de autenticacion y lo cargamos con la funcion de login
            // (por dentro de un setAuthToken(token))
      
            navigation.navigate('InicializerApp'); //si todo sale bien navegamos a la pantalla de MainTabs
          } catch (error) {
            console.error(error)
            Alert.alert('Error', 'Login failed. Please try again.');
          }

    };

    return (
        <ImageBackground
            source={require('../assets/opcion4.jpeg')}
            title={styles.title}
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
                                onChangeText={setemail}
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
                                <Text>No estoy registrado </Text>
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
                                onChangeText={setemailRegister}
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
    )
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

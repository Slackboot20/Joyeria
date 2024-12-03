import { Alert } from "react-native";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";  // Asegúrate de que 'auth' esté bien configurado en firebase.js

// Función común para la autenticación (login o registro)
const authenticate = async (mode, email, password) => {
  try {
    // La instancia de auth ya está definida, no necesitas obtenerla de nuevo
    const authInstance = getAuth();  // Se obtiene la instancia de autenticación sin necesidad de pasarle 'auth'

    let userCredential;
    if (mode === 'signUp') {
      // Registro con Firebase
      userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
    } else {
      // Login con Firebase
      userCredential = await signInWithEmailAndPassword(authInstance, email, password);
    }

    console.log("userCredential:", userCredential);  // Depuración: ver si se obtiene el userCredential correctamente

    if (userCredential && userCredential.user) {
      const user = userCredential.user;
      const token = await user.getIdToken(); // Obtener el ID Token de Firebase
      return token; // Regresamos el token de autenticación
    } else {
      throw new Error("Error al obtener las credenciales del usuario");
    }
  } catch (error) {
    console.error("Error en autenticación:", error);
    Alert.alert("Error de Autenticación", "Ocurrió un error. Intenta nuevamente.");
    throw error;  // Propagar el error
  }
};

// Función de logout
export async function logout() {
  try {
    const authInstance = getAuth();  // Se obtiene la instancia de autenticación sin necesidad de pasarle 'auth'
    await signOut(authInstance); // Cierra la sesión en Firebase
  } catch (error) {
    console.error('Error al cerrar sesión en Firebase:', error);
    throw new Error('Error al cerrar sesión');
  }
}

// Función de login
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;  // Devuelve el usuario autenticado
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw new Error("Error al iniciar sesión");
  }
};

// Función de registro
export const register = async (email, password, setAuthToken) => {
  const token = await authenticate('signUp', email, password);
  if (token) {
    setAuthToken(token);  // Establecer el token en el contexto
  }
};

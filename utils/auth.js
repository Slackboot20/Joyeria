import axios from "axios";
import { Alert } from "react-native";

const apiKey = 'AIzaSyD6mgYPdQMjcN6FmGJTLrGVRf3SD1f2LfM'; 


async function autenticateregister(mode, email, password){
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

  try {
    const response = await axios.post(url, {
      email: email,
      password: password,
      returnSecureToken: true,  // Ensure we get back a token
    });
    if(response.status === 200){
        const token = response.data.idToken;  // extraemos el token de la respuesta
            return token; 
    } else {
        Alert.alert("Login Failed", "Invalid email or password.");
    }
  } catch (error) {
    // Si hay un error mostramos una alerta diferente. eso digamos pasaria si el apiKey es incorrecto o si firebase esta caido
    Alert.alert("Login Error", "An error occurred. Please try again.");
    console.log(error);
  } finally {
    //setIsLoading(false);  // esto es para que se quite el loading en caso de que lo quieran implementar luego
  }
}

// ya que puede ser que se necesite en otros lugares, se crea una funcion que se pueda reutilizar
// en todas partes del codigo
// por ejemplo si quieren hacer la parte de registro, se puede reutilizar esta funcion
//se crea un signup e inmediateamente se reutiliza el authenticate para registrarlo y logearlo
async function authenticate(mode, email, password) {
    // (si quieren aprender mas sobre de donde me saque esto busquen firebase rest api en google)

    // Esta url es la que se necesita para hacer el login
    // esta url es la misma para todos ustedes
    // lo que puede cambiar es el apiKey y la parte de signInWithPassword (pero eso luego. ignoren eso por ahora)
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
    try {
        // Enviamos una peticion POST a la url de arriba con la ayuda de la libreria axios
        // axios.post(url, {email: email, password: password, returnSecureToken: true})
        // el returnSecureToken es para que nos devuelva un token
        //siempre que se haga un login, se debe de poner returnSecureToken: true
        const response = await axios.post(url, {
          email: email,
          password: password,
          returnSecureToken: true,  // Ensure we get back a token
        });
        if (response.status === 200) { // 200 es el codigo de que todo salio bien. basicamente si el login tiene exito ese va a ser el codigo
          const token = response.data.idToken;  // extraemos el token de la respuesta
          return token; // devolvemos el token
        } else {
            // si falla el login mostramos una alerta. esto es si el email o password son incorrectos
          Alert.alert("Login Failed", "Invalid email or password.");
        }
      } catch (error) {
        // Si hay un error mostramos una alerta diferente. eso digamos pasaria si el apiKey es incorrecto o si firebase esta caido
        Alert.alert("Login Error", "An error occurred. Please try again.");
        console.log("error");
      } finally {
        //setIsLoading(false);  // esto es para que se quite el loading en caso de que lo quieran implementar luego
      }
}
export async function login(email, password) {
    // llamamos la funcion authenticate con el modo de login y los datos del email y password
    // como mencione anteriormente, podemos reutilizar esa funcion de autenticate en otros lugares
    // por ejemplo en el registro

    // al login enviamos el email y el password
    // la parte de signInWithPassword pueden ignorarla por ahora. pero si les interesa saber digamos podriamos tener diferentes modos de autenticacion
    return authenticate('signInWithPassword', email, password);
}


export async function register (email, password){
  //Se llama a la funcion autenticateregister con el metodo register con email y paswaord en donde se va a crear el usuario
  return autenticateregister(`signUp`, email, password);
}


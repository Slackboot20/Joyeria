import { createContext, useState } from "react";

// Creamos un contexto de autenticación. estos son los parametros recomendados para el contexto
// pero pueden usar los que quieran
// token: '', // el token que se obtiene al hacer login
// isLoggedIn: false, // si esta logeado o no
// login: async () => {}, // funcion para hacer login
// logout: () => {}, // funcion para hacer logout
export const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: async () => {},
  logout: () => {},
}); 
function AuthContextProvider({ children }){
  const [authToken, setAuthToken] = useState(); // Estado para almacenar el token de autenticación

  // Función para hacer login
  async function login(token){
    setAuthToken(token);
  };
    

  // Función para hacer logout (no implementada)
  function logout(){
    setAuthToken(null);
  }

  // Valores del contexto. estos son los valores que se van a pasar a los componentes
  // basicamente inicializamos el contexto con los valores que queremos que tenga
  const value = {
    token: authToken, //el set que hemos hablado antes
    isLoggedIn: !!authToken, // el !! es para convertir el token a un booleano. basicamente es un if existe el token true, sino false
    login: login, // la funcion de login
    logout: logout, // la funcion de logout
  };


  return (
    // Pasamos el valor del contexto a los componentes hijos
    // fijense que AuthContext.Provider es el contexto que hemos creado
    // a diferencia de los que hemos este componente tiene 2 cosas nuevas
    // .Provider que es el que provee el contexto
    // y el {children} que es el contenido que se va a renderizar
    // en este caso el contenido que se va a renderizar es el AppNavigator (en otras palabras. simplemente recuerden que para que todos puedas usar el contexto se pone hasta afuera de la app)
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
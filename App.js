import React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InicializerApp from './Pantallas/InicializerApp';
import TabsNavigations from './navigations/TabsNavigations';
import FormJoya from './Pantallas/FormJoya';
import FormMovemt from './Pantallas/FormMovemt';
import { AuthContext } from './context/auth-context';
import AuthContextProvider from "./context/auth-context";
import JewelryDetail from './Pantallas/JewelryDetail';
import FormUpdate from './Pantallas/FormUpdate';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const authCtx = useContext(AuthContext);
  return (
      <Stack.Navigator initialRouteName={authCtx.isLoggedIn ? "Tabs" : "InicializerApp"}>
        <Stack.Screen
          name="InicializerApp"
          component={InicializerApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={TabsNavigations}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FormJoya"
          component={FormJoya}
          options={{
            title: 'Volver', // Cambia el texto del encabezado
            headerTintColor: '#FFFFFF', // Cambia el color del texto del header
            headerStyle: { backgroundColor: 'peru' }, // Cambia el color de fondo del header
          }}
        />
        <Stack.Screen
          name="FormMovemt"
          component={FormMovemt}
          options={{
            title: 'Volver', // Cambia el texto del encabezado
            headerTintColor: '#FFFFFF', // Cambia el color del texto del header
            headerStyle: { backgroundColor: 'peru' }, // Cambia el color de fondo del header
          }}
        />
        <Stack.Screen
        name="JewelryDetail"
        component={JewelryDetail}
        options={{
          title: 'Volver', // Cambia el texto del encabezado
          headerTintColor: '#FFFFFF', // Cambia el color del texto del header
          headerStyle: {backgroundColor: 'peru'}
        }}
        />
        <Stack.Screen
        name="FormUpdate"
        component={FormUpdate}
        options={{
          title: 'Volver', // Cambia el texto del encabezado
          headerTintColor: '#FFFFFF', // Cambia el color del texto del header
          headerStyle: {backgroundColor: 'peru'} 
        }}
        />
      </Stack.Navigator>
  );
};

 const App = () => {
  return (
    // Aquí se envuelve la navegación en el contexto de autenticación
    // lo separe en dos componentes para que se vea mas ordenado
    // pero pueden hacerlo en uno solo
    // el navigationContainer es el que esta primero en este archivo
    <AuthContextProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthContextProvider>
  );
}

export default App;
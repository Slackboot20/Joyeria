import  React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InicializerApp from './Pantallas/InicializerApp';
import TabsNavigations from './navigations/TabsNavigations';
import FormJoya from './Pantallas/FormJoya';
import FormMovemt from './Pantallas/FormMovemt';


const Stack = createStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="InicializerApp">
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
        </Stack.Navigator>
      </NavigationContainer>
  );
}
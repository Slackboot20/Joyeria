import  React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InicializerApp from './Pantallas/InicializerApp';
import TabsNavigations from './navigations/TabsNavigations';
import FormJoya from './Pantallas/FormJoya';
import FormMovemt from './Pantallas/FormMovemt';
import Header from './components/Header';


const Stack = createStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Header/>
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
          />
          <Stack.Screen
            name="FormMovemt"
            component={FormMovemt}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
import  React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InicializerApp from './Pantallas/InicalizerApp';
import { View } from 'react-native';
import TabsNavigations from './navigations/TabsNavigations';
import FormJoya from './Pantallas/FormJoya';
import FormMovemt from './Pantallas/FormMovemt';


const Stack = createStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="InicializerApp">
          <Stack.Screen
            name="InicalizerApp" 
            component={InicializerApp}
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
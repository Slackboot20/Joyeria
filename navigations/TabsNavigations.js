import React from 'react';
import { View } from 'react-native'; // Importa View para envolver el Header y el Tab.Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Joyas from '../Pantallas/Joyas';
import CrearJoya from '../Pantallas/CrearJoya';
import Profile from '../Pantallas/Profile';
import Report from '../Pantallas/Report';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabsNavigations = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Perfil') {
              iconName = focused ? 'person' : 'person';
            } else if (route.name === 'Joyas') {
              iconName = focused ? 'diamond' : 'diamond';
            } else if (route.name === 'Movimiento') {
              iconName = focused ? 'document' : 'document';
            } else if (route.name === 'Crear Joya') {
              iconName = focused ? 'add-circle' : 'add-circle';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'peru',
          tabBarInactiveTintColor: '#000000',

          tabBarStyle: {
            backgroundColor: 'white',  // Light beige for tab bar background
            borderTopColor: '#e67e22',  // Orange for tab bar border
          },
        })}
      >
        <Tab.Screen name="Joyas" component={Joyas} options={{ headerShown: false }} />
        <Tab.Screen name="Crear Joya" component={CrearJoya} options={{ headerShown: false }}/>
        <Tab.Screen name="Movimiento" component={Report} options={{ headerShown: false }}/>
        <Tab.Screen name="Perfil" component={Profile} options={{ headerShown: false }} />
      </Tab.Navigator>
    </View>
  );
};

export default TabsNavigations;

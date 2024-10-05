import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Joyas from '../Pantallas/Joyas';
import CrearJoya from '../Pantallas/CrearJoya';
import Profile from '../Pantallas/Profile';
import Report from '../Pantallas/Report';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const TabsNavigations = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Joyas') {
            iconName = focused ? 'diamond' : 'diamond-outline';
          } else if (route.name === 'Movimiento') {
            iconName = focused ? 'document' : 'document-outline';
          } else if (route.name === 'Crear Joya') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'black',

        tabBarStyle: {
          paddingBottom: 20,
          paddingTop: 15,
          height: 85,
        },
        tabBarItemStyle: {
          marginHorizontal: 10,
        },
        tabBarIconStyle: {
          marginTop: -5,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Joyas" component={Joyas} />
      <Tab.Screen name="Crear Joya" component={CrearJoya} />
      <Tab.Screen name="Movimiento" component={Report} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
};
export default TabsNavigations;

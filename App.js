import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import profile from './Pantallas/profile';
import joyas from './Pantallas/joyas';
import report from './Pantallas/report';
import noseque from './Pantallas/noseque';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'perfil') {
              iconName = focused ? 'person' : 'person-outline';  // Íconos para Imágenes
            } else if (route.name === 'joyas') {
              iconName = focused ? 'diamond' : 'diamond-outline';  // Íconos para Cuestionario
            } else if (route.name === 'report') {
              iconName = focused ? 'document' : 'document-outline';  // Íconos para Opciones
            } else if (route.name === 'noseque') {
              iconName = focused ? 'help' : 'help-outline'
            }

            return <Icon name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'red',  // Color activo
          tabBarInactiveTintColor: 'black',  // Color inactivo

          tabBarStyle: {
            paddingBottom: 10, // Espaciado inferior de la barra
            paddingTop: 10,    // Espaciado superior de la barra
            height: 60,        // Altura de la barra de pestañas
          },
          tabBarItemStyle: {
            marginHorizontal: 10, // Espaciado horizontal entre los íconos de las pestañas
          },
        })}
      >
       <Tab.Screen name = "joyas" component={joyas}/>
       <Tab.Screen name = "noseque" component={noseque}/>
       <Tab.Screen name = "report" component={report}/>
       <Tab.Screen name = "perfil" component={profile}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import profile from './pantallas/profile';
import joyas from './pantallas/joyas';
import report from './pantallas/report';
import noseque from './pantallas/noseque';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'perfil') {
              iconName = focused ? 'person' : 'person-outline';  
            } else if (route.name === 'joyas') {
              iconName = focused ? 'diamond' : 'diamond-outline';  
            } else if (route.name === 'report') {
              iconName = focused ? 'document' : 'document-outline';  
            } else if (route.name === 'noseque') {
              iconName = focused ? 'help' : 'help-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'red',  
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
        <Tab.Screen name="joyas" component={joyas} />
        <Tab.Screen name="noseque" component={noseque} />
        <Tab.Screen name="report" component={report} />
        <Tab.Screen name="perfil" component={profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
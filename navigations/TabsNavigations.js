import React, { useRef } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Joyas from '../Pantallas/Joyas';
import CrearJoya from '../Pantallas/CrearJoya';
import Profile from '../Pantallas/Profile';
import Report from '../Pantallas/Report';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabsNavigations = () => {
  // Animated values to track the focused state of each tab
  const animationValues = {
    Joyas: useRef(new Animated.Value(0)).current,
    'Crear Joya': useRef(new Animated.Value(0)).current,
    Movimiento: useRef(new Animated.Value(0)).current,
    Perfil: useRef(new Animated.Value(0)).current,
  };

  const animateTab = (routeName, focused) => {
    Animated.spring(animationValues[routeName], {
      toValue: focused ? 1 : 0,
      useNativeDriver: true, // Compatible con transform
    }).start();
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Perfil') {
            iconName = 'person';
          } else if (route.name === 'Joyas') {
            iconName = 'diamond';
          } else if (route.name === 'Movimiento') {
            iconName = 'document';
          } else if (route.name === 'Crear Joya') {
            iconName = 'add-circle';
          }

          // Scale animation based on focus
          const scale = animationValues[route.name].interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1.2], // Normal to slightly larger
          });

          return (
            <Animated.View style={{ transform: [{ scale }] }}>
              <Icon name={iconName} size={24} color={color} />
            </Animated.View>
          );
        },
        tabBarLabel: ({ focused }) => {
          // Scale animation for the label
          const scale = animationValues[route.name].interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1.1], // Smaller to slightly larger text scale
          });

          return (
            <Animated.Text
              style={[
                styles.tabLabel,
                { color: focused ? 'peru' : '#000000', transform: [{ scale }] },
              ]}
            >
              {route.name}
            </Animated.Text>
          );
        },
        tabBarActiveTintColor: 'peru',
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: '#e67e22',
        },
      })}
      // Listen to navigation state changes to trigger animations
      screenListeners={({ route }) => ({
        focus: () => animateTab(route.name, true),
        blur: () => animateTab(route.name, false),
      })}
    >
      <Tab.Screen name="Joyas" component={Joyas} options={{ headerShown: false }} />
      <Tab.Screen name="Crear Joya" component={CrearJoya} options={{ headerShown: false }} />
      <Tab.Screen name="Movimiento" component={Report} options={{ headerShown: false }} />
      <Tab.Screen name="Perfil" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default TabsNavigations;

const styles = StyleSheet.create({
  tabLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
import React, { useRef } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Jewel from '../Pantallas/Jewel';
import CreateJewel from '../Pantallas/CreateJewel';
import Profile from '../Pantallas/Profile';
import Report from '../Pantallas/Report';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabsNavigations = () => {
  // Animated values to track the focused state of each tab
  const animationValues = {
    Jewel: useRef(new Animated.Value(0)).current,
    'Crear Joya': useRef(new Animated.Value(0)).current,
    Movimiento: useRef(new Animated.Value(0)).current,
    Perfil: useRef(new Animated.Value(0)).current,
  };

  const animateTab = (routeName, focused) => {
    // Ensure the animation value exists before calling animate
    const animationValue = animationValues[routeName];
    if (animationValue) {
      Animated.spring(animationValue, {
        toValue: focused ? 1 : 0,
        useNativeDriver: true, // Compatible con transform
      }).start();
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Jewel') {
            iconName = 'diamond';
          } else if (route.name === 'Movement') {
            iconName = 'document';
          } else if (route.name === 'Create Jewel') {
            iconName = 'add-circle';
          }

          // Ensure animation value exists and use interpolate safely
          const animationValue = animationValues[route.name];
          const scale = animationValue
            ? animationValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.2], // Normal to slightly larger
              })
            : 1; // Fallback value if animationValue is undefined

          return (
            <Animated.View style={{ transform: [{ scale }] }}>
              <Icon name={iconName} size={24} color={color} />
            </Animated.View>
          );
        },
        tabBarLabel: ({ focused }) => {
          // Ensure animation value exists and use interpolate safely for label scaling
          const animationValue = animationValues[route.name];
          const scale = animationValue
            ? animationValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.1], // Smaller to slightly larger text scale
              })
            : 1; // Fallback value if animationValue is undefined

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
      <Tab.Screen name="Jewel" component={Jewel} options={{ headerShown: false }} />
      <Tab.Screen name="Create Jewel" component={CreateJewel} options={{ headerShown: false }} />
      <Tab.Screen name="Movement" component={Report} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
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

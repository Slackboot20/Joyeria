import React from 'react';
import { SafeAreaView, ImageBackground, StyleSheet} from 'react-native'; // Importa View para envolver el Header y el Tab.Navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Joyas from '../Pantallas/Joyas';
import CrearJoya from '../Pantallas/CrearJoya';
import Profile from '../Pantallas/Profile';
import Report from '../Pantallas/Report';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabsNavigations = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground 
        source={require('../assets/opcion1.jpeg')} // Ruta de la imagen de fondo
        image={styles.backgroundImage}
        style={styles.background}       // Estilos para la imagen de fondo
      >
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
              paddingBottom: 20,
              paddingTop: 15,
              height: 85,
            },
            tabBarItemStyle: {
              marginHorizontal: 20,
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
      </ImageBackground>
    </SafeAreaView>  
  );
};


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,               // Asegura que la imagen cubra toda la pantalla
    resizeMode: 'cover',   // Ajusta la imagen para cubrir sin distorsionarse
  },
  background:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    //backgroundColor: 'peachpuff'
  },
});
export default TabsNavigations;

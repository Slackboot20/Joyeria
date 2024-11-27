import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const CardMotion = ({id_producto, info_movimiento, tipo_movimiento}) => {
  return ( 
    <SafeAreaView>
      <View style={styles.card}>

      {/* Movimiento Info */}
        <View style={styles.infoContainer}>
          <Text >{id_producto}</Text>

          {/* Description */}
          <Text style={styles.description}>{info_movimiento}</Text>

          {/* Movimiento Category */}
          <Text style={styles.category}>{tipo_movimiento}</Text>
      </View>
    </View>
    </SafeAreaView>
);
};



const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,  // Adds shadow on Android
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    padding: 15,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  }, 
  category: {
    fontSize: 12,
    color: '#1abc9c',  // Teal for category
    fontWeight: 'bold',
  },
});

export default CardMotion;
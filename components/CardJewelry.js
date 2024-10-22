import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import globalStyles from '../styles/globalStyles';

const CardJewelry = ({description}) => {
  return (
    <View style={styles.card}>
        <Text style={styles.name}>{description}</Text>
        <Text style={styles.name}>{description}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 170,  // Smaller card width
    marginRight: 15,  // Adds space between cards in horizontal scroll
    backgroundColor: 'peachpuff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,  // Adds shadow on Android
    marginBottom: 10,

  },
  container: {
    padding: 16,
  },
  name: {
    padding: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default CardJewelry;
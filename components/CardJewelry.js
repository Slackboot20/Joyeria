import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

const CardJewelry = ({codigo_Product, description, material}) => {

  return ( 
    <SafeAreaView>
        <View style={styles.card}>
      {/* Image at the top */}
      {/* <Image source={image} style={styles.image} /> */}

      {/* Restaurant Info */}
      <View style={styles.infoContainer}>
        <Text >{codigo_Product}</Text>

        {/* Description */}
        <Text style={styles.description}>{description}</Text>

        {/* Restaurant Category */}
        <Text style={styles.category}>{material}</Text>
      </View>
    </View>
    </SafeAreaView>
    // <View>
    //   <Card style={styles.card}>
    //       <Card.Title  />
    //       <Card.Content>
    //         <Paragraph>Codigo Producto: {cod_Product}</Paragraph>
    //         <Paragraph>Descripcion Joya: {description}</Paragraph>
    //         <Paragraph>Material: {material}</Paragraph>
    //       </Card.Content>
    //     </Card>
    // </View>
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

export default CardJewelry;
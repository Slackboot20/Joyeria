// Importamos axios
const axios = require('axios');

// definimos la data que queremos subir a firebase
// si quieren cambiar la data o cambiar campos lo puedenhacer facilmente
const jewel = [
    {
        id_joya: 1,
        cod_Product: '01',
        description: 'Anillo de Oro entorchado con una piedra preciosa',
        peso: '10 gramos',
        material: 'Oro',
        precioInicial: '500.000',
        precioFinal: '600.000',
        provedor: 'Ecopetrol',
        image: 'https://res.cloudinary.com/dwwrhbr8w/image/upload/v1731905042/o8k9f11hdhrqufy3cwxt.jpg'
    }
];

const movimiento = [
  {
    id_producto : 0,
    tipo_movimiento : 'add',
    info_movimiento: new Date().toISOString()
  }
];


// Add more restaurant objects as needed
// este metodo se encarga de subir la data a firebase
const uploadDataToFirebase = async () => {
  try {
    // hacemos un put a la url de firebase con la data que queremos subir
    // la data se sube en formato JSON
    // esa url esta cmpuesta por la url de la base de datos
    // y el nombre del archivo donde se va a guardar la data
    const response = await axios.put(
      'https://jeweler-a97c3-default-rtdb.firebaseio.com/motion.json',
      movimiento
    );
    console.log('Data subida de manera exitosa 1:', response.data);
  } catch (error) {
    console.error('Error subiendo la data', error);
  }
};

// Llamamos el metodo para subir la data
uploadDataToFirebase();
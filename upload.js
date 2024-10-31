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
        provedor: 'Ecopetrol'
    },
    {
        id_joya: 2,
        cod_Product: '02',
        description: 'Anillo de Plata entorchado con una piedra preciosa',
        peso: '20 gramos',
        material: 'Plata',
        precioInicial: '100.000',
        precioFinal: '150.000',
        provedor: 'Ecopetrol'
    },
    {
      id_joya: 32,
      cod_Product: '03',
      description: 'Topos con esmeralda',
      peso: '15 gramos',
      material: 'Oro',
      precioInicial: '500.000',
      precioFinal: '600.000',
      provedor: 'Ecopetrol'
    },
    {
      id_joya: 56,
      cod_Product: '04',
      description: 'Cadeba con peepita de oro',
      peso: '15 gramos',
      material: 'OroPlata',
      precioInicial: '500.000',
      precioFinal: '600.000',
      provedor: 'Ecopetrol'
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
      'https://joyeria-5db71-default-rtdb.firebaseio.com/jewel.json',
      jewel
    );
    console.log('Data subida de manera exitosa:', response.data);
  } catch (error) {
    console.error('Error subiendo la data', error);
  }
};

// Llamamos el metodo para subir la data
uploadDataToFirebase();
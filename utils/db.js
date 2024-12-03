// db.js
import { Alert } from 'react-native';
import axios from 'axios';
import { auth } from './firebase'; // Importar auth desde firebase.js
import { uploadImageToCloudinary } from './uploadImageToCloudinary';


const BACKEND_URL = 'https://jeweler-a97c3-default-rtdb.firebaseio.com/';

const uploadUserProfileImage = async (imageUri) => {
  try {
    // Obtiene usuario autenticado
    const user = auth.currentUser;
    if (!user) {
      throw new Error('No hay usuario autenticado.');
    }
    const { uid, email } = user;

    // Subir la imagen a Cloudinary
    const imageUrl = await uploadImageToCloudinary(imageUri);

    // Guarda imagen y correo en Realtime Database
    const userRef = `${BACKEND_URL}users/${uid}.json`;

    await axios.patch(userRef, {
      email,
      imageUrl,
    });
    Alert.alert('Imagen de perfil actualizada');
    return { email, imageUrl };
  } catch (error) {
    console.error('Error al subir imagen de perfil:', error);
    Alert.alert('Error', 'Hubo un problema al actualizar la imagen.');
  }
};

const getUserProfile = async () => {
    try {
      const user = auth.currentUser; // Obtén el usuario actual
      if (!user) {
        throw new Error('No hay usuario autenticado.'); // Si no hay usuario, lanza un error
      }
  
      const { uid } = user;
      const userRef = `${BACKEND_URL}users/${uid}.json`;
      const response = await axios.get(userRef);
  
      if (!response.data) {
        throw new Error('No se encontró el perfil del usuario.');
      }
  
      const { email, imageUrl } = response.data;
      return { email, imageUrl };
    } catch (error) {
      console.error('Error al obtener perfil del usuario:', error.message);
    }
  };
  

const postmovements = async (newmovements) => {
  try {
    const response = await axios.post(`${BACKEND_URL}movements.json`, newmovements);
    console.log('Create movements', response.data);
    return response.data;
  } catch (error) {
    console.log('Error postmovements', error);
  }
};

const getmovements = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/movements.json`);
    const movements = [];

    if (!response.data) {
      console.error('There are no movements');
      return movements;
    }

    for (const key in response.data) {
      const movement = {
        id: key,
        id_producto: response.data[key]?.id_producto || null,
        tipo_movimiento: response.data[key]?.tipo_movimiento || null,
        info_movimiento: response.data[key]?.info_movimiento || null,
      };
      movements.push(movement);
    }

    console.log('Searching movements');
    return movements;
  } catch (error) {
    console.error('Error fetching movements:', error.message);
    return [];
  }
};

const getProducts = async () => {
  const response = await axios.get(`${BACKEND_URL}` + 'jewel.json');

  const jewels = [];

  for (const key in response.data) {
    const jewel = {
      id_joya: key,
      cod_Product: response.data[key].cod_Product,
      peso: response.data[key].peso,
      description: response.data[key].description,
      material: response.data[key].material,
      precioInicial: response.data[key].precioInicial,
      precioFinal: response.data[key].precioFinal,
      provedor: response.data[key].provedor,
      imageUrl: response.data[key].imageUrl,
    };
    jewels.push(jewel);
  }
  console.log('Searching Products');
  return jewels;
};

const getProductById = async (id) => {
  const response = await axios.get(`${BACKEND_URL}` + `/jewels/${id}.json`);

  const jewel = {
    id_joya: id,
    codigoProduct: response.data.codigoProduct,
    peso: response.data.peso,
    description: response.data.description,
    material: response.data.material,
    precioInicial: response.data.precioInicial,
    precioFinal: response.data.precioFinal,
    provedor: response.data.provedor,
  };

  return jewel;
};

const postProduct = async (newJewel) => {
  try {
    const response = await axios.post(`${BACKEND_URL}` + `/jewel.json`, newJewel);
    console.log('Producto agregado:', response.data);
    Alert.alert('Agregar Producto', '¿Quiere agregar este producto?', [
      {
        text: 'Agregar',
        onPress: () => console.log('Agregado'),
        style: 'cancel',
      },
    ]);
    return response.data;  // Esto devuelve el ID generado por Firebase
  } catch (error) {
    console.error('Error al agregar el producto:', error);
  }
};

const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}/jewel/${id}.json`);
    console.log('Producto eliminado:', response.data);
    return response;
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
  }
};

const updateData = async (data, id) => {
  try {
    const url = `${BACKEND_URL}` + `jewel/${id}.json`;
    const res = await axios.patch(url, data);
    return res.data;
  } catch (error) {
    console.error('Error al modificar producto', error);
    throw error;
  }
};

export { getProducts, getProductById, postProduct, updateData, postmovements, deleteProduct, getmovements, getUserProfile, uploadUserProfileImage };

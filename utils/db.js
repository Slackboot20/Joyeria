// Import Axios
import { Alert } from 'react-native';
import axios from 'axios';

BACKEND_URL = 'https://joyeria-5db71-default-rtdb.firebaseio.com/';

const postMotion = async (newmotion) => {
    try {
        const response = await axios.post(`${BACKEND_URL}motion.json`, newmotion);
        console.log('Create Motion', response.data);
        return response.data;
    } catch (error){
        console.log('Error postMotion', error);
    }
}


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
        };
       jewels.push(jewel);
    }  
    console.log('Fetched products...')
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
        Alert.alert(
            "Agregar Producto",
            "¿Quiere agregar este producto?",
            [
                {
                    text: "Agregar",
                    onPress: () => console.log("Agregado"),
                    style: "cancel"
                },
            ]
        );
        return response.data;  // Esto devuelve el ID generado por Firebase
    } catch (error) {
        console.error('Error al agregar el producto:', error);
    }
};


const updateData = async (data, id) => {
    try {
        const url = `${BACKEND_URL}` + `jewel/${id}.json`;
        console.log("URL de la petición:", url);
        const res = await axios.patch(url, data);
        console.log("Respuesta de Firebase:", res);
        return res.data;
    } catch (error) {
        console.error("Error al modificar producto", error);
        throw error;
    }
};

export { getProducts, getProductById, postProduct, updateData, postMotion };
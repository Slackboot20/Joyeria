// Import Axios

import axios from 'axios';

BACKEND_URL = 'https://joyeria-5db71-default-rtdb.firebaseio.com/';

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
        const response = await axios.post(`${BACKEND_URL}` + `/jewel/create.json`, newJewel);
        console.log('Producto agregado:', response.data);
        return response.data;  // Esto devuelve el ID generado por Firebase
    } catch (error) {
        console.error('Error al agregar el producto:', error);
    }
};


const updateData = async (data) => {
    try {
        const res = await axios.patch(`${BACKEND_URL}` + `/jewel/update/${id}.json`, data);
    } catch (error) {
        console.error("Error al modificar producto", error)
    }
}

export { getProducts, getProductById, postProduct, updateData };
import axios from "axios";

// Sustituye estas variables con tus credenciales de Cloudinary
const CLOUD_NAME = "dwwrhbr8w"; // Encuentra esto en el dashboard de Cloudinary
const UPLOAD_PRESET = "cnctlnhg"; // Lo configuraste en Cloudinary

/**
 * Función para subir imágenes a Cloudinary
 * @param {string} imageUri - URI de la imagen (local)
 * @returns {string} secure_url - URL de la imagen subida a Cloudinary
 */
export const uploadImageToCloudinary = async (imageUri) => {
  try {
    // Crea un formulario para los datos
    const formData = new FormData();
    formData.append("file", {
      uri: imageUri,
      type: "image/jpeg", // Cambia esto si subes otro tipo de archivo
      name: "image.jpg", // Nombre del archivo
    });
    formData.append("upload_preset", UPLOAD_PRESET); // Configuración de Cloudinary

    // Realiza la petición a Cloudinary
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("Imagen subida con éxito:", response.data.secure_url);
    return response.data.secure_url; // Retorna la URL de la imagen subida
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    throw error;
  }
};

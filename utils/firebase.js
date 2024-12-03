import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCOfSyQvqXgtAkQ9VhK02J8dJy9pvwCtBs",
  authDomain: "jeweler-a97c3.firebaseapp.com",
  databaseURL: "https://jeweler-a97c3-default-rtdb.firebaseio.com/",
  projectId: "jeweler-a97c3",
  storageBucket: "jeweler-a97c3.appspot.com",
  messagingSenderId: "1003707398978",
  appId: "1:1003707398978:web:a283fe50126e4398c26a89"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener el objeto de autenticación
const auth = getAuth(app);

export { auth };

import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC3MfxBR6F4TLqsG4xR0Zh27WzuzvN5DGQ",
    authDomain: "alertas-tec.firebaseapp.com",
    projectId: "alertas-tec",
    storageBucket: "alertas-tec.appspot.com",
    messagingSenderId: "874554248781",
    appId: "1:874554248781:web:28943edaca68f662435604",
    measurementId: "G-Q1XDJ7N6NS",
};

let app;

if (!getApps().length) {
  const config = {
    
    // tu configuración aquí
  };
  app = initializeApp(config);
} else {
  app = getApps()[0];  // Si ya existe una app inicializada, reutilizamos esa instancia
}

export default app



"use client";


import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp, getApps } from 'firebase/app';
import { useRouter } from 'next/router';

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
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      window.location.href = './pant1'; // Cambia '/otra-pagina' a la ruta de la página a la que quieres redirigir.
    }
  }, [isLoggedIn]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Cambiamos el estado a loggedIn para disparar el useEffect y realizar el enrutamiento
      setIsLoggedIn(true);

    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };

  return (
    <div className="bg-[#173E6E] flex justify-center items-center h-screen flex-row">
    <div className="bg-white p-8 shadow-md rounded-md w-96">
      <h1 className="text-black text-center text-2xl font-bold mb-4">
        Iniciar sesión
      </h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Usuario
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Correo electrónico"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md  text-black focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Contraseña"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600"
        >
          Iniciar sesión
        </button>
        <Link
          href="/pages/index"
          className="text-white font-bold text-center"
        >
          Regístrate
        </Link>
      </form>
    </div>
  </div>
  )
}

export default Login;

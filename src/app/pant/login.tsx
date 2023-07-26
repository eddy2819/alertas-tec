{/*import firebase from 'firebase/app';
import Link from 'next/link';
import React, { useState } from 'react'

function PageL() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('Inicio de sesión exitoso');
      // Aquí puedes redirigir al usuario a la página principal de la aplicación
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

export default PageL*/}
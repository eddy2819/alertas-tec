"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";
import { useRouter } from "next/router";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      window.location.href = "./pant1"; // Cambia '/otra-pagina' a la ruta de la página a la que quieres redirigir.
    }
  }, [isLoggedIn]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Cambiamos el estado a loggedIn para disparar el useEffect y realizar el enrutamiento
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };
  return (
    <>
      <section className=" bg-[#173E6E] h-screen">
        <div className=" container h-full px-6 py-24">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between mt-0">
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Phone image"
              />
            </div>

            <div className="md:w-8/12 lg:ml-6 lg:w-5/12 bg-white p-8 shadow-md rounded-md w-96">
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
        </div>
      </section>
    </>
  );
}

export default Login;

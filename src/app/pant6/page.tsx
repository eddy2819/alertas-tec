"use client";

import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { IoIosArrowForward } from "react-icons/io";

const PageBuzon = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleClick = () => {
    setMostrarMensaje(true);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className=" bg-white flex-1 p-8">
        <h1 className=" text-gray-950 text-4xl font-bold mb-8">
          Bandeja de entrada
        </h1>
        <div className="w-50 h-1 bg-gray-950 mb-1"></div>
        <div className="flex space-x-20">
          <div className="border border-gray-200 bg-white shadow-lg">
            <div className="p-4">
              <div className="bg-[#173E6E] p-2">
                <p className="text-[#D3AD45]">Bandeja de entrada</p>
              </div>
            </div>
            <hr className="border-t border-gray-200 my-4" />
            <div>
              <div className="p-4">
                <p className="text-[#D3AD45]">27 de julio 2023</p>
                <br />
                <br />
                <p className="text-[#173E6E]">KNOWLEDGE-BASED SYSTEMS</p>
                <br />

                <p className="text-[#000]">
                  La postulacion a la plaza fue aceptada
                </p>
                <a
                  href=""
                  className="flex items-center justify-between"
                  onClick={handleClick}
                >
                  <p>..............................................</p>
                  <IoIosArrowForward className="w-10 h-10 text-[#173E6E] " />
                </a>
              </div>
            </div>
            <hr className="border-t border-gray-200 my-4" />
            <div>
              <div className="p-4 ">
                <p className="text-[#D3AD45]">27 de julio 2023</p>
                <br />
                <br />
                <p className="text-[#173E6E]">LIID</p>
                <br />

                <p className="text-[#000]">
                  La postulacion a la plaza fue aceptada
                </p>
                <br />
                <a href="" className="flex items-center justify-between">
                  <p>..............................................</p>
                  <IoIosArrowForward className="w-10 h-10 text-[#173E6E] " />
                </a>
              </div>
            </div>
            <hr className="border-t border-gray-200 my-4" />
            <div>
              <div className="p-4">
                <p className="text-[#D3AD45]">27 de julio 2023</p>
                <br />
                <br />
                <p className="text-[#173E6E]">XRLAB</p>
                <br />

                <p className="text-[#000]">
                  La postulacion a la plaza fue aceptada
                </p>
                <a href="" className="flex items-center justify-between">
                  <p>..............................................</p>
                  <IoIosArrowForward className="w-10 h-10 text-[#173E6E] " />
                </a>
              </div>
            </div>
          </div>
          {mostrarMensaje && (
            <div className="border border-gray-200 bg-white shadow-lg">
              <div className="p-4">
                <h3 className="text-[#173E6E] font-bold">
                  KNOWLEDGE-BASED SYSTEMS
                </h3>
              </div>
              <hr className="border-t border-gray-200 my-4" />
              <div className="p-4">
                <p className="text-[#173E6E]">Sistema de Aceptación</p>
                <br />
                <br />
                <p className="text-[#000]">
                  Estimado estudiante de parte de la Universidad Técnica
                  Particular de Loja, del departamento de Ciencias de Datos,
                  queremos informarles que su postulación a KNOWLEDGE-BASED
                  SYSTEMS fue aceptada.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageBuzon;

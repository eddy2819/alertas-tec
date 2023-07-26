import React from "react";
import Sidebar from "../components/sidebar";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

function PlazasIa() {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" bg-white flex-1 p-8">
        <h1 className=" text-gray-950 text-4xl font-bold mb-8">Plazas </h1>
        <div className="w-50 h-1 bg-gray-950 mb-1"></div>
        <br />
        <br />
        <div className="flex">
          <div className="w-40 mr-20 ">
            t1
            <a className="bg-[#173E6E] w-45 h-12  p-4 flex items-center rounded-md mb-10 " >
              <h3 className="text-[#D3AD45]">Plazas disponibles</h3>
              <MdOutlineKeyboardArrowDown className="w-10 h-10 text-[#D3AD45]" />
            </a>
            <a className="bg-[#173E6E] w-30 h-12 p-4 flex items-center rounded-md mb-10 ">
              <h3 className="text-[#D3AD45]">Plazas recomendadas</h3>
              <MdOutlineKeyboardArrowDown className="w-20 h-20 text-[#D3AD45]" />
            </a>
            <a className="bg-[#173E6E] w-40 h-20 p-4 flex items-center rounded-md mb-10 " href="./pant5">
              <h3 className="text-[#D3AD45]">
                Visualizacion de Autoasignacion
              </h3>
              <MdOutlineKeyboardArrowDown className="w-30 h-30 text-[#D3AD45]" />
            </a>
          </div>
          <div className="border border-gray-200 bg-white shadow-lg ">
            t2
            <div>
              <h4 className="text-[#173E6E] p-4 font-bold">KNOWLEDGE-BASED SYSTEMS</h4>
              <div className="w-50 h-1 bg-gray-950 mb-1"></div>
            </div>
            <div>
              <div className="flex">
                <div className="ml-14 pr-4 border-r border-gray-900">
                  {" "}
                  f1.........................................
                  <p className="text-[#000] p-4">
                    Plazas Disponibles: 2      
                  </p>
                  <p className="text-[#000] p-4">Sobrantes: 2</p>
                </div>
                <div className="pl-4">
                  {" "}
                  f2
                  <p className="text-[#000] p-4">
                    KNOWLEDGE-BASED SYSTEMS es un grupo de investigación basado
                    en grafos del conocimiento y datos para poder realizar
                    análisis estadísticos
                  </p>
                  <div className="w-40 h-10 bg-[#D3AD45] mx-auto mb-4">
                    <p className="text-[#173E6E] font-bold text-center">Autoasignacion</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-50 h-1 bg-gray-950 mb-1"></div>
              <h4 className="text-[#173E6E] p-4 font-bold">
                UTPL DEPARTAMENTO DE CIENCIAS DE LA COMPUTACIÓN Y
                TELECOMUNICACIONES
              </h4>
              <div className="w-50 h-1 bg-gray-950 mb-1"></div>
            </div>
            <div className="flex">
              <div className=" ml-14 pr-4 border-r border-gray-900">
                <p className="text-[#000] p-4">Plazas Disponibles: 2</p>
                <p className="text-[#000] p-4"> Sobrantes: 2</p>
              </div>
              <div className="pl-4">
                <p className="text-[#000] p-4">
                  Visualización de datos hoteleros de la ciudad de Loja.
                </p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="bg-[#B9FEAE] p-4 mt-8 w-60 h-24 text-center">
          <p className="text-[#000] font-bold mb-3">
            Rama de Autoasignacion
          </p>
          <p className="text-[#000]">Datos</p>

        </div>
      </div>
    </div>
  );
}

export default PlazasIa;

// components/Sidebar.js

import Link from "next/link";
import React from "react";
import { FaUserAlt, FaEnvelope } from 'react-icons/fa'; // Importa los iconos
import {RxActivityLog} from 'react-icons/rx';
import {SlEnvolopeLetter} from 'react-icons/sl';
import {BiBuilding,BiLogOut} from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="h-screen w-30 bg-blue-900 text-white p-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">UTPL</h2>
      <ul className="flex flex-col items-center space-y-10">
        <li className="flex flex-col items-center">
          <Link
            href="./pant2"
            className="text-[#D3AD45] hover:text-white"
            rel="noopener noreferrer"
          >
            <FaUserAlt className="w-10 h-10 hover:text-white" title="Opción 1" />
          </Link>
          <span className="text-[#D3AD45] hover:text-white">Cuenta</span>
        </li>
        <li className="flex flex-col items-center">
          <Link
            href="./pant1"
            className="text-[#D3AD45] hover:text-white"
            rel="noopener noreferrer"
          >
            <BiBuilding className="w-10 h-10 hover:text-white" title="Opción 2" />
          </Link>
          <span className="text-[#D3AD45] hover:text-white">Plazas</span>
        </li>
        <li className="flex flex-col items-center">
          <Link
            href="./pant3"
            className="text-[#D3AD45] hover:text-white"
            rel="noopener noreferrer"
          >
            <RxActivityLog className="w-10 h-10 hover:text-white" title="Opción 3" />
          </Link>
          <span className="text-[#D3AD45] hover:text-white">Actividades</span>
        </li>
        <li className="flex flex-col items-center">
          <Link
            href="#"
            className="text-[#D3AD45] hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlEnvolopeLetter className="w-10 h-10 hover:text-white" title="Opción 4" />
          </Link>
          <span className="text-[#D3AD45] hover:text-white">Buzon</span>
        </li>

        <li className="flex flex-col items-center">
          <Link
            href="./"
            className="text-[#D3AD45] hover:text-white"
            rel="noopener noreferrer"
          >
            <BiLogOut className="w-10 h-10 hover:text-white" title="Opción 4" />
          </Link>
          <span className="text-[#D3AD45] hover:text-white"></span>
        </li>
        {/* Agrega más opciones de menú según tus necesidades */}
      </ul>
    </div>
  );
};

export default Sidebar;

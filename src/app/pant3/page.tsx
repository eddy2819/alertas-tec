import React from "react";
import Sidebar from "../components/sidebar";
import { BsCheck } from "react-icons/bs";
import {IoClose} from "react-icons/io5"

function PlazasPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" bg-white flex-1 p-8">
        <h1 className=" text-gray-950 text-4xl font-bold mb-8">Actividades </h1>
        <div className="w-50 h-1 bg-gray-950 mb-1"></div>
        <div className="flex colum space-x-40  space-y-1 items-center text-center shadow-md">
          <div className="w-100">
            <h3 className="text-[#D3AD45] bg-[#173E6E] ">Actividad 1</h3>
            <p>...............................................</p>
            <p className="text-[#173E6E] items-center">Entrega de Horarios</p>
          </div>
          <div className="w-400">
            <h3 className="text-[#D3AD45] bg-[#173E6E]">Fecha de entrega</h3>
            <p>...............................................</p>
            <p className="text-[#173E6E] items-center">20/07/2023</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-[#D3AD45] bg-[#173E6E]">Estado</h3>
            <p>...............................................</p>
            <BsCheck
              className="w-10 h-10 hover:text-[#D3AD45] text-[#D3AD45]"
              title="Opción 3"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="flex colum space-x-40  space-y-1 items-center text-center shadow-md">
          <div className="w-100">
            <h3 className="text-[#D3AD45] bg-[#173E6E] ">Actividad 1</h3>
            <p>...............................................</p>
            <p className="text-[#173E6E] items-center">Entrega de Horarios</p>
          </div>
          <div className="w-400">
            <h3 className="text-[#D3AD45] bg-[#173E6E]">Fecha de entrega</h3>
            <p>...............................................</p>
            <p className="text-[#173E6E] items-center">20/07/2023</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-[#D3AD45] bg-[#173E6E]">Estado</h3>
            <p>...............................................</p>
            <IoClose
              className="w-10 h-10 hover:text-[#D3AD45] text-[#D3AD45]"
              title="Opción 3"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="flex colum space-x-40  space-y-1 items-center text-center shadow-md">
          <div className="w-100">
            <h3 className="text-[#D3AD45] bg-[#173E6E] ">Actividad 1</h3>
            <p>...............................................</p>
            <p className="text-[#173E6E] items-center">Entrega de Horarios</p>
          </div>
          <div className="w-400">
            <h3 className="text-[#D3AD45] bg-[#173E6E]">Fecha de entrega</h3>
            <p>...............................................</p>
            <p className="text-[#173E6E] items-center">20/07/2023</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-[#D3AD45] bg-[#173E6E]">Estado</h3>
            <p>................................................</p>
            <IoClose
              className="w-10 h-10 hover:text-[#D3AD45] text-[#D3AD45]"
              title="Opción 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlazasPage;

import React from "react";
import Sidebar from "../components/sidebar";

function PageVia() {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" bg-white flex-1 p-8">
        <h1 className=" text-gray-950 text-4xl font-bold mb-8">
          Visualización de autoasignación{" "}
        </h1>
        <div className="w-50 h-1 bg-gray-950 mb-1"></div>
        <div className="flex space-x-20">
          <div className="border border-gray-200 bg-white shadow-lg ">
            d1
            <div className="p-4">
              <h4 className="text-[#000]">RAMA DE AUTOASIGNACIÓN</h4>
            </div>
            <hr className="border-t border-gray-200 my-4" />
            <div className="flex space-x-4 p-4 ">
              <div>
                <p className="text-[#D3AD45]">Rama</p>
                <p>....................</p>
              </div>
              <div className="ml-8">
                <p className="text-[#D3AD45]">Porcentaje</p>
              </div>
            </div>
            <hr className="border-t border-gray-200 my-4" />

            <div className="flex space-x-4 p-4 ">
              <div>
                <p className="text-[#000]">Datos</p>
                <p>......................</p>
              </div>
              <div className="bg-[#B9FEAE] ml-8">
                <p className="text-[#000]">60%</p>
              </div>
            </div>
            <hr className="border-t border-gray-200 my-4" />
            <div className="flex space-x-4 p-4 ">
              <div>
                <p className="text-[#000]">Web</p>
                <p>......................</p>
              </div>
              <div className="bg-[#F9EC7A]">
                <p className="text-[#000]">30%</p>
              </div>
            </div>
            <hr className="border-t border-gray-200 my-4" />

            <div className="flex space-x-4 p-4 ">
              <div className="">
                <p className="text-[#000]">Movil</p>
                <p>.......................</p>
              </div>
              <div className="bg-[#F97A7A]">
                <p className="text-[#000]">10%</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 bg-white shadow-lg">
            d2
            <div className="text-[#D3AD45] flex space-x-20 p-4">
              <p>Plazas</p>
              <p className="text-white">...............................</p>
              <p>Tutor</p>
              <p className="text-white">...............................</p>
              <p>Porcentaje</p>
              <p className="text-white">...............................</p>
            </div>
            <hr className="border-t border-gray-200 my-4" />
            <div className="flex space-x-4 p-4 ">
              <div className="">
                <p className="text-[#000] font-bold">Introduction power bi</p>
                <p>...............................................................................</p>
              </div>
              <div>
                <p className="text-[#000]">Tutor:</p>
                <p>.............................................................................</p>
              </div>
              <div className="bg-[#B9FEAE] ml-8">
                <p className="text-[#000]">90%</p>
              </div>
            </div>
            <hr className="border-t border-gray-200 my-4" />
            <div className="flex space-x-4 p-4 ">
              <div className="">
                <p className="text-[#000] font-bold">KNOWLEDGE-BASED SYSTEMS</p>
                <p>...............................................................................</p>
              </div>
              <div>
                <p className="text-[#000]">Tutor:</p>
                <p>...............................................................................</p>
              </div>
              <div className="bg-[#B9FEAE] ml-8">
                <p className="text-[#000]">85%</p>
              </div>
            </div>
            <hr className="border-t border-gray-200 my-4" />
            <div className="flex space-x-4 p-4 ">
              <div className="">
                <p className="text-[#000] font-bold">System Database</p>
                <p>...............................................................................</p>
              </div>
              <div>
                <p className="text-[#000]">Tutor:</p>
                <p>................................................................................</p>
              </div>
              <div className="bg-[#B9FEAE] ml-8">
                <p className="text-[#000]">70%</p>
              </div>
            </div>
            <hr className="border-t border-gray-200 my-4" />
            <div className="flex space-x-4 p-4 ">
              <div className="">
                <p className="text-[#000] font-bold">XRLAB</p>
                <p>...............................................................................</p>
              </div>
              <div>
                <p className="text-[#000]">Tutor:</p>
                <p>...............................................................................</p>
              </div>
              <div className="bg-[#F9EC7A]">
                <p className="text-[#000]">80%</p>
              </div>
            </div>
            <hr className="border-t border-gray-200 my-4" />
            <div className="flex space-x-4 p-4 ">
              <div className="">
                <p className="text-[#000] font-bold">kradac</p>
                <p>...............................................................................</p>
              </div>
              <div>
                <p className="text-[#000]">Tutor:</p>
                <p>................................................................................</p>
              </div>
              <div className="bg-[#F9EC7A]">
                <p className="text-[#000]">70%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageVia;

import React from "react";
import Sidebar from "../components/sidebar";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function PantPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" bg-white flex-1 p-8">
        <h1 className=" text-gray-950 text-4xl font-bold mb-8">Plazas </h1>
        <div className="w-50 h-1 bg-gray-950 mb-1"></div>
        <div className="flex colum space-y-10 space-x-40">
          {/* Div 1 */}
          <div className="bg-[#173E6E] w-30 h-10 p-4 flex items-center rounded-md mb-10 ">
            <h3 className="text-[#D3AD45]">Nuevas solicitudes</h3>
            <MdOutlineKeyboardArrowDown className="w-10 h-10 text-[#D3AD45]" />
          </div>

          {/* Div 2 */}
          <div className="bg-white p-4 rounded-md  w-50 h-20">
            <div className="bg-[#173E6E]">
              <p className="text-[#F11111]">Rechazada</p>
            </div>
            <div className="h-20 flex items-center justify-center">
              <p className="text-[#173E6E]">KNOWLEDGE-BASED SYSTEMS</p>
            </div>
            <div>
              <p className="bg-[#173E6E] text-white text-center">Modalidad Presencial</p>
            </div >
            <div className="bg-[#d4d4d8] h-18" >
              <p className="text-[#173E6E] text-center">Practicum 2.2</p>
              <p className="text-[#000] text-xs">ABR/2023 - AGO/2023</p>
            </div>
          </div>

          {/* Div 3 */}
          <div className="bg-white p-4 rounded-md w-500">
            <div className="">
              <p className=" bg-[#173E6E] w-15 text-[#D3AD45]">Aceptada</p>
            </div>
            <div className="h-20 flex items-center justify-center">
              <p className="text-[#173E6E] text-center">KNOWLEDGE-BASED SYSTEMS</p>
            </div>
            <div>
              <p className="bg-[#173E6E] text-white text-center">Modalidad Presencial</p>
            </div>
            <div className="bg-[#d4d4d8]">
              <p className=" text-[#173E6E] text-center">Practicum 2.2</p>
              <p className="text-[#000] text-xs">ABR/2023 - AGO/2023</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PantPage;

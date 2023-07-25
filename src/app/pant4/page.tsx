import React from "react";
import Sidebar from "../components/sidebar";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function PlazasIa() {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" bg-white flex-1 p-8">
      <h1 className=" text-gray-950 text-4xl font-bold mb-8">Plazas </h1>
        <div className="w-50 h-1 bg-gray-950 mb-1"></div>
        <br />
        <br />
        <div className="flex-row space-x-4 ">
          <div className="bg-[#173E6E] w-25 h-10 p-4 flex items-center rounded-md mb-10 ">
            <h3 className="text-[#D3AD45]">Nuevas solicitudes</h3>
            <MdOutlineKeyboardArrowDown className="w-10 h-10 text-[#D3AD45]" />
          </div>
          <div className="bg-[#173E6E] w-30 h-10 p-4 flex items-center rounded-md mb-10 ">
            <h3 className="text-[#D3AD45]">Nuevas solicitudes</h3>
            <MdOutlineKeyboardArrowDown className="w-10 h-10 text-[#D3AD45]" />
          </div>
          <div className="bg-[#173E6E] w-30 h-10 p-4 flex items-center rounded-md mb-10 ">
            <h3 className="text-[#D3AD45]">Nuevas solicitudes</h3>
            <MdOutlineKeyboardArrowDown className="w-10 h-10 text-[#D3AD45]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlazasIa;

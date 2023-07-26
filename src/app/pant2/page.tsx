import React from "react";
import Sidebar from "../components/sidebar";
import { FaUserAlt } from "react-icons/fa";

function User() {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" bg-white flex-1 p-8">
        <div className="border border-black p-20 items-center ">
          <div className="text-center items-center ">
              <FaUserAlt
                className="w-20 h-20 text-black  "
                title="Opción 1"
              />
            </div>
            <h2 className="text-[#0a0a0a] text-lg mt-4 text-center ">
              Eddy Camilo Guarnizo Paccha
            </h2>
          <div className="w-50 h-1 bg-gray-950 my-10"></div>
          <div className="text-[#173E6E] text-center space-y-10">
            <h3 className="font-bold">Perfil</h3>
            <h3 className="font-bold">Archivos</h3>
            <h3 className="font-bold">Historial</h3>
            <h3 className="font-bold">cerrar sesión</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;

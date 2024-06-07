import React from "react";
import Image from "next/image";

const Register = () => {
  return (
    <div className="flex items-center justify-center bg-primario">
      <div className="flex bg-white rounded-lg shadow-lg max-w-2xl gap-5">
        {/* Sección izquierda */}
        <div className="hidden md:block md:w-1/2">
          <div className="flex justify-center h-full w-full bg-gradient-to-br from-[#5f4b85] to-[#B892FF]">
            <div className="items-center flex flex-col justify-center h-full w-full">
              <Image src="/torta-register.png" width={250} height={350} />
            </div>
          </div>
        </div>
        {/* Sección derecha */}
        <div className="w-full md:w-1/2 p-6">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Bienvenido, Regístrate</h2>
            <p className="text-gray-700 mb-6">Crear una nueva cuenta</p>
          </div>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Contraseña"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirmar Contraseña
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="Confirmar Contraseña"
              />
            </div>
            <div className="flex items-center justify-between flex-col gap-3">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

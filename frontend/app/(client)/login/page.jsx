import React from "react";
import Image from "next/image";
import Link from "next/link"; // Importar Link desde Next.js

const Login = () => {
  return (
    <div className="flex items-center justify-center bg-primario mt-10">
      <div className="flex bg-white rounded-lg shadow-lg w-full max-w-2xl gap-5">
        {/* Sección izquierda */}
        <div className="hidden md:block md:w-1/2">
          <div className="flex justify-center h-full w-full bg-gradient-to-br from-[#5f4b85] to-[#B892FF]">
            <div className="items-center flex flex-col justify-center h-full w-full">
              <Image src="/torta-login.png" width={200} height={200} />
            </div>
          </div>
        </div>
        {/* Sección derecha */}
        <div className="w-full md:w-1/2 p-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Bienvenido de vuelta</h2>
            <p className="text-gray-700 mb-6">Iniciar sesión</p>
          </div>
          <form>
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
            <div className="mb-6">
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
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between flex-col gap-3">
              <div className="flex gap-3">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Iniciar Sesión
                </button>
                {/* Usar Link para redirigir a la página de registro */}
                <Link href="/login/registro">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Registro
                  </button>
                </Link>
              </div>
              <a
                href="#"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Olvidaste la contraseña?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

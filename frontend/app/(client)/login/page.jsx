'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const sendForm = async () => {
    try {
      const response = await fetch("https://cakeback.somee.com/api/v.1/Account/Login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      if(response.ok){
        toast.success("Inicio de sesion exitoso")
        router.push('/tienda');
      }
      const data = await response.json();
      console.log(data);
      localStorage.setItem("dataUser", JSON.stringify(data));
    } catch (error) {
      console.error("Error:", error);
      toast.error("Email o contraseña incorrectos")
    }
  };

  return (
    <div className="flex items-center justify-center bg-primario mt-10">
      <div className="flex rounded-lg shadow-lg w-full max-w-3xl gap-5 bg-gradient-to-br from-white to-[#B892FF]">
        {/* Sección izquierda */}
        <div className="hidden md:block md:w-1/2">
          <div className="flex justify-center h-full w-full bg-gradient-to-br from-[#5f4b85] to-[#B892FF]">
            <div className="items-center flex flex-col justify-center h-full w-full">
              <Image src="/torta-login.png" width={200} height={200} alt="imagen-login"/>
            </div>
          </div>
        </div>
        {/* Sección derecha */}
        <div className="w-full md:w-1/2 p-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Bienvenido de vuelta</h2>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between flex-col gap-3">
              <div className="flex gap-3">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={sendForm}
                >
                  Iniciar Sesión
                </button>
              </div>
              <a
                href="#"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Olvidaste la contraseña?
              </a>
              <div className="flex gap-3 flex-col items-center md:flex-row ">
                <span>¿No tienes una cuenta? </span>
                <Link href="/login/registro">
                  <span className="font-bold hover:text-blue-500">
                    Registrate
                  </span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

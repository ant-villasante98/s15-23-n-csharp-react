'use client'
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const Registro = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de la contraseña
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(password)) {
      toast.error("La contraseña debe tener al menos una mayúscula, una minúscula, un número, un carácter especial y un mínimo de 6 caracteres");
      return;
    }

    const registerData = {
      name,
      lastName,
      username,
      email,
      password
    };

    try {
      const response = await fetch("https://cakeback.somee.com/api/v.1/Account/Register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
      });

      if (response.ok) {
        toast.success("Registro exitoso");
        router.push('/tienda');
        const data = await response.json
        localStorage.setItem("dataUser", JSON.stringify(data));
      } else {
        toast.error(data.message || "Ocurrió un error. Vuelve a intentar");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Ocurrió un error. Vuelve a intentar");
    }
  };

  return (
    <div className="flex items-center justify-center bg-primario">
      <div className="flex bg-gradient-to-br from-white to-[#B892FF] rounded-lg shadow-lg max-w-3xl w-full gap-5">
        <div className="hidden md:block md:w-1/2">
          <div className="flex justify-center h-full w-full bg-gradient-to-br from-[#5f4b85] to-[#B892FF]">
            <div className="items-center flex flex-col justify-center h-full w-full">
              <Image src="/torta-register.png" width={250} height={350} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-6">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Bienvenido!!! Regístrate</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                minLength={3}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                Apellido
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                minLength={3}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Nombre de usuario
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                minLength={6}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Contraseña
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
              />
            </div>
            <div className="flex items-center justify-between flex-col gap-3">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Registrarme
              </button>
              <div className="flex gap-3 flex-col items-center md:flex-row">
                <span>¿Ya tienes una cuenta? </span>
                <Link href="/login/">
                  <span className="font-bold hover:text-blue-500">
                    Inicia sesión
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

export default Registro;
"use client";

import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errores = {};

    if (!name.trim()) {
      errores.name = "El nombre es obligatorio";
    }

    if (!lastName.trim()) {
      errores.lastName = "El apellido es obligatorio";
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      errores.email = "Email no válido";
    }

    if (!/^\d{5}$/.test(postalCode)) {
      errores.postalCode = "Código postal no válido";
    }

    if (!/^\d{10}$/.test(cellphone)) {
      errores.cellphone = "Teléfono no válido";
    }

    return errores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = validate();

    if (Object.keys(errores).length === 0) {
      // Aquí puedes enviar los datos a un servidor o manejarlos como desees
      console.log({ name, lastName, email, postalCode, cellphone });
    } else {
      setErrors(errores);
    }
  };

  return (
    <>

      <h2 className="sm:text-xs sm:pb-4 sm:text-left md:text-base lg:text- pb-10 text-left text-2xl text-white font-medium drop-shadow-2xl">Por favor te pedimos que llenes los siguientes datos para poder enviarte tu pedido a la brevedad</h2>
      <form
        onSubmit={handleSubmit}
        className="pt-5 sm:w-full sm:ml-0 sm:mr-0 sm:pl-2 sm:pr-2 md:p-10 lg:w-2/3   bg-purple-400 flex flex-col gap-8 items-center rounded-xl"
      >
        <div>
          <label htmlFor="name" className="sm:text-sm block mb-2 text-white font-medium text-lg">Nombre: </label>
          <input
            id="name"
            autoComplete="on"
            className="sm:w-50 sm:h-7 md:w-80 rounded-md h-8"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="text-red-600 text-xs">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="sm:text-sm block mb-2  text-white font-medium text-lg">Apellido: </label>
          <input
            id="lastName"
            className="sm:w-50 sm:h-7 md:w-80 rounded-md h-8"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <p className="text-red-600 text-xs">{errors.lastName}</p>}
        </div>
        <div>
          <label htmlFor="email" className="sm:text-sm block mb-2  text-white font-medium text-lg">Email: </label>
          <input
            id="email"
            autoComplete="on"
            className="sm:w-50 sm:h-7 md:w-80 rounded-md h-8"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-600 text-xs">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="adress" className="sm:text-sm block mb-2  text-white font-medium text-lg">Direccion: </label>
          <input
            id="adress"
            className="sm:w-50 sm:h-7 md:w-80 rounded-md h-8"
            type="text"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="postalCode" className="sm:text-sm block mb-2  text-white font-medium text-lg">Código Postal: </label>
          <input
            id="postalCode"
            className="sm:w-50 sm:h-7 md:w-80 rounded-md h-8"
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
          {errors.postalCode && <p className="text-red-600 text-xs">{errors.postalCode}</p>}
        </div>
        <div>
          <label htmlFor="cellphone" className="sm:text-sm block mb-2 mr-2  text-white font-medium text-lg">Teléfono: </label>
          <input
            id="cellphone"
            className="sm:w-50 sm:h-7 md:w-80 rounded-md h-8"
            type="text"
            value={cellphone}
            onChange={(e) => setCellphone(e.target.value)}
          />
          {errors.cellphone && <p className="text-red-600 text-xs">{errors.cellphone}</p>}
        </div>
        <button className="mt-8 w-32  h-10  text-lg font-medium rounded-md bg-pink-500 text-white transition-all duration-500 ease-in-out hover:text-pink-500 hover:border hover:border-pink-500 hover:bg-pink-200 hover:scale-120-smooth" type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Form;

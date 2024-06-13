"use client";
import React, { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "@/components/app/tienda/utils/handleLocalStorage";
import { $OrdersInfo } from "@/stores/ordersinfo";
import { useStore } from "@nanostores/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    lastName: '',
    email: '',
    postalCode: '',
    cellphone: '',
  });
  const [showToast, setShowToast] = useState(true); // Estado para controlar la visibilidad del toast
  const orderinfo = useStore($OrdersInfo);

  useEffect(() => {
    const storedOrders = getLocalStorage("cart");
    setOrders(storedOrders || []);

    const storedBuyerInfo = getLocalStorage("buyerInfo");
    setBuyerInfo(storedBuyerInfo || {
      name: '',
      lastName: '',
      adress: "",
      email: '',
      postalCode: '',
      cellphone: '',
    });

    // Muestra el toast de éxito cuando el componente se monta
    if (showToast) {
      toast.success('¡Tu orden se ha generado exitosamente! En breve nos estaremos comunicando contigo para coordinar el envío y el método de pago. Muchas gracias por elegirnos! 😊', {
        onClose: () => setShowToast(false),
      });
    }

  }, [showToast]);

  useEffect(() => {
    if (orderinfo) {
      const newBuyerInfo = {
        name: orderinfo.name,
        lastName: orderinfo.lastName,
        adress: orderinfo.adress,
        email: orderinfo.email,
        postalCode: orderinfo.postalCode,
        cellphone: orderinfo.cellphone,
      };
      setBuyerInfo(newBuyerInfo);
      setLocalStorage("buyerInfo", newBuyerInfo);
    }
  }, [orderinfo]);

  const totalPrice =
    orders && orders.length > 0
      ? orders.reduce((acumulador, producto) => {
          return acumulador + producto.count * producto.price;
        }, 0)
      : 0;

  return (
    <div className="w-full bg-pink-300 flex flex-col items-center rounded-2xl min-h-screen">
      <ToastContainer 
        position="top-center" // Cambiado a posición centrada en la parte superior
        autoClose={10000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        className="w-auto" // Agrega esta clase para controlar el ancho del contenedor
      />

      <div className="w-full flex flex-row justify-around gap-10 bg-pink-300 p-5 sm:flex sm:flex-col md:flex md:flex-row rounded-2xl">
        <div className="w-1/2 flex flex-col gap-10 bg-white px-10 rounded-xl">
          <h1 className="pt-2 text-xl font-semibold text-pink-400 text-center underline">Datos del comprador: </h1>
          <p className="text-pink-600 font-medium">Nombre: {buyerInfo.name} {buyerInfo.lastName}</p>
          <p className="text-pink-600 font-medium">Direccion: {buyerInfo.adress}</p>
          <p className="text-pink-600 font-medium">Email: {buyerInfo.email}</p>
          <p className="text-pink-600 font-medium">Codigo Postal: {buyerInfo.postalCode}</p>
          <p className="text-pink-600 font-medium">Telefono: {buyerInfo.cellphone}</p>
        </div>

        <div className="w-1/2 flex md:flex-col md:gap-8 bg-white px-10 rounded-xl">
          <h1 className="pt-2 text-xl font-semibold text-pink-400 text-center underline">Detalles de la orden: </h1>
          {orders && orders.length > 0 ? (
            orders.map((order) => (
              <ul className="grid grid-cols-4 md:gap-8" key={order.productId}>
                <li className="text-pink-600 font-medium">{order.productName}</li>
                
                <li className="text-pink-600 font-medium">Cantidad: {order.count}</li>
                <li className="text-pink-600 font-medium">Precio: ${order.price}</li>
                <h2 className="font-semibold text-pink-600">Subtotal: ${order.count * order.price}</h2>
              </ul>
            ))
          ) : (
            <p>No se encontraron órdenes.</p>
          )}
          <div className="mt-5 mb-5">
            <p className="text-pink-600 text-xl font-bold">Total: ${totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;



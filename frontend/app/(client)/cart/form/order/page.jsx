"use client";
import React, { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "@/components/app/tienda/utils/handleLocalStorage";
import { $OrdersInfo } from "@/stores/ordersinfo";
import { useStore } from "@nanostores/react";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    lastName: '',
    email: '',
    postalCode: '',
    cellphone: '',
  });
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
  }, []);

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
    <div className="w-full bg-pink-300 flex flex-col items-center">
      <div className="w-full flex flex-row justify-around gap-10 bg-pink-300 p-5 sm:flex sm:flex-col md:flex md:flex-row">
        <div className="w-1/2 flex flex-col gap-10 bg-white px-10 sm:gap3">
          <h1 className="pt-2 text-xl font-semibold text-pink-400 text-center">Datos del comprador: </h1>
          <p className="text-pink-600 font-medium">Nombre: {buyerInfo.name} {buyerInfo.lastName}</p>
           <p className="text-pink-600 font-medium">Direccion: {buyerInfo.adress}</p>
          <p className="text-pink-600 font-medium">Email: {buyerInfo.email}</p>
          <p className="text-pink-600 font-medium">Codigo Postal: {buyerInfo.postalCode}</p>
          <p className="text-pink-600 font-medium">Telefono: {buyerInfo.cellphone}</p>
        </div>

        <div className="w-1/2 flex md:flex-col md:gap-8 bg-white px-10">
          <h1 className="pt-2 text-xl font-semibold text-pink-400 text-center">Detalles de la orden: </h1>
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
            <p>No orders found.</p>
          )}
          <div className="mt-5 mb-5">
        <p className="text-pink-800  text-xl font-bold">Total: ${totalPrice}</p>
      </div>
        </div>
      </div>

      
    </div>
  );
};

export default Order;

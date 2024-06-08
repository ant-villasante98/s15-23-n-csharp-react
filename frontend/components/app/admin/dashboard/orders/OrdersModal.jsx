'use client'
import React, { useEffect, useState } from 'react';

const OrdersModal = ({ orderId, onClose }) => {
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const response = await fetch(`https://cakeback.somee.com/api/v1/orders/${orderId}`, {
                    method: 'GET'
                });

                if (!response.ok) {
                    throw new Error('Error al obtener los detalles de la orden');
                }

                const orderDetails = await response.json();
                setOrderData(orderDetails);
            } catch (error) {
                console.error('Error al obtener los detalles de la orden:', error);
            }
        };

        fetchOrderData();
    }, [orderId]);

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <div className="flex justify-end">
                    <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>&times;</button>
                </div>
                <h2 className="text-xl font-bold mb-4">Detalles de la Orden</h2>
                {orderData ? (
                    <div>
                        <p>ID: {orderData.id}</p>
                        <p>Usuario: {orderData.user}</p>
                        <p>Fecha de Creación: {new Date(orderData.creationDate).toLocaleDateString()}</p>
                        <p>Monto Total: ${orderData.totalAmount}</p>
                        <h3>Detalles de la Orden:</h3>
                        {orderData.orderDetails.map((detail, index) => (
                            <div key={index}>
                                <p>Cantidad: {detail.quantity}</p>
                                <p>Precio Unitario: ${detail.unitPrice}</p>
                                <p>Subtotal: ${detail.subTotal}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        </div>
    );
};

export default OrdersModal;


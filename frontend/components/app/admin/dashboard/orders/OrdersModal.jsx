'use client'
import React from 'react';

const OrdersModal = ({ order, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <div className="flex justify-end">
                    <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>&times;</button>
                </div>
                <h2 className="text-xl font-bold mb-4">Detalles de la Orden</h2>
                {order ? (
                    <div>
                        <p>ID: {order.id}</p>
                        <p>Usuario: {order.user.name}</p>
                        <p>Fecha de Creación: {new Date(order.creationDate).toLocaleDateString()}</p>
                        <p>Monto Total: ${order.totalAmount}</p>
                        <h3>Estado: {order.estado}</h3>
                        {/* Puedes mostrar otros detalles de la orden aquí */}
                    </div>
                ) : (
                    <p>No hay datos de orden disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default OrdersModal;

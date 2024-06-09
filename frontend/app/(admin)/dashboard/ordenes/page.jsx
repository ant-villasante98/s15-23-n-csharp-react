'use client'
import OrdersModal from '@/components/app/admin/dashboard/orders/OrdersModal';
import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit, MdRemoveRedEye } from 'react-icons/md';


const Ordenes = () => {
    const [ordenes, setOrdenes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrderId, setSelectedOrderId] = useState(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://cakeback.somee.com/api/v1/orders", {
                    method: 'GET'
                });
                if (!response.ok) {
                    throw new Error('Error al obtener las órdenes');
                }
                const data = await response.json();
                setOrdenes(data);
            } catch (error) {
                console.error('Error al obtener las órdenes:', error);
            }
        };

        fetchData();
    }, []);

    const handleEdit = (orderId) => {
        setSelectedOrderId(orderId);
        openModal();
    };

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex content-start'>
            </div>
            <div className='overflow-hidden rounded-2xl'>
                <table className='w-full'>
                    <thead className='text-xs text-white uppercase bg-primario'>
                        <tr>
                            <th className='p-2 '>Nombre</th>
                            <th className='p-2 '>Estado</th>
                            <th className='p-2 '>Fecha</th>
                            <th className='p-2 '>Monto</th>
                            <th className='p-2 '>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordenes.map((orden) => (
                            <tr key={orden.id} className='even:bg-slate-200'>
                                <td className='p-2 flex justify-center'>
                                    <div className='flex gap-2 items-center'>
                                        {/* Aquí puedes mostrar la imagen del usuario */}
                                        {orden.user}
                                    </div>
                                </td>
                                <td className=' text-center'>
                                    <span className={`rounded-md p-1 font-[14px] text-white bg-yellow-500`}>
                                        Pendiente
                                    </span>
                                </td>
                                <td className='p-2 text-center'>
                                    {new Date(orden.creationDate).toLocaleDateString()}
                                </td>
                                <td className='p-2  text-center'>
                                    {orden.totalAmount}
                                </td>
                                <td className='flex p-2 justify-center gap-5 items-center'>
                                    <button 
                                        className='flex items-center gap-2 bg-blue-500 rounded-md p-1 text-white' 
                                        onClick={() => handleEdit(orden.id)}
                                    >
                                        <MdRemoveRedEye />
                                        Detalles
                                    </button>
                                    <button className='flex items-center gap-2 bg-green-400 rounded-md p-1 text-white'>
                                        <MdEdit />
                                        Editar
                                    </button>
                                    <button className='flex items-center gap-2 bg-red-500 rounded-md p-1 text-white'>
                                        <MdDelete />
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isModalOpen && <OrdersModal orderId={selectedOrderId} onClose={closeModal} />}
        </div>
    );
};

export default Ordenes;

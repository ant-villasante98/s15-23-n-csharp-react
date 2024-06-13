'use client';
import { useState } from 'react';
import { MdAddShoppingCart, MdDelete, MdEdit, MdRemoveRedEye } from 'react-icons/md';
import OrdersModal from '@/components/app/admin/dashboard/orders/OrdersModal';
import Search from '@/components/app/admin/dashboard/search/Search';

const Ordenes = () => {
    const [ordenes, setOrdenes] = useState([
        {
            id: 1,
            user: {
                id: 1,
                name: 'John Doe',
            },
            creationDate: '2024-06-12',
            totalAmount: 100,
            estado: 'Pendiente'
        },
        {
            id: 2,
            user: {
                id: 2,
                name: 'Jane Doe',
            },
            creationDate: '2024-06-12',
            totalAmount: 200,
            estado: 'Completado'
        },
        {
            id: 3,
            user: {
                id: 3,
                name: 'Sam Smith',
            },
            creationDate: '2024-06-10',
            totalAmount: 150,
            estado: 'En proceso'
        },
        {
            id: 4,
            user: {
                id: 4,
                name: 'Alice Johnson',
            },
            creationDate: '2024-06-09',
            totalAmount: 250,
            estado: 'Pendiente'
        },
        {
            id: 5,
            user: {
                id: 5,
                name: 'Bob Brown',
            },
            creationDate: '2024-06-08',
            totalAmount: 300,
            estado: 'Completado'
        },
        {
            id: 6,
            user: {
                id: 6,
                name: 'Charlie Davis',
            },
            creationDate: '2024-06-07',
            totalAmount: 350,
            estado: 'En proceso'
        },
        {
            id: 7,
            user: {
                id: 7,
                name: 'Diana Evans',
            },
            creationDate: '2024-06-06',
            totalAmount: 400,
            estado: 'Pendiente'
        },
        {
            id: 8,
            user: {
                id: 8,
                name: 'Evan Green',
            },
            creationDate: '2024-06-05',
            totalAmount: 450,
            estado: 'Completado'
        },
        {
            id: 9,
            user: {
                id: 9,
                name: 'Fiona Harris',
            },
            creationDate: '2024-06-04',
            totalAmount: 500,
            estado: 'En proceso'
        },
        {
            id: 10,
            user: {
                id: 10,
                name: 'George Ivy',
            },
            creationDate: '2024-06-03',
            totalAmount: 550,
            estado: 'Pendiente'
        },
        {
            id: 11,
            user: {
                id: 11,
                name: 'Hannah Jones',
            },
            creationDate: '2024-06-02',
            totalAmount: 600,
            estado: 'Completado'
        },
        {
            id: 12,
            user: {
                id: 12,
                name: 'Irene Kelly',
            },
            creationDate: '2024-06-01',
            totalAmount: 650,
            estado: 'En proceso'
        },
        {
            id: 13,
            user: {
                id: 13,
                name: 'Jack Lewis',
            },
            creationDate: '2024-05-31',
            totalAmount: 700,
            estado: 'Pendiente'
        },
        {
            id: 14,
            user: {
                id: 14,
                name: 'Karen Miller',
            },
            creationDate: '2024-05-30',
            totalAmount: 750,
            estado: 'Completado'
        },
        {
            id: 15,
            user: {
                id: 15,
                name: 'Leo Nelson',
            },
            creationDate: '2024-05-29',
            totalAmount: 800,
            estado: 'En proceso'
        },
        {
            id: 16,
            user: {
                id: 16,
                name: 'Mona O’Neil',
            },
            creationDate: '2024-05-28',
            totalAmount: 850,
            estado: 'Pendiente'
        },
        {
            id: 17,
            user: {
                id: 17,
                name: 'Nate Parker',
            },
            creationDate: '2024-05-27',
            totalAmount: 900,
            estado: 'Completado'
        },
        {
            id: 18,
            user: {
                id: 18,
                name: 'Olivia Quinn',
            },
            creationDate: '2024-05-26',
            totalAmount: 950,
            estado: 'En proceso'
        },
        {
            id: 19,
            user: {
                id: 19,
                name: 'Paul Robinson',
            },
            creationDate: '2024-05-25',
            totalAmount: 1000,
            estado: 'Pendiente'
        },
        {
            id: 20,
            user: {
                id: 20,
                name: 'Quinn Smith',
            },
            creationDate: '2024-05-24',
            totalAmount: 1050,
            estado: 'Completado'
        }
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const indexOfLastOrder = currentPage * itemsPerPage;
    const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
    const currentOrders = ordenes.slice(indexOfFirstOrder, indexOfLastOrder);

    const totalPages = Math.ceil(ordenes.length / itemsPerPage);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleEdit = (orderId) => {
        const selected = ordenes.find(order => order.id === orderId);
        setSelectedOrder(selected);
        openModal();
    };

    const handleUpdateOrder = (updatedOrder) => {
        const updatedOrders = ordenes.map(order => (order.id === updatedOrder.id ? updatedOrder : order));
        setOrdenes(updatedOrders);
        closeModal();
    };

    const handleDelete = (orderId) => {
        const updatedOrders = ordenes.filter(order => order.id !== orderId);
        setOrdenes(updatedOrders);
    };

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex min-w-full justify-between'>
                <Search placeholder={"Buscar ordenes..."} />
            </div>
            <div className='overflow-hidden rounded-2xl'>
                <table className='w-full'>
                    <thead className='text-xs text-white uppercase bg-primario'>
                        <tr>
                            <th className='p-2'>Nombre</th>
                            <th className='p-2'>Estado</th>
                            <th className='p-2'>Fecha</th>
                            <th className='p-2'>Monto</th>
                            <th className='p-2'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentOrders.map((orden) => (
                            <tr key={orden.id} className='even:bg-slate-200'>
                                <td className='p-2 flex justify-center'>
                                    <div className='flex gap-2 items-center'>
                                        {orden.user.name}
                                    </div>
                                </td>
                                <td className='p-2 text-center'>
                                    <span className={`rounded-md p-1 font-[14px] text-white ${orden.estado === 'Pendiente' ? 'bg-red-500' : orden.estado === 'Completado' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                                        {orden.estado}
                                    </span>
                                </td>
                                <td className='p-2 text-center'>
                                    {new Date(orden.creationDate).toLocaleDateString()}
                                </td>
                                <td className='p-2 text-center'>
                                    ${orden.totalAmount}
                                </td>
                                <td className='flex p-2 justify-center gap-5 items-center'>
                                    <button 
                                        className='flex items-center gap-2 bg-green-400 rounded-md p-1 text-white'
                                        onClick={() => handleEdit(orden.id)}
                                    >
                                        <MdEdit />
                                        Editar
                                    </button>
                                    <button 
                                        className='flex items-center gap-2 bg-red-500 rounded-md p-1 text-white'
                                        onClick={() => handleDelete(orden.id)}
                                    >
                                        <MdDelete />
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='flex justify-between mt-4'>
                    <div className='flex gap-2'>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                className={`px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                onClick={() => handleClick(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <OrdersModal
                    order={selectedOrder}
                    onClose={closeModal}
                    onUpdate={handleUpdateOrder} // Pasar la función de actualización a OrdersModal
                />
            )}
        </div>
    );
};

export default Ordenes;

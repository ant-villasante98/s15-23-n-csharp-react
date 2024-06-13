'use client';

import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const Chart = () => {
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
    
  const calcularVentasPorEstado = (ordenes) => {
    const ventasPorEstado = {
      Pendiente: 0,
      Completado: 0,
      'En proceso': 0,
    };

    ordenes.forEach((orden) => {
      ventasPorEstado[orden.estado] += orden.totalAmount;
    });

    return ventasPorEstado;
  };

  const ventasPorEstado = calcularVentasPorEstado(ordenes);
  const data = Object.keys(ventasPorEstado).map((estado) => ({
    name: estado,
    ventas: ventasPorEstado[estado],
  }));

  return (
    <div className='p-5'>
      <div className='h-[400px]'>
        <h2 className='font-bold mb-5'>Informe Semanal</h2>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ventas" stroke="#8884d8" strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;

"use client"
import React from 'react';
import {
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar,
  PieChart, Pie, Cell
} from 'recharts';

const data = [
  { name: 'Enero', ventas: 30 },
  { name: 'Febrero', ventas: 45 },
  { name: 'Marzo', ventas: 28 },
  { name: 'Abril', ventas: 60 },
  { name: 'Mayo', ventas: 70 },
  { name: 'Junio', ventas: 55 },
];

const pieData = [
  { name: 'Enero', value: 30 },
  { name: 'Febrero', value: 45 },
  { name: 'Marzo', value: 28 },
  { name: 'Abril', value: 60 },
  { name: 'Mayo', value: 70 },
  { name: 'Junio', value: 55 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF4444'];

const Report = () => {
  return (
    <div className='flex w-full'>
      <div className='h-[400px] mt-10 w-1/2'>
        <h2 className='font-bold mb-5'>Distribución de Ventas Semanal</h2>
        <ResponsiveContainer width="100%" height="90%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className='h-[400px] mt-10 w-1/2'>
        <h2 className='font-bold mb-5'>Comparación de Ventas Semanal</h2>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
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
            <Bar dataKey="ventas" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Report;

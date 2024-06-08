"use client"

import React from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar,
  PieChart, Pie, Cell
} from 'recharts';

const data = [
  { name: 'Lunes', ventas: 4000, amt: 2400 },
  { name: 'Martes', ventas: 3000, amt: 2210 },
  { name: 'Miercoles', ventas: 2000, amt: 2290 },
  { name: 'Jueves', ventas: 2780, amt: 2000 },
  { name: 'Viernes', ventas: 1890, amt: 2181 },
  { name: 'Sabado', ventas: 2390, amt: 2500 },
  { name: 'Domingo', ventas: 3490, amt: 2100 },
];

const pieData = data.map((item) => ({ name: item.name, value: item.ventas }));

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6384', '#36A2EB', '#FFCE56'];

const Chart = () => {
  return (
    <div className='p-5'>
      <div className='h-[400px]'>
        <h2 className='font-bold mb-5'>Informe Semanal</h2>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart
            width={500}
            height={300}
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
}

export default Chart;

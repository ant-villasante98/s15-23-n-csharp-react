import Image from 'next/image'
import React from 'react'

const transactionsData = [
  {
    id: 1,
    name: 'John Doe',
    status: 'Pendiente',
    statusColor: 'bg-red-500',
    date: '12-06-2024',
    amount: '$100'
  },
  {
    id: 2,
    name: 'Jane Doe',
    status: 'Completado',
    statusColor: 'bg-green-500',
    date: '12-06-2024',
    amount: '$200'
  },
  {
    id: 3,
    name: 'Sam Smith',
    status: 'En Proceso',
    statusColor: 'bg-yellow-500',
    date: '10-06-2024',
    amount: '$150'
  }
];

const Transactions = () => {
  return (
    <div className='p-5 rounded-lg'>
      <h2 className='mb-5 font-bold'>Últimas Órdenes</h2>
      <div className='overflow-hidden rounded-2xl'>
        <table className='w-full'>
          <thead className='text-xs text-white uppercase bg-primario'>
            <tr>
              <th className='p-2'>Nombre</th>
              <th className='p-2'>Estado</th>
              <th className='p-2'>Fecha</th>
              <th className='p-2'>Monto</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((transaction, index) => (
              <tr key={transaction.id} className={index % 2 === 0 ? 'bg-slate-200' : 'bg-slate-100'}>
                <td className='p-2'>
                  <div className='flex gap-2 items-center justify-center'>
                    <Image 
                      src="/no_avatar.jpg" 
                      alt={transaction.name} 
                      width={40} 
                      height={40}
                      className='object-cover rounded-full'
                    />
                    {transaction.name}
                  </div>
                </td>
                <td className='text-center'>
                  <span className={`rounded-md p-1 font-[14px] text-white ${transaction.statusColor}`}>
                    {transaction.status}
                  </span>
                </td>
                <td className='p-2 text-center'>
                  {transaction.date}
                </td>
                <td className='p-2 text-center'>
                  {transaction.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;

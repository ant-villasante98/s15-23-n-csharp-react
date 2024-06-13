'use client'
import CountUsers from '@/components/app/admin/dashboard/pagination/CountUsers';
import Search from '@/components/app/admin/dashboard/search/Search';
import Image from 'next/image';
import React, { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

const usersData = [
  { id: 1, name: 'John Doe', email: 'Test@gmail.com', amount: '$100' },
  { id: 2, name: 'Jane Doe', email: 'Test2@gmail.com', amount: '$200' },
  { id: 3, name: 'Sam Smith', email: 'Test3@gmail.com', amount: '$150' },
  { id: 4, name: 'Alice Johnson', email: 'alice@example.com', amount: '$250' },
  { id: 5, name: 'Bob Brown', email: 'bob@example.com', amount: '$300' },
  { id: 6, name: 'Charlie Davis', email: 'charlie@example.com', amount: '$350' },
  { id: 7, name: 'Diana Evans', email: 'diana@example.com', amount: '$400' },
  { id: 8, name: 'Evan Green', email: 'evan@example.com', amount: '$450' },
  { id: 9, name: 'Fiona Harris', email: 'fiona@example.com', amount: '$500' },
  { id: 10, name: 'George Ivy', email: 'george@example.com', amount: '$550' },
  { id: 11, name: 'Hannah Jones', email: 'hannah@example.com', amount: '$600' },
  { id: 12, name: 'Irene Kelly', email: 'irene@example.com', amount: '$650' },
  { id: 13, name: 'Jack Lewis', email: 'jack@example.com', amount: '$700' },
  { id: 14, name: 'Karen Miller', email: 'karen@example.com', amount: '$750' },
  { id: 15, name: 'Leo Nelson', email: 'leo@example.com', amount: '$800' },
  { id: 16, name: 'Mona O’Neil', email: 'mona@example.com', amount: '$850' },
  { id: 17, name: 'Nate Parker', email: 'nate@example.com', amount: '$900' },
  { id: 18, name: 'Olivia Quinn', email: 'olivia@example.com', amount: '$950' },
  { id: 19, name: 'Paul Robinson', email: 'paul@example.com', amount: '$1000' },
  { id: 20, name: 'Quinn Smith', email: 'quinn@example.com', amount: '$1050' },
];

const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = usersData.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(usersData.length / usersPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex content-start'>
        <Search placeholder={"Buscar usuario..."} />
      </div>
      <div className='overflow-hidden rounded-2xl'>
        <table className='w-full'>
          <thead className='text-xs text-white uppercase bg-primario'>
            <tr>
              <th className='p-2'>Nombre</th>
              <th className='p-2'>Email</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={user.id} className={index % 2 === 0 ? 'bg-slate-200' : 'bg-slate-100'}>
                <td className='p-2 flex justify-center'>
                  <div className='flex gap-2 items-center'>
                    <Image
                      src="/no_avatar.jpg"
                      alt={user.name}
                      width={40}
                      height={40}
                      className='object-cover rounded-full'
                    />
                    {user.name}
                  </div>
                </td>
                <td className='text-center'>
                  {user.email}
                </td>
                <td className='flex p-2 justify-center gap-5 items-center'>
          
                  <button className='flex items-center bg-red-500 rounded-md p-1 text-white'>
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
    </div>
  );
};

export default UsersPage;

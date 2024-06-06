import CountUsers from '@/components/app/admin/dashboard/pagination/CountUsers';
import Search from '@/components/app/admin/dashboard/search/Search';
import { Pagination } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import { MdDelete, MdEdit, MdOutlineViewList, MdViewList } from 'react-icons/md';

const ProductsPage = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex content-start'>
        <Search placeholder={"Buscar productos..."} />
      </div>
      <div className='overflow-hidden rounded-2xl'>
          <table className='w-full'>
            <thead className='text-xs text-white uppercase bg-primario'>
              <tr>
                <th className='p-2 '>Producto</th>
                <th className='p-2 '>Aditamientos</th>
                <th className='p-2 '>Estado</th>
                <th className='p-2 '>Stock</th>
                <th className='p-2 '>Precio</th>
                <th className='p-2 '>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr className='even:bg-slate-200'>
                <td className='p-2 '>
                  <div className='flex gap-2 items-center justify-center'>
                    <img
                      src="https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="/"
                      className='object-cover rounded-full w-[40px] h-[40px]'
                    />
                    Pastel Navideño de tres pisos
                  </div>
                </td>
                <td className=' text-center'>
                  <button>
                    <MdOutlineViewList/>
                  </button>
                </td>
                <td className=' text-center'>
                  <span className='rounded-md p-1 font-[14px] text-white bg-green-500'>
                    Disponible
                  </span>
                </td>
                <td className='p-2  text-center'>
                  10
                </td>
                <td className='p-2  text-center'>
                  $100
                </td>
                <td className='flex p-2 justify-evenly items-center'>
                  <button className='flex items-center bg-green-400 rounded-md p-1 text-white'>
                    <MdEdit/>
                    Editar
                  </button>
                  <button className='flex items-center bg-red-500 rounded-md p-1 text-white'>
                    <MdDelete/>
                    Eliminar
                  </button>
                </td>
              </tr>
              <tr className='even:bg-slate-200'>
                <td className='p-2 '>
                  <div className='flex gap-2 items-center justify-center'>
                    <img
                      src="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="/"
                      className='object-cover rounded-full w-[40px] h-[40px]'
                    />
                    Brownie de Chocolate Intenso
                  </div>
                </td>
                <td className=' text-center'>
                <button>
                    <MdOutlineViewList/>
                  </button>
                </td>
                <td className=' text-center'>
                  <span className='rounded-md p-1 font-[14px] text-white bg-green-500'>
                    Disponible
                  </span>
                </td>
                <td className='p-2  text-center'>
                  10
                </td>
                <td className='p-2  text-center'>
                  $100
                </td>
                <td className='flex p-2 justify-evenly items-center'>
                  <button className='flex items-center bg-green-400 rounded-md p-1 text-white'>
                    <MdEdit/>
                    Editar
                  </button>
                  <button className='flex items-center bg-red-500 rounded-md p-1 text-white'>
                    <MdDelete/>
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <CountUsers/>
        </div>
      </div>
  )
}

export default ProductsPage;

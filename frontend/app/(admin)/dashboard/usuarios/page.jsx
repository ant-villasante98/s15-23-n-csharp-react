import CountUsers from '@/components/app/admin/dashboard/pagination/CountUsers';
import Search from '@/components/app/admin/dashboard/search/Search';
import Image from 'next/image';
import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

const UsersPage = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex content-start'>
        <Search placeholder={"Buscar usuario..."} />
      </div>
      <div className='overflow-hidden rounded-2xl'>
        <table className='w-full'>
          <thead className='text-xs text-white uppercase bg-primario'>
            <tr>
              <th className='p-2 '>Nombre</th>
              <th className='p-2 '>Email</th>
              <th className='p-2 '>Estado</th>
              <th className='p-2 '>Fecha</th>
              <th className='p-2 '>Monto</th>
              <th className='p-2 '>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr className='even:bg-slate-200'>
              <td className='p-2 '>
                <div className='flex gap-2 items-center'>
                  <Image
                    src="/no_avatar.jpg"
                    alt="/"
                    width={40}
                    height={40}
                    className='object-cover rounded-full'
                  />
                  John Doe
                </div>
              </td>
              <td className=' text-center'>
                Test@gmail.com
              </td>
              <td className=' text-center'>
                <span className='rounded-md p-1 font-[14px] text-white bg-red-500'>
                  Pendiente
                </span>
              </td>
              <td className='p-2  text-center'>
                29-05-2014
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
                <div className='flex gap-2 items-center'>
                  <Image
                    src="/no_avatar.jpg"
                    alt="/"
                    width={40}
                    height={40}
                    className='object-cover rounded-full'
                  />
                  Jane Doe
                </div>
              </td>
              <td className=' text-center'>
                Test2@gmail.com
              </td>
              <td className=' text-center'>
                <span className='rounded-md p-1 font-[14px] text-white bg-green-500'>
                  Completado
                </span>
              </td>
              <td className='p-2  text-center'>
                29-05-2014
              </td>
              <td className='p-2  text-center'>
                $200
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
                <div className='flex gap-2 items-center'>
                  <Image
                    src="/no_avatar.jpg"
                    alt="/"
                    width={40}
                    height={40}
                    className='object-cover rounded-full'
                  />
                  Sam Smith
                </div>
              </td>
              <td className=' text-center'>
                Test3@gmail.com
              </td>
              <td className=' text-center'>
                <span className='rounded-md p-1 font-[14px] text-white bg-yellow-500'>
                  En Proceso
                </span>
              </td>
              <td className='p-2  text-center'>
                29-05-2014
              </td>
              <td className='p-2  text-center'>
                $150
              </td>
              <td className='flex p-2 justify-evenly items-center'>
                <button className='flex items-center bg-green-400 rounded-md p-1 text-white '>
                  <MdEdit/>
                  Editar
                </button>
                <button className='flex items-center bg-red-500 rounded-md p-1 text-white '>
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

export default UsersPage;

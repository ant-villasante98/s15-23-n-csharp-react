import Image from 'next/image'
import React from 'react'

const Transactions = () => {
  return (
    <div className='p-5 rounded-lg'>
      <h2 className='mb-5 font-extralight'>Ultimas Transacciones</h2>
      <div className='overflow-hidden rounded-2xl'>
        <table className='w-full'>
          <thead className='text-xs text-white uppercase bg-primario'>
            <tr>
              <th className='p-2 '>Nombre</th>
              <th className='p-2 '>Estado</th>
              <th className='p-2 '>Fecha</th>
              <th className='p-2 '>Monto</th>
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
                    className='object-cover rounded-[50%]'
                  />
                  John Doe
                </div>
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
            </tr>
            <tr className='even:bg-slate-100'>
              <td className='p-2 '>
                <div className='flex gap-2 items-center'>
                  <Image 
                    src="/no_avatar.jpg" 
                    alt="/" 
                    width={40} 
                    height={40}
                    className='object-cover rounded-[50%]'
                  />
                  Jane Doe
                </div>
              </td>
              <td className=' text-center'>
                <span className='rounded-md p-1 font-[14px] text-white bg-green-500'>
                  Completado
                </span>
              </td>
              <td className='p-2  text-center'>
                30-05-2014
              </td>
              <td className='p-2  text-center'>
                $200
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
                    className='object-cover rounded-[50%]'
                  />
                  Sam Smith
                </div>
              </td>
              <td className=' text-center'>
                <span className='rounded-md p-1 font-[14px] text-white bg-yellow-500'>
                  En Proceso
                </span>
              </td>
              <td className='p-2  text-center'>
                31-05-2014
              </td>
              <td className='p-2  text-center'>
                $150
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Transactions

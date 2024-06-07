import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
  return (
    <div
        className='w-full flex gap-5 p-2 cursor-pointer border-gray-600 border-2 
        shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2)] rounded-xl hover:bg-slate-100 hover:scale-105'
    >
        <MdSupervisedUserCircle size={24}/>
        <div
            className='flex flex-col gap-2'
        >
            <span>Usuarios</span>
            <span className='text-[24px] font-bold'>200</span>
            <span
                className='text-[14px] font-semibold'
            ><span className='text-lime-500'>10%</span> que la semana pasada</span>
        </div>
    </div>
  )
}

export default Card
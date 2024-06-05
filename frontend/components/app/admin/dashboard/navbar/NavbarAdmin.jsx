"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch
} from 'react-icons/md'

const NavbarAdmin = () => {
  const pathname = usePathname();

  return (
    <div>
      <div 
        className="flex justify-between items-center p-5 border-b border-b-black shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2)]"
      >
        <div
          className='text-black capitalize font-bold'
        >
          {pathname.split('/').pop()}
        </div>
        <div
          className='flex items-center gap-4'
        >
          <div
            className='flex items-center gap-3 border-gray-500 border-2 shadow-[0_4px_2px_-2px_rgba(0,0,0,0.2)] p-3 rounded-xl'
          >
            <MdSearch/>
            <input 
              type="text" 
              placeholder='Busqueda...'
              className='bg-transparent border-none text-gray-600'
            />
          </div>
          <div
            className='flex gap-4'
          >
            <MdOutlineChat size={20}/>
            <MdNotifications size={20}/>
            <MdPublic size={20}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;

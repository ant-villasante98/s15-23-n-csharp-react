import React from 'react';
import {
  MdOutlinePayments,
  MdOutlineProductionQuantityLimits,
  MdDashboard,
  MdSupervisedUserCircle,
  MdOutlineSettings,
  MdBarChart,
  MdLogout
} from "react-icons/md";
import Image from 'next/image';
import MenuLink from './menuLink/MenuLink';
import Link from 'next/link';

const menuItems = [
  {
    title: "Paginas",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
      },
      {
        title: "Clientes",
        path: "/dashboard/usuarios",
        icon: <MdSupervisedUserCircle />
      },
      {
        title: "Productos",
        path: "/dashboard/productos",
        icon: <MdOutlineProductionQuantityLimits />
      },
      {
        title: "Ordenes",
        path: "/dashboard/ordenes",
        icon: <MdOutlinePayments />
      },
    ]
  },
  {
    title: "Reportes",
    list: [
      {
        title: "Ventas",
        path: "/dashboard/ventas",
        icon: <MdBarChart />
      },
    ]
  }
]

const SidebarAdmin = () => {
  return (
    <div className='flex flex-col w-64 bg-gradient-to-b from-[#a99edb] to-[#765ca6] p-5'>
      <div className='flex items-center gap-4 mb-5'>
        <Image className='rounded-full object-cover' src="/no_avatar.jpg" alt="" width="50" height="50" />
        <div className='flex flex-col'>
          <span className='font-bold text-white'>John Doe</span>
          <span className='text-[12px] text-white'>Administrador</span>
        </div>
      </div>
      <ul className='' style={{ "listStyle": "none" }}>
        {menuItems.map((cat) =>
          <li key={cat.title}>
            <span className='text-white font-bold text-[13px] mt-3 mb-0'>
              {cat.title}
            </span>
            {cat.list.map(item => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        )}
      </ul>
      <Link href="/" className='p-4 mt-[5px] mb-0 flex items-center gap-3 cursor-pointer rounded-xl border-none bg-none w-full hover:bg-gradient-to-b from-[#765ca6] to-[#5f4b85] text-white'>
        <MdLogout />
        Cerrar Sesión
      </Link>
    </div>
  )
}

export default SidebarAdmin;

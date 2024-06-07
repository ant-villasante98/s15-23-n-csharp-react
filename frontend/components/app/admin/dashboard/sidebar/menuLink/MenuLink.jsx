"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const MenuLink = ({item}) => {

  const pathname = usePathname()
  return (
    <Link href={item.path} 
      className={`flex p-5 items-center text-white gap-3 hover:bg-gradient-to-b from-[#765ca6] to-[#5f4b85] mt-1 mb-1 rounded-xl ${pathname === item.path ? "bg-gradient-to-b from-[#765ca6] to-[#5f4b85]" : null}`}>
        {item.icon}
        {item.title}
    </Link>
  )
}

export default MenuLink;
import NavbarAdmin from '@/components/app/admin/dashboard/navbar/NavbarAdmin';
import SidebarAdmin from '@/components/app/admin/dashboard/sidebar/SidebarAdmin';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='flex h-[100vh]'>
      <div className='flex w-1/5 min-h-[100vh] h-full bg-gradient-to-b from-[#a99edb] to-[#765ca6] p-5'>
        <SidebarAdmin />
      </div>
      <div className='flex flex-col min-h-[100vh]  p-5 w-4/5 overflow-y-auto mx-5'>
        <NavbarAdmin />
        {children}
      </div>
    </div>
  );
}

export default Layout;

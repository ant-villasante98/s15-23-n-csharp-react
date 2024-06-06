import Card from '@/components/app/admin/dashboard/card/Card';
import Chart from '@/components/app/admin/dashboard/chart/Chart';
import Transactions from '@/components/app/admin/dashboard/transactions/Transactions';
import React from 'react'

const Dashboard = () => {
  return (
    <div
      className='flex gap-4 mt-4 '
    >
      <div
        className='flex flex-col gap-5 w-full'
      >
        <div
          className='flex gap-5 justify-evenly'
        >
          <Card/>
          <Card/>
          <Card/>
        </div>
      
        <Transactions/>
        <Chart/>
      </div>
    </div>
  )
}


export default Dashboard;
'use client';
import React, { useState } from 'react';
import Balance from '@/app/dashboard/components/Balance';
import Customer from '@/app/dashboard/components/Customer';
import Home from '@/app/dashboard/components/Home';
import Product_Catalog from '@/app/dashboard/components/Product_Catalog';
import Transactions from '@/app/dashboard/components/Transactions';
import Header from '@/app/dashboard/components/Header';

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('home');
  const [isOn, setIsOn] = useState(true);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const renderComponent = () => {
    return (
      <>
        <Header isOn={isOn} toggleSwitch={toggleSwitch} />
        {(() => {
          switch (activeComponent) {            
            case 'balance':
              return <Balance />;
            case 'transactions':
              return <Transactions />;
            case 'customer':
              return <Customer />;
            case 'productCatalog':
              return <Product_Catalog />;
            default:
              return <Home isTest={isOn} />;
          }
        })()}
      </>
    );
  };

  return (
    <div className='flex container2 h-screen'>
      <div className='w-[25%] bg-gray-100 border-r p-4 h-full'>
        <aside>
          <ul>
            <li
              className='mb-4 cursor-pointer'
              onClick={() => setActiveComponent('home')}
            >
              Home
            </li>
            <li
              className='mb-4 cursor-pointer'
              onClick={() => setActiveComponent('balance')}
            >
              Balance
            </li>
            <li
              className='mb-4 cursor-pointer'
              onClick={() => setActiveComponent('transactions')}
            >
              Transactions
            </li>
            <li
              className='mb-4 cursor-pointer'
              onClick={() => setActiveComponent('customer')}
            >
              Customer
            </li>
            <li
              className='mb-4 cursor-pointer'
              onClick={() => setActiveComponent('productCatalog')}
            >
              Product Catalog
            </li>
          </ul>
        </aside>
      </div>
      <div className='flex-1 p-0 overflow-auto'>
        <main>{renderComponent()}</main>
      </div>
      {/* <main className='flex-1 p-0 overflow-auto'>{renderComponent()}</main> */}
    </div>
  );
}

export default Dashboard;

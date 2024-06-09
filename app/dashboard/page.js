'use client';
import React, { useState } from 'react';
import Balance from '@/app/dashboard/components/Balance';
import Customer from '@/app/dashboard/components/Customer';
import Home from '@/app/dashboard/components/Home';
import Product_Catalog from '@/app/dashboard/components/Product_Catalog';
import Transactions from '@/app/dashboard/components/Transactions';
import Header from '@/app/dashboard/components/Header';
import { FiHome } from 'react-icons/fi';
import { AiOutlineDollar } from 'react-icons/ai';
import { GrTransaction } from 'react-icons/gr';
import { CiUser } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa6';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable';

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('home');
  const [isOn, setIsOn] = useState(true);

  const containerType = [
    {
      id: 1,
      type: 'container-dashboard',
      minSize: 15
    },
    {
      id: 2,
      type: 'container-1',
      minSize: 20
    },
    {
      id: 3,
      type: 'container-2',
      minSize: 20
    },
    {
      id: 4,
      type: 'container-3',
      minSize: 20
    },
    {
      id: 5,
      type: 'container-4',
      minSize: 40
    },
    {
      id: 6,
      type: 'container-5',
      minSize: 50
    },
    {
      id: 7,
      type: 'container-6'
    },
    {
      id: 8,
      type: 'container-7'
    },
    {
      id: 9,
      type: 'container-8'
    },
    {
      id: 10,
      type: 'container-9'
    }
  ];

  const selectedContainer = containerType[3];

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const renderComponent = () => {
    return (
      <>
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

  const getMinSize = () => {
    const container = containerType.find(
      (c) => c.type === selectedContainer.type
    );
    return container ? container.minSize : 10;
  };

  return (
    <div className={`${selectedContainer.type} flex h-screen mx-auto`}>
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel defaultSize={15} minSize={getMinSize()}>
          <div
            className={`bg-gradient-to-b from-blue-600 to-purple-400 text-white `}
          >
            <aside className='py-5 px-4'>
              <ul>
                <li
                  className='mb-4 cursor-pointer flex items-center hover:bg-blue-500 transition-all duration-300 p-2 rounded-md'
                  onClick={() => setActiveComponent('home')}
                >
                  <FiHome className='mr-2 ' />
                  Home
                </li>
                <li
                  className='mb-4 cursor-pointer flex items-center hover:bg-blue-500 transition-all duration-300 p-2 rounded-md'
                  onClick={() => setActiveComponent('balance')}
                >
                  <AiOutlineDollar className='mr-2 ' /> Balance
                </li>
                <li
                  className='mb-4 cursor-pointer flex items-center hover:bg-blue-500 transition-all duration-300 p-2 rounded-md'
                  onClick={() => setActiveComponent('transactions')}
                >
                  <GrTransaction className='mr-2' /> Transactions
                </li>
                <li
                  className='mb-4 cursor-pointer flex items-center hover:bg-blue-500 transition-all duration-300 p-2 rounded-md'
                  onClick={() => setActiveComponent('customer')}
                >
                  <FaRegUser className='mr-2' /> Customer
                </li>
                <li
                  className='mb-4 cursor-pointer flex items-center hover:bg-blue-500 transition-all duration-300 p-2 rounded-md'
                  onClick={() => setActiveComponent('productCatalog')}
                >
                  <AiOutlineDollar className='mr-2' /> Product Catalog
                </li>
              </ul>
            </aside>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={85} minSize={40}>
          <div className='flex-1 p-0 overflow-auto'>
            <Header isOn={isOn} toggleSwitch={toggleSwitch} />
            <main>{renderComponent()}</main>
          </div>
        </ResizablePanel>
        {/* <main className='flex-1 p-0 overflow-auto'>{renderComponent()}</main> */}
      </ResizablePanelGroup>
    </div>
  );
}

export default Dashboard;

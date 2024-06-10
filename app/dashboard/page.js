'use client';
import React, { useState } from 'react';
import Balance from '@/app/dashboard/components/Balance';
import Developer from '@/app/dashboard/components/Developer';
import Home from '@/app/dashboard/components/Home';
import Product_Catalog from '@/app/dashboard/components/Settings';
import Transactions from '@/app/dashboard/components/Transactions';
import Header from '@/app/dashboard/components/Header';
import { FiHome } from 'react-icons/fi';
import { AiOutlineDollar } from 'react-icons/ai';
import { GrTransaction } from 'react-icons/gr';
import { CiUser } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa6';
import { SiConstruct3 } from 'react-icons/si';
import { TbSquareLetterW } from 'react-icons/tb';
import { IoSettingsOutline } from 'react-icons/io5';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable';
import Link from 'next/link';
import Developer2 from './components/Developer2';
import Wtransactions from '@/app/dashboard/components/Wtransactions';

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
            case 'wtransactions':
              return <Wtransactions />;
            case 'developer':
              return <Developer2 isTest={isOn} />;
            case 'productCatalog':
              return <Product_Catalog />;
            default:
              return <Home />;
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
            className={`bg-gradient-to-b from-blue-600 to-purple-400 text-white rounded-md `}
          >
            <aside className='py-5 px-4 mt-5 '>
              <ul>
                <li
                  className='mb-4 cursor-pointer flex items-center hover:bg-blue-500 transition-all duration-300 p-2 rounded-md'
                  onClick={() => setActiveComponent('home')}
                >
                  <FiHome className='mr-2 text-2xl ' />
                  Dashbord
                </li>
                <li
                  className='mb-4 cursor-pointer flex items-center hover:bg-blue-500 transition-all duration-300 p-2 rounded-md'
                  onClick={() => setActiveComponent('balance')}
                >
                  <AiOutlineDollar className='mr-2  text-2xl' /> Balance
                </li>
                <li
                  className='mb-4 cursor-pointer flex items-center hover:bg-blue-500 transition-all duration-300 p-2 rounded-md'
                  onClick={() => setActiveComponent('transactions')}
                >
                  <SiConstruct3 className='mr-2 text-2xl' /> Transactions
                </li>
                <li
                  className='mb-4 cursor-pointer flex items-center hover:bg-blue-500 transition-all duration-300 p-2 rounded-md'
                  onClick={() => setActiveComponent('wtransactions')}
                >
                  <TbSquareLetterW className='mr-2 text-2xl' /> Transactions
                </li>
                <li
                  className='mb-4 cursor-pointer flex items-center hover:bg-blue-500 transition-all duration-300 p-2 rounded-md'
                  onClick={() => setActiveComponent('developer')}
                >
                  <FaRegUser className='mr-2 test-xl text-2xl' /> Developer
                </li>
                <li
                  className='mb-4 cursor-pointer flex items-center hover:bg-blue-500 transition-all duration-300 p-2 rounded-md'
                  onClick={() => setActiveComponent('productCatalog')}
                >
                  <IoSettingsOutline className='mr-2 text-2xl' /> Settings
                </li>
              </ul>
            </aside>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={85} minSize={40}>
          <div className='flex-1 p-0 overflow-auto'>
            {activeComponent === 'developer' && (
              <Header isOn={isOn} toggleSwitch={toggleSwitch} />
            )}
            <main>{renderComponent()}</main>
          </div>
        </ResizablePanel>
        {/* <main className='flex-1 p-0 overflow-auto'>{renderComponent()}</main> */}
      </ResizablePanelGroup>
    </div>
  );
}

export default Dashboard;
